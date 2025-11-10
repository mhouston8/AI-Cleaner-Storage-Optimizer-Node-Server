require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { messaging } = require('./config/firebase');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Express server is running!' });
});

// Push notification endpoint
app.post('/send-notification', async (req, res) => {
  try {
    const { token, title, body, data } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Device token is required' });
    }

    const message = {
      notification: {
        title: title || 'Notification',
        body: body || 'You have a new notification'
      },
      data: data || {},
      token: token
    };

    const response = await messaging.send(message);
    res.json({ success: true, messageId: response });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).json({ error: 'Failed to send notification', details: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


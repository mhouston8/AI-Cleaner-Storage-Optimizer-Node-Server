import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import { startCronJobs } from './services/cronService';

const app = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Start cron jobs
startCronJobs();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



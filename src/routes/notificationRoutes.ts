import { Router } from 'express';
import { notificationController } from '../controllers/notificationController';

const router = Router();

// Test Firebase connection
router.get('/test/firebase', notificationController.testFirebase);

// Send notification to single device
router.post('/send-notification', notificationController.sendNotification);

// Send notification to all users
router.post('/send-notification/all', notificationController.sendNotificationToAll);

export default router;



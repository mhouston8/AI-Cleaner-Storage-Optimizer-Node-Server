import { Router, Request, Response } from 'express';
import notificationRoutes from './notificationRoutes';
import userRoutes from './userRoutes';
import subscriptionRoutes from './subscriptionRoutes';
import userDeviceRoutes from './userDeviceRoutes';
import { privacyController } from '../controllers/privacyController';

const router = Router();

// Basic route
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Express server is running!' });
});

// Health check endpoint for keeping service alive
router.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'Clean Sweep AI Node Server'
  });
});

// Privacy Policy endpoint
router.get('/privacy-policy', privacyController.getPrivacyPolicy);

// Mount route handlers
router.use('/', notificationRoutes);
router.use('/api/users', userRoutes);
router.use('/api/subscriptions', subscriptionRoutes);
router.use('/api/user-devices', userDeviceRoutes);

export default router;



import { Router, Request, Response } from 'express';
import notificationRoutes from './notificationRoutes';
import userRoutes from './userRoutes';
import subscriptionRoutes from './subscriptionRoutes';
import userDeviceRoutes from './userDeviceRoutes';

const router = Router();

// Basic route
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Express server is running!' });
});

// Mount route handlers
router.use('/', notificationRoutes);
router.use('/api/users', userRoutes);
router.use('/api/subscriptions', subscriptionRoutes);
router.use('/api/user-devices', userDeviceRoutes);

export default router;



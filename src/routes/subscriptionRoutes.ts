import { Router } from 'express';
import { subscriptionController } from '../controllers/subscriptionController';

const router = Router();

// Get all subscriptions
router.get('/', subscriptionController.getAll);

// Get subscription by ID
router.get('/:id', subscriptionController.getById);

// Get subscriptions by user ID
router.get('/user/:userId', subscriptionController.getByUserId);

// Create new subscription
router.post('/', subscriptionController.create);

export default router;



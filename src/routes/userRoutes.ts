import { Router } from 'express';
import { userController } from '../controllers/userController';

const router = Router();

// Get all users
router.get('/', userController.getAll);

// Get user by ID
router.get('/:id', userController.getById);

// Create new user
router.post('/', userController.create);

// Update user
router.put('/:id', userController.update);

export default router;



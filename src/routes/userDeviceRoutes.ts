import { Router } from 'express';
import { userDeviceController } from '../controllers/userDeviceController';

const router = Router();

// Get all user devices
router.get('/', userDeviceController.getAll);

// Get device by ID
router.get('/:id', userDeviceController.getById);

// Get devices by user ID
router.get('/user/:userId', userDeviceController.getByUserId);

// Create new user device
router.post('/', userDeviceController.create);

// Update user device
router.put('/:id', userDeviceController.update);

export default router;



import { Request, Response } from 'express';
import { userDeviceService } from '../services/supabaseService';

export const userDeviceController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await userDeviceService.getAll();
      res.json({ success: true, data });
    } catch (error: any) {
      console.error('Error fetching user devices:', error);
      res.status(500).json({ error: 'Failed to fetch user devices', details: error.message });
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await userDeviceService.getById(id);
      res.json({ success: true, data });
    } catch (error: any) {
      console.error('Error fetching device:', error);
      res.status(500).json({ error: 'Failed to fetch device', details: error.message });
    }
  },

  getByUserId: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const data = await userDeviceService.getByUserId(userId);
      res.json({ success: true, data });
    } catch (error: any) {
      console.error('Error fetching user devices:', error);
      res.status(500).json({ error: 'Failed to fetch user devices', details: error.message });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const data = await userDeviceService.create(req.body);
      res.json({ success: true, data });
    } catch (error: any) {
      console.error('Error creating user device:', error);
      res.status(500).json({ error: 'Failed to create user device', details: error.message });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await userDeviceService.update(id, req.body);
      res.json({ success: true, data });
    } catch (error: any) {
      console.error('Error updating user device:', error);
      res.status(500).json({ error: 'Failed to update user device', details: error.message });
    }
  }
};



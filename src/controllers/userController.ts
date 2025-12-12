import { Request, Response } from 'express';
import { userService } from '../services/supabaseService';

export const userController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await userService.getAll();
      res.json({ success: true, data });
    } catch (error: any) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users', details: error.message });
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await userService.getById(id);
      res.json({ success: true, data });
    } catch (error: any) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Failed to fetch user', details: error.message });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const data = await userService.create(req.body);
      res.json({ success: true, data });
    } catch (error: any) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user', details: error.message });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await userService.update(id, req.body);
      res.json({ success: true, data });
    } catch (error: any) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Failed to update user', details: error.message });
    }
  }
};



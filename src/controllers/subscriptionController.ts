import { Request, Response } from 'express';
import { subscriptionService } from '../services/supabaseService';

export const subscriptionController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await subscriptionService.getAll();
      res.json({ success: true, data });
    } catch (error: any) {
      console.error('Error fetching subscriptions:', error);
      res.status(500).json({ error: 'Failed to fetch subscriptions', details: error.message });
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await subscriptionService.getById(id);
      res.json({ success: true, data });
    } catch (error: any) {
      console.error('Error fetching subscription:', error);
      res.status(500).json({ error: 'Failed to fetch subscription', details: error.message });
    }
  },

  getByUserId: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const data = await subscriptionService.getByUserId(userId);
      res.json({ success: true, data });
    } catch (error: any) {
      console.error('Error fetching user subscriptions:', error);
      res.status(500).json({ error: 'Failed to fetch user subscriptions', details: error.message });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const data = await subscriptionService.create(req.body);
      res.json({ success: true, data });
    } catch (error: any) {
      console.error('Error creating subscription:', error);
      res.status(500).json({ error: 'Failed to create subscription', details: error.message });
    }
  }
};



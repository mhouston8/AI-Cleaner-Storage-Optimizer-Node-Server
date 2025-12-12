// Type definitions

export interface UserDevice {
  id: string;
  user_id: string;
  platform: string;
  fcm_token: string;
  updated_at: string;
  created_at: string;
}

export interface User {
  id: string;
  push_notifications_enabled?: boolean;
  [key: string]: any;
}

export interface NotificationRequest {
  token: string;
  title?: string;
  body?: string;
  data?: Record<string, string>;
}

export interface BroadcastNotificationRequest {
  title: string;
  body: string;
  data?: Record<string, string>;
  onlyEnabled?: boolean;
}



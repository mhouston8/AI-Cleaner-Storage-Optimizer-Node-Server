import { Request, Response } from 'express';

export const privacyController = {
  getPrivacyPolicy: (req: Request, res: Response) => {
    const privacyPolicy = {
      title: 'Privacy Policy',
      lastUpdated: new Date().toISOString().split('T')[0],
      effectiveDate: new Date().toISOString().split('T')[0],
      company: 'Clean Sweep AI',
      content: {
        introduction: 'Clean Sweep AI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.',
        
        informationWeCollect: {
          title: 'Information We Collect',
          items: [
            {
              type: 'Device Information',
              description: 'We collect device identifiers, platform information, and push notification tokens to deliver notifications and improve our services.'
            },
            {
              type: 'Usage Data',
              description: 'We may collect information about how you use our application, including features accessed and interaction patterns.'
            },
            {
              type: 'Subscription Information',
              description: 'If you subscribe to premium features, we collect subscription status and related information to manage your account.'
            }
          ]
        },
        
        howWeUseYourInformation: {
          title: 'How We Use Your Information',
          items: [
            'To provide and maintain our services',
            'To send push notifications and updates',
            'To manage subscriptions and premium features',
            'To improve and optimize our application',
            'To communicate with you about our services'
          ]
        },
        
        dataStorage: {
          title: 'Data Storage and Security',
          description: 'Your data is stored securely using Supabase and Firebase services. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        
        thirdPartyServices: {
          title: 'Third-Party Services',
          items: [
            {
              service: 'Firebase',
              purpose: 'Push notifications and analytics'
            },
            {
              service: 'Supabase',
              purpose: 'Database and backend services'
            },
            {
              service: 'RevenueCat',
              purpose: 'Subscription management (if applicable)'
            }
          ]
        },
        
        yourRights: {
          title: 'Your Rights',
          items: [
            'Access your personal data',
            'Request correction of inaccurate data',
            'Request deletion of your data',
            'Opt-out of push notifications',
            'Cancel your subscription at any time'
          ]
        },
        
        dataRetention: {
          title: 'Data Retention',
          description: 'We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal purposes.'
        },
        
        childrensPrivacy: {
          title: "Children's Privacy",
          description: 'Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.'
        },
        
        changesToPrivacyPolicy: {
          title: 'Changes to This Privacy Policy',
          description: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.'
        },
        
        contactUs: {
          title: 'Contact Us',
          description: 'If you have any questions about this Privacy Policy, please contact us at:',
          email: 'support@cleansweepai.com'
        }
      }
    };
    
    res.json(privacyPolicy);
  }
};

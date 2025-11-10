const admin = require('firebase-admin');
const serviceAccount = require('../mobile-ai-storage-cleaner-firebase-adminsdk-fbsvc-3dc69c8622.json');

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

// Export admin instance and messaging helper
module.exports = {
  admin,
  messaging: admin.messaging()
};


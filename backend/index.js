const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();
app.use(cors());
app.use(express.json());

// TODO: Replace with your Firebase service account config
// admin.initializeApp({
//   credential: admin.credential.cert(require('./serviceAccountKey.json')),
//   databaseURL: 'https://<your-project-id>.firebaseio.com'
// });

// --- API routes placeholder ---
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Members, Events, Assignments API will be implemented here

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend API listening on port ${PORT}`);
});

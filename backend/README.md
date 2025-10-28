# Worship Team Backend API

This is the Node.js Express backend for the church worship team scheduling system.

## Features
- RESTful API for members, events, and assignments
- Connects to Firebase Firestore
- CORS enabled

## Getting Started
1. Install dependencies:
   ```sh
   npm install
   ```
2. Add your Firebase service account key as `serviceAccountKey.json` in this folder.
3. Update the Firestore config in `index.js`.
4. Start the server:
   ```sh
   npm run dev
   ```

API endpoints are defined in the SDD and will be implemented in `/api` routes.

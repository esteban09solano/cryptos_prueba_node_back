# Crypto Investment Backend

## Description
Backend API for the crypto investment platform built with Express.js and MongoDB.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a .env file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/crypto-investment
   JWT_SECRET=your-super-secret-key-change-this-in-production
   NODE_ENV=development
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts
- `npm start`: Start the production server
- `npm run dev`: Start the development server with hot reload
- `npm test`: Run tests

## API Endpoints

### Auth Routes
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user

### User Routes
- GET /api/users/profile - Get user profile (protected)
- PUT /api/users/profile - Update user profile (protected)

## Project Structure
```
src/
  ├── config/         # Configuration files
  ├── controllers/    # Route controllers
  ├── middleware/     # Custom middleware
  ├── models/         # Database models
  ├── routes/         # Route definitions
  ├── utils/          # Utility functions
  ├── app.js         # Express app setup
  └── server.js      # Server entry point
```
# Droply

Droply is a file upload application with a React front end and an Express back end, using MongoDB for storage.

## Project Structure

- `/frontend`: React application for the front end, deployed on Vercel.
- `/backend`: Express server for handling file uploads, deployed on Render.
- `/uploads`: Directory for storing uploaded files (in the backend).

## Prerequisites

- Node.js and npm
- MongoDB (e.g., MongoDB Atlas)
- Vercel account for front-end deployment
- Render account for back-end deployment

## Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/moe-auda/droply.git
   cd droply
   ```

2. **Frontend Setup**
   - Navigate to `/frontend`:
     ```bash
     cd frontend
     npm install
     ```
   - Create a `.env` file with:
     ```
     REACT_APP_API_URL=https://your-backend.onrender.com
     ```
   - Update the Vercel URL in `/backend/server.js` for CORS.

3. **Backend Setup**
   - Navigate to `/backend`:
     ```bash
     cd backend
     npm install
     ```
   - Create a `.env` file with:
     ```
     MONGO_URI=mongodb://your-mongodb-uri
     PORT=5000
     ```
   - Ensure the `/uploads` directory exists.

4. **Deploy to Vercel**
   - Push the repository to GitHub.
   - In the Vercel dashboard, create a new project and connect to the `droply` repo.
   - Set the root directory to `frontend`.
   - Add the `REACT_APP_API_URL` environment variable.

5. **Deploy to Render**
   - In the Render dashboard, create a new Web Service and connect to the `droply` repo.
   - Set the root directory to `backend`.
   - Set the build command to `npm install` and start command to `node server.js`.
   - Add the `MONGO_URI` environment variable.

## Local Development

- **Frontend**:
  ```bash
  cd frontend
  npm start
  ```
  Runs on `http://localhost:3000`.

- **Backend**:
  ```bash
  cd backend
  npm start
  ```
  Runs on `http://localhost:5000`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
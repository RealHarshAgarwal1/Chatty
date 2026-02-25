# Chatty - Realtime Full Stack Chat Application

![Demo App](/frontend/public/screenshot-for-readme.png)

A modern, fast, and feature-rich real-time chat application built from the ground up using the MERN stack (MongoDB, Express, React, Node.js). 

## ✨ Key Features
- **Real-time Messaging**: Instant, bidirectional communication powered by Socket.io.
- **Secure Authentication**: Robust JWT-based authentication and secure session management.
- **Online Presence**: See which of your friends are online in real-time.
- **Media Support**: Send and receive images seamlessly (powered by Cloudinary API).
- **Responsive UI**: A beautiful, mobile-friendly interface built with Tailwind CSS and DaisyUI.
- **Global State**: Efficient state management using Zustand for lightning-fast UI updates.
- **Keep-Alive Architecture**: Automated background tasks to prevent server sleep on platforms like Render.

## 🛠️ Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, Daisy UI, Zustand, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **WebSockets**: Socket.io
- **Media Storage**: Cloudinary

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites
Make sure you have Node.js and npm installed on your computer. You will also need:
- A [MongoDB](https://www.mongodb.com/) Database URI
- A [Cloudinary](https://cloudinary.com/) Account (Cloud Name, API Key, API Secret)

### 1. Installation

Clone the repository and install all dependencies for both the frontend and backend simultaneously using the provided npm script:

```bash
npm install --prefix backend && npm install --prefix frontend
```

### 2. Environment Variables Setup

Create a `.env` file inside the `backend/` directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_super_secret_jwt_key
NODE_ENV=development

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Running the Development Server

To start both the frontend and backend servers together locally:

*Terminal 1 (Backend)*
```bash
npm run dev --prefix backend
```

*Terminal 2 (Frontend)*
```bash
npm run dev --prefix frontend
```
The app will be running at `http://localhost:5173`.

---

## 📦 Production Deployment

The repository is fully optimized for single-click deployment on platforms like Render.com.

1. Ensure the `NODE_ENV` variable is set to `production` via your hosting provider's dashboard.
2. Ensure you have set the `"build"` and `"start"` scripts inside the **root** `package.json` file.
3. Install dependencies and build the frontend:
```bash
npm run build 
```

4. Start the production server:
```bash
npm start
```
"# Chatty" 

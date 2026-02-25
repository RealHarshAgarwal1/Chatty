import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";
import cron from "node-cron";
import https from "https";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});

// Keep-alive cron job to prevent Render from sleeping
cron.schedule("*/10 * * * *", async () => {
  const backendUrl = process.env.NODE_ENV === "production"
    ? "https://your-render-app-url.onrender.com/api/auth/check" // Replace with actual production URL
    : `http://localhost:${PORT}/api/auth/check`;

  const requestModule = backendUrl.startsWith("https") ? https : await import("http");

  requestModule.get(backendUrl, (res) => {
    if (res.statusCode === 200 || res.statusCode === 401) {
      console.log("Keep-alive ping successful");
    } else {
      console.log("Keep-alive ping failed with status:", res.statusCode);
    }
  }).on("error", (err) => {
    console.log("Keep-alive ping error:", err.message);
  });
});

import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

const PORT = ENV.PORT || 3000;

// 👇 Yeh line sabse zaroori hai Render jaise cloud hosts ke liye
app.set("trust proxy", 1);

app.use(express.json({ limit: "5mb" })); // req.body

// Bulletproof CORS setup
app.use(cors({
  origin: true, 
  credentials: true
}));

app.options("*", cors({
  origin: true,
  credentials: true
}));

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});

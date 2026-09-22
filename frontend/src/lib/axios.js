import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:3000/api" 
    : "https://talk-nest-realtime-chat-app-mern.onrender.com/api",
  withCredentials: true,
});

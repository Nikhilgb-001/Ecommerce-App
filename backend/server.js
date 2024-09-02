import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/connection.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json()); //allows us to parse body of the request

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
  connectDB();
});

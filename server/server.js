import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is running at port ${PORT}`));

app.get("/", (req, res) => console.log("Hello World"));

app.use("/api/auth", authRoutes);

import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`App is running at port ${PORT}`));

app.get("/", (req, res) => console.log("Hello World"));

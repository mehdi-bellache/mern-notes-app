process.noDeprecation = true;
import "dotenv/config";

import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./db/connect.js";

const app = express();

app.use("/api/v1/notes", notesRoutes);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log(`app is listening on port ${port}...`);
  } catch (error) {
    console.log(error);
  }
};

start();

import "dotenv/config";

import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./db/connect.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(rateLimiter);
app.use(cors());

app.use("/api/v1/notes", notesRoutes);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

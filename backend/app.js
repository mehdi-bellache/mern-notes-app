import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/v1/notes", notesRoutes);

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});

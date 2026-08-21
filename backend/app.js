const express = require("express");
const notesRoutes = require("./routes/notesRoutes");

const app = express();

app.use("/api/v1/notes", notesRoutes);

// // get All notes
// app.get("/api/v1/notes", (req, res) => {
//   res.send("All notes");
// });

// // get one note
// app.get("/api/v1/notes/:id", (req, res) => {
//   res.send("get one note");
// });

// // create a note
// app.post("/api/v1/notes", (req, res) => {
//   res.json({ message: "note created" });
// });

// // update a note
// app.patch("api/v1/notes/:id", (req, res) => {
//   res.json({ message: "note updated successfully" });
// });

// // delete a note
// app.delete("api/v1/notes/:id", (req, res) => {
//   res.json({ message: "note deleted successfully" });
// });

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});

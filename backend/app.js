const express = require("express");

const app = express();

app.get("/api/v1/notes", (req, res) => {
  res.send("All notes");
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});

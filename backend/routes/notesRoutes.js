import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("all notes");
});

router.get("/:id", (req, res) => {
  res.send("get one note");
});

router.post("/", (req, res) => {
  res.json({ message: "note created" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "note updated successfully" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "note deleted successfully" });
});

export default router;

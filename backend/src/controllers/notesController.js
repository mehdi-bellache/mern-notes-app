export const getAllNotes = (req, res) => {
  res.send("All notes");
};

export const getNote = (req, res) => {
  res.send("get one note");
};

export const createNote = (req, res) => {
  res.json({ message: "note created" });
};

export const updateNote = (req, res) => {
  res.json({ message: "note updated successfully" });
};

export const deleteNote = (req, res) => {
  res.json({ message: "note deleted successfully" });
};

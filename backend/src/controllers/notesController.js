import Note from "../models/Note.js";
import StatusCodes from "http-status-codes";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({});
    res.status(StatusCodes.OK).json({ notes });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server error" });
  }
};

export const getNote = async (req, res) => {
  const noteId = req.params.id;
  const note = await Note.findOne({ _id: noteId });
  res.status(StatusCodes.OK).json({ note });
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

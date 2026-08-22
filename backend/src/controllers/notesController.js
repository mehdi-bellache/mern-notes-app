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

export const createNote = async (req, res) => {
  try {
    const name = req.body.name;
    const description = req.body.description;
    const note = await Note.create({ name, description });
    res.status(StatusCodes.CREATED).json(note);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const note = await Note.findOneAndUpdate({ _id: noteId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!note) {
      res.status(StatusCodes.NOT_FOUND).json({ message: "Note not found" });
    }
    res.status(StatusCodes.OK).json(note);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const note = await Note.findOneAndDelete({ _id: noteId });
    if (!note) {
      res.status(StatusCodes.NOT_FOUND).json({ message: "Note not found" });
    }
    res.status(StatusCodes.OK).json({ message: "Note Delete Successfully" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};

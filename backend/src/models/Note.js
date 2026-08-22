import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "must provide a name"],
      trim: true,
      minLength: [3, "name can not be less than 3 characters"],
      maxLength: [20, "name can not be more than 20 characters"],
    },

    description: {
      type: String,
      required: [true, "must provide a description"],
      maxLength: [50, "description can not be more than 50 characters"],
    },
  },
  { timestamps: true }, // createdAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;

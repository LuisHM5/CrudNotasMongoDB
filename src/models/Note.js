import { Schema, model } from "mongoose";

const NoteSchema = new Schema(
  {
    tittle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Note", NoteSchema);

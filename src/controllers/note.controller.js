import Note from "../models/Note";
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {}
};
export const getNote = async (req, res) => {
  try {
  } catch (error) {}
};

export const createNote = async (req, res) => {
  try {
  } catch (error) {}
};
export const updateNote = async (req, res) => {
  try {
  } catch (error) {}
};

export const deleteNote = async (req, res) => {
  try {
  } catch (error) {}
};

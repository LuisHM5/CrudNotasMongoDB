import Note from "../models/Note.js";

//Render methods
export const renderNoteForm = async (req, res) => {
  res.send("<h1>asdas</h1>");
};

export const renderUpdateNote = async (req, res) => {
  try {
  } catch (error) {}
};

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.log(error);
  }
};

//Crud methods

export const getNote = async (req, res) => {
  try {
  } catch (error) {}
};

export const createNote = async (req, res) => {
  try {
    res.send("holaaaaaaa");
  } catch (error) {}
};

export const updateNote = async (req, res) => {
  try {
    res.send("holaaaaaaa");
  } catch (error) {}
};

export const deleteNote = async (req, res) => {
  try {
  } catch (error) {}
};

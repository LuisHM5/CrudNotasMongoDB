import Note from "../models/Note.js";

//Render methods
export const renderAllNotes = async (req, res) => {
  const notes = await Note.find().lean();

  res.render("notes/all-notes", { notes });
};

export const renderNoteForm = async (req, res) => {
  res.render("notes/formNote");
};

export const renderUpdateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id).lean();
    res.render("notes/edit-note", { note });
  } catch (error) {}
};

//Crud methods

export const getNote = async (req, res) => {
  try {
  } catch (error) {}
};

export const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    console.log(title, description);
    const newNote = new Note({ title, description });
    await newNote.save();
    req.flash("success_msg", "Note Added Successfully");
    res.redirect("/notes");
  } catch (error) {}
};

export const updateNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash("success_msg", "Note Updated Successfully");
    res.redirect("/notes");
  } catch (error) {}
};

export const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Note Deleted Successfully");
    res.redirect("/notes");
  } catch (error) {}
};

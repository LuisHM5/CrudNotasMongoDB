import { Router } from "express";
import {
  renderAllNotes,
  renderNoteForm,
  createNote,
  renderUpdateNote,
  updateNote,
  deleteNote,
} from "../controllers/note.controller.js";
const router = Router();
//Render routes
router.get("/notes", renderAllNotes);
router.get("/notes/add", renderNoteForm);
router.get("/notes/edit/:id", renderUpdateNote);

//Crud routes
router.post("/notes/new-note", createNote);
router.put("/notes/edit/:id", updateNote);
router.delete("/notes/delete/:id", deleteNote);

export default router;

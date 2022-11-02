import { Router } from "express";
import {
  renderAllNotes,
  renderNoteForm,
  createNote,
  renderUpdateNote,
  updateNote,
  deleteNote,
} from "../controllers/note.controller.js";
import isAuthenticated from "../helpers/auth.js";

const router = Router();
//Render routes
router.get("/notes", isAuthenticated, renderAllNotes);
router.get("/notes/add", isAuthenticated, renderNoteForm);
router.get("/notes/edit/:id", isAuthenticated, renderUpdateNote);

//Crud routes
router.post("/notes/new-note", isAuthenticated, createNote);
router.put("/notes/edit/:id", isAuthenticated, updateNote);
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

export default router;

import { Router } from "express";
import {
  renderAllNotes,
  renderNoteForm,
  createNote,
  renderUpdateNote,
  updateNote,
  deleteNote,
} from "../controllers/note.controller.js";
import isAutenticated from "../helpers/auth.js";

const router = Router();
//Render routes
router.get("/notes", isAutenticated, renderAllNotes);
router.get("/notes/add", isAutenticated, renderNoteForm);
router.get("/notes/edit/:id", isAutenticated, renderUpdateNote);

//Crud routes
router.post("/notes/new-note", isAutenticated, createNote);
router.put("/notes/edit/:id", isAutenticated, updateNote);
router.delete("/notes/delete/:id", isAutenticated, deleteNote);

export default router;

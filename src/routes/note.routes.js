import { Router } from "express";
import {
  getAllNotes,
  renderNoteForm,
  createNote,
  renderUpdateNote,
  updateNote,
  deleteNote,
} from "../controllers/note.controller.js";
const router = Router();
//Render routes
router.get("/notes/add", renderNoteForm);

router.get("/notes/edit/:id", renderUpdateNote);

//Crud routes
router.get("/notes", getAllNotes);
router.get("/notes/delete/:id", deleteNote);

router.post("/notes/add", createNote);
router.put("/notes/edit/:id", updateNote);

export default router;

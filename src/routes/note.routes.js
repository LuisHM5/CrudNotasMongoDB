import { Router } from "express";
import { getAllNotes } from "../controllers/note.controller.js";
const router = Router();

router.get("/notes", getAllNotes);

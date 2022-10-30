import { Router } from "express";
import {
  renderSignupUserForm,
  renderSigninUserForm,
  signinUser,
  signupUser,
  logoutUser,
} from "../controllers/users.controller.js";
const router = Router();

router.get("/users/signup", renderSignupUserForm);
router.get("/users/signin", renderSigninUserForm);
router.post("/users/signup", signupUser);
router.post("/users/signin", signinUser);
router.get("/users/logout", logoutUser);

export default router;

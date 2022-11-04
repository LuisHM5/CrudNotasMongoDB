import express from "express";
import { engine } from "express-handlebars";
import methodOverride from "method-override";
import session from "express-session";
import flash from "connect-flash";

import passport from "passport";
import "./config/passport.js";

import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

//Routes imports
import router from "./routes/index.routes.js";
import notesRoutes from "./routes/note.routes.js";
import usersRoutes from "./routes/users.routes.js";

import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

// Initializations
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

dotenv.config();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride(`_method`));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});
// Routes

app.use(router);
app.use(notesRoutes);
app.use(usersRoutes);

// Static Files
app.use(express.static(path.join(__dirname, "public")));

export default app;

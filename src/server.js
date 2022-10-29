import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

import { engine } from "express-handlebars";

//Routes imports
import router from "./routes/index.routes.js";

import dotenv from "dotenv";

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
app.use(express.urlencoded({ extended: false }));
// Global variables

// Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.use(router);

// Static Files
app.use(express.static(path.join(__dirname, "public")));

export default app;

import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Initializations
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.urlencoded({ extended: false }));
// Global variables

// Routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Static Files
app.set(express.static(path.join(__dirname, "public")));

export default app;

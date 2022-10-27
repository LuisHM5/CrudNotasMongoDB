import app from "./server.js";

app.listen(app.get("port"), () => {
  console.log("Server running on port ", app.get("port"));
});
console.log("http://localhost:3000/");

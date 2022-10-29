import app from "./server.js";
import { connectToDB } from "./database.js";

app.listen(app.get("port"), () => {
  console.log("Server running on port ", app.get("port"));
  connectToDB();
});
console.log("http://localhost:3000/");

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 80;

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../FrontEnd/HTML/index.html"));
  //res.render(path.resolve(__dirname, "../FrontEnd/HTML/index.html"));
  //res.render("../FrontEnd/HTML/index.html");
  console.log(__dirname);
});

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}/`);
});

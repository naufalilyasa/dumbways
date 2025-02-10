const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "hbs");

app.use(express.static("assets"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.get("/blog-detail", (req, res) => {
  res.render("blog-detail");
});

app.get("/about/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Halaman ini pada id: ${id}`);
});

app.get("/blog", (req, res) => {
  // res.send("Blog Page");

  const { title, author, year } = req.query;
  res.send(`Blog berjudul ${title} ditulis oleh ${author} pada tahun ${year}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

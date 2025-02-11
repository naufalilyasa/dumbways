const express = require("express");
const app = express();
const port = 3000;
const hbs = require("hbs");
const path = require("path");
const { formatDateToWIB, getRelativeTime } = require("./utils/time.js");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));
// hbs.registerPartial("partial_name", "partial value");

app.use(express.static("assets"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

hbs.registerPartials(__dirname + "/views/partials", function (err) {});
hbs.registerHelper("equal", function (a, b) {
  return a === b;
});
hbs.registerHelper("formatDateToWIB", formatDateToWIB);
hbs.registerHelper("getRelativeTime", getRelativeTime);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/blog-create", (req, res) => {
  res.render("blog-create");
});

app.post("/blog-create", (req, res) => {
  const { title, content } = req.body;
  let blogs = [];
  let newBlog = {
    title: title,
    content: content,
    image: "https://picsum.photos/200/300",
    author: "Naufal",
    postedAt: new Date(),
  };

  blogs.push(newBlog);

  res.redirect("/blog");
});
// console.log("test");

app.get("/blog", (req, res) => {
  res.render("blog-list");
});

app.get("/blog-detail", (req, res) => {
  res.render("blog-detail");
});

app.get("/testimonials", (req, res) => {
  res.render("testimonials");
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

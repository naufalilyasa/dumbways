const express = require("express");
const hbs = require("hbs");
const methodOverride = require("method-override");

const app = express();
const port = 3000;

const {
  renderHomePage,
  renderContactPage,
  // renderBlogPage,
  // renderBlogDetailPage,
  renderCreateBlogPage,
  // renderEditBlogPage,
  // createBlog,
  // deleteBlog,
  // updateBlog,
  renderTestimonialsPage,
  renderNotFoundPage,
} = require("./controllers/controller-v1.js");
const {
  renderBlogPage,
  renderBlogDetailPage,
  renderEditBlogPage,
  deleteBlog,
  updateBlog,
  createBlog,
} = require("./controllers/controller-v2.js");
const { formatDateToWIB, getRelativeTime } = require("./utils/time.js");

const path = require("path");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));
// hbs.registerPartial("partial_name", "partial value");

app.use(express.static("assets"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

hbs.registerPartials(__dirname + "/views/partials", function (err) {});
hbs.registerHelper("equal", function (a, b) {
  return a === b;
});
hbs.registerHelper("formatDateToWIB", formatDateToWIB);
hbs.registerHelper("getRelativeTime", getRelativeTime);

// HOME PAGE
app.get("/", renderHomePage);

// CONTACT PAGE
app.get("/contact", renderContactPage);

// BLOG-LIST PAGE
app.get("/blogs", renderBlogPage);

// BLOG-DETAIL PAGE
app.get("/blog-detail/:id", renderBlogDetailPage);

// BLOG-CREATE PAGE
app.get("/blog-create", renderCreateBlogPage);

// BLOG-EDIT PAGE
app.get("/blog-edit/:id", renderEditBlogPage);

// CREATE BLOG
app.post("/blog-create", createBlog);

// EDIT BLOG
app.post("/blog-edit/:id", updateBlog);

// DELETE BLOG
app.delete("/blog/:id", deleteBlog);

// TESTIMONIALS PAGE
app.get("/testimonials", renderTestimonialsPage);

// 404 PAGE
app.get("*", renderNotFoundPage);

// app.get("/blog", (req, res) => {
//   // res.send("Blog Page");

//   const { title, author, year } = req.query;
//   res.send(`Blog berjudul ${title} ditulis oleh ${author} pada tahun ${year}`);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

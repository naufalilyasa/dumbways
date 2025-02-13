const { Sequelize, QueryTypes } = require("sequelize");
const config = require("../config/config.json");
const sequelize = new Sequelize(config.development);

// HOME PAGE
function renderHomePage(req, res) {
  res.render("index");
}

// CONTACT PAGE
function renderContactPage(req, res) {
  res.render("contact");
}

// TESTIMONIALS PAGE
function renderTestimonialsPage(req, res) {
  res.render("testimonials");
}

let blogs = [
  {
    title: "Pasar Coding di Indonesia",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo rerum cupiditate, quam deserunt libero minima tempora incidunt, nisi ratione inventore commodi adipisci animi architecto, nihil harum omnis sequi praesentium aspernatur unde recusandae eligendi nemo dicta perferendis? Cumque ipsum, corrupti vel delectus, at ut voluptates illo dolor repudiandae, qui ipsam eveniet!",
    image: "/img/class.webp",
    author: "Alex Joshua",
    postedAt: "2015-03-25",
  },
  {
    title: "title",
    content: "content",
    image: "https://picsum.photos/200/150",
    author: "Naufal",
    postedAt: new Date(),
  },
];

let blog = [];

// BLOG-LIST PAGE
async function renderBlogPage(req, res) {
  const blogs = await sequelize.query('SELECT * FROM public."Blogs"', {
    type: QueryTypes.SELECT,
  });
  // console.log(blogs);

  res.render("blog-list", { blogs: blogs });
}

// BLOG-DETAIL PAGE
function renderBlogDetailPage(req, res) {
  const id = req.params.id;
  const blogYangDipilih = blogs[id];

  res.render("blog-detail", { blog: blogYangDipilih });
}

// BLOG-CREATE PAGE
function renderCreateBlogPage(req, res) {
  res.render("blog-create");
}

// CREATE BLOG
function createBlog(req, res) {
  const { title, content } = req.body;

  let newBlog = {
    title: title,
    content: content,
    image: "https://picsum.photos/200/150",
    author: "Naufal",
    postedAt: new Date(),
  };

  blogs.push(newBlog);

  // res.send({ blogs: blogs });
  res.redirect("/blogs");
}

// DELETE BLOG
function deleteBlog(req, res) {
  const id = req.params.id;

  blogs.splice(id, 1);
  res.redirect("/blogs");
}

// BLOG-EDIT PAGE
function renderEditBlogPage(req, res) {
  const id = req.params.id;
  const blogYangDipilih = blogs[id];
  // console.log(blogYangDipilih);
  res.render("blog-edit", { blog: blogYangDipilih, index: id });
}

// UPDATE BLOG
function updateBlog(req, res) {
  const id = req.params.id;
  const { title, content } = req.body;
  const { image, author, postedAt } = blogs[id];
  blogs[id] = {
    title: title,
    content: content,
    image: image,
    author: author,
    postedAt: postedAt,
  };
  res.redirect("/blogs");
  // blog;
  // blogs.push();
}

module.exports = {
  renderHomePage,
  renderContactPage,
  renderBlogPage,
  renderBlogDetailPage,
  renderCreateBlogPage,
  renderEditBlogPage,
  createBlog,
  updateBlog,
  deleteBlog,
  renderTestimonialsPage,
};

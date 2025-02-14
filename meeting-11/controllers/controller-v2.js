const { Sequelize } = require("sequelize");
const config = require("../config/config.json");
const { Blog } = require("../models/");

const sequelize = new Sequelize(config.development);

// RENDER BLOGS PAGE
async function renderBlogPage(req, res) {
  const blogs = await Blog.findAll({
    order: [["createdAt", "DESC"]],
  });
  console.log(blogs);

  res.render("blog-list", { blogs: blogs });
}

// RENDER EDIT PAGE
async function renderEditBlogPage(req, res) {
  const id = req.params.id;

  const blogYangDipilih = await Blog.findOne({
    where: { id: id },
  });

  if (blogYangDipilih === null) {
    res.render("page-404");
  } else {
    res.render("blog-edit", { blog: blogYangDipilih });
  }
}

// RENDER BLOG DETAIL PAGE
async function renderBlogDetailPage(req, res) {
  const id = req.params.id;

  const blogYangDipilih = await Blog.findOne({
    where: { id: id },
  });

  if (blogYangDipilih === null) {
    res.render("page-404");
  } else {
    res.render("blog-detail", { blog: blogYangDipilih });
  }
}

// CREATE BLOG
async function createBlog(req, res) {
  const { title, content } = req.body;
  let image = "https://picsum.photos/200/150";
  const createdBlog = await Blog.create({
    title: title,
    image: image,
    content: content,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.error(error));

  res.redirect("/blogs");
}

// DELETE BLOG
async function deleteBlog(req, res) {
  const id = req.params.id;

  const deletedBlog = await Blog.destroy({
    where: { id: id },
  });

  res.redirect("/blogs");
}

// UPDATE BLOG
async function updateBlog(req, res) {
  const id = req.params.id;
  const { title, content } = req.body;

  const updatedBlog = await Blog.update(
    {
      title: title,
      content: content,
    },
    {
      where: { id: id },
    }
  );

  res.redirect("/blogs");
}

module.exports = {
  renderBlogPage,
  renderEditBlogPage,
  renderBlogDetailPage,
  deleteBlog,
  updateBlog,
  createBlog,
};

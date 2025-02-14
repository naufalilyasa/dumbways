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

// let blogs = [
//   {
//     title: "Pasar Coding di Indonesia",
//     content:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo rerum cupiditate, quam deserunt libero minima tempora incidunt, nisi ratione inventore commodi adipisci animi architecto, nihil harum omnis sequi praesentium aspernatur unde recusandae eligendi nemo dicta perferendis? Cumque ipsum, corrupti vel delectus, at ut voluptates illo dolor repudiandae, qui ipsam eveniet!",
//     image: "/img/class.webp",
//     author: "Alex Joshua",
//     postedAt: "2015-03-25",
//   },
//   {
//     title: "title",
//     content: "content",
//     image: "https://picsum.photos/200/150",
//     author: "Naufal",
//     postedAt: new Date(),
//   },
// ];

let blog = [];

// BLOG-LIST PAGE
// async function renderBlogPage(req, res) {
//   const blogs = await sequelize.query(
//     'SELECT * FROM public."Blogs" ORDER BY "createdAt" DESC',
//     {
//       type: QueryTypes.SELECT,
//     }
//   );

//   res.render("blog-list", { blogs: blogs });
// }

// BLOG-DETAIL PAGE
async function renderBlogDetailPage(req, res) {
  const id = req.params.id;

  const query = `SELECT * FROM "Blogs" WHERE id = ${id}`;
  const blogYangDipilih = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });

  res.render("blog-detail", { blog: blogYangDipilih[0] });
}

// BLOG-CREATE PAGE
function renderCreateBlogPage(req, res) {
  res.render("blog-create");
}

// CREATE BLOG
// async function createBlog(req, res) {
//   const { title, content } = req.body;

//   let image = "https://picsum.photos/200/150";
//   let query = `INSERT INTO public."Blogs" (title, image, content)
// 	VALUES ('${title}', '${image}', '${content}')`;

//   const newBlogs = await sequelize.query(query, {
//     type: QueryTypes.INSERT,
//   });

//   res.redirect("/blogs");
// }

// DELETE BLOG
// async function deleteBlog(req, res) {
//   const id = req.params.id;

//   const query = `DELETE FROM "Blogs" WHERE id = ${id}`;
//   await sequelize.query(query, {
//     type: QueryTypes.DELETE,
//   });

//   // blogs.splice(id, 1);
//   res.redirect("/blogs");
// }

// BLOG-EDIT PAGE
// async function renderEditBlogPage(req, res) {
//   const id = req.params.id;
//   let query = `SELECT * FROM "Blogs" WHERE id = ${id}`;
//   const blogYangDipilih = await sequelize.query(query, {
//     type: QueryTypes.SELECT,
//   });

//   res.render("blog-edit", { blog: blogYangDipilih[0] });
// }

// UPDATE BLOG
// async function updateBlog(req, res) {
//   const id = req.params.id;
//   const { title, content } = req.body;
//   let query = `UPDATE "Blogs" SET title = '${title}', content = '${content}' WHERE id = ${id}`;
//   const updateBlog = await sequelize.query(query, {
//     type: QueryTypes.UPDATE,
//   });

//   res.redirect("/blogs");
// }

async function renderNotFoundPage(req, res) {
  res.render("page-404");
}

module.exports = {
  renderHomePage,
  renderContactPage,
  // renderBlogPage,
  // renderBlogDetailPage,
  renderCreateBlogPage,
  // renderEditBlogPage,
  // createBlog,
  // updateBlog,
  // deleteBlog,
  renderTestimonialsPage,
  renderNotFoundPage,
};

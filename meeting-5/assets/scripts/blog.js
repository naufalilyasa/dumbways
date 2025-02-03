let blogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  let image = document.getElementById("image");

  let imageFileName = URL.createObjectURL(image.files[0]);

  let blog = {
    title: title,
    content: content,
    image: imageFileName,
    author: "Naufal",
    posetedAt: new Date(),
  };

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  let blogListElement = document.getElementById("blogList");

  blogListElement.innerHTML = firstBlogContent();

  for (let index = 0; index < blogs.length; index++) {
    console.log(blogs[index]);

    blogListElement.innerHTML += `
            <article class="blog-item">
                <div class="blog-item-img">
                    <img src="${blogs[index].image}" alt="">
                </div>
                <div class="blog-item-text">
                    <div class="blog-item-buttons">
                        <button class="blog-edit-button">Edit Blog</button>
                        <button class="blog-post-button">Post Blog</button>
                    </div>
                    <h1>${blogs[index].title}</h1>
                    <p>${formatToWib}| ${blogs[index].author}</p>
                    <p>${blogs[index].content}</p>
                </div>
            </article>
        `;
  }
}

function firstBlogContent() {
  return `
        <article class="blog-item">
            <div class="blog-item-img">
                <img src="assets/img/class.webp" alt="">
            </div>
            <div class="blog-item-text">
                <div class="blog-item-buttons">
                    <button class="blog-edit-button">Edit Blog</button>
                    <button class="blog-post-button">Post Blog</button>
                </div>
                <h1>Pasar Coding di Indonesia</h1>
                <p>30 Jan 2025 11:22 WIB | Alex Josua</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas temporibus quaerat! Rerum vero atque perspiciatis quas corporis hic consequuntur incidunt unde ipsam iste nostrum voluptates deleniti laboriosam dicta et tenetur, tempora quaerat facere consequatur fuga error sequi nesciunt modi reiciendis. Perspiciatis eligendi fugiat necessitatibus ad ab aut quo reprehenderit.</p>
            </div>
        </article>
    `;
}

function formatToWib(date) {
  let date = date;
  let monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  let day = date.getDate().toString().padStart(2, "0");
  let month = date.getMonth().toString();
  let year = date.getYear().toString().padStart(2, "0");
}

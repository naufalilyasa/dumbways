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
    postedAt: new Date(),
  };

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  let blogListElement = document.getElementById("blogList");

  blogListElement.innerHTML = firstBlogContent();

  for (let index = 0; index < blogs.length; index++) {
    // console.log(blogs[index]);

    blogListElement.innerHTML += `
          <article class="col border border-2 rounded p-3 mb-3">
            <div class="row row-cols-lg-2 row-cols-sm-1 gy-3">
              <div class="col-lg-4">
                <img
                  src="${blogs[index].image}"
                  alt="in the classroom"
                  class="blog-img-width rounded"
                />
              </div>
              <div class="col-lg-8">
                <div class="d-flex flex-column">
                  <div
                    class="d-flex flex-row justify-content-end gap-3 order-lg-1 order-2"
                  >
                    <a href="#" class="btn btn-secondary">Edit Blog</a>
                    <a href="#" class="btn btn-primary">Post Blog</a>
                  </div>
                  <div class="d-flex flex-column order-lg-2 order-1">
                    <a
                      href="/blog-detail"
                      class="text-decoration-none fs-1 fw-bold text-black"
                    >
                      <h1>${blogs[index].title}</h1>

                    </a>
                    <p>
                      ${formatToWib(blogs[index].postedAt)} | ${
      blogs[index].author
    }
                    </p>
                    <p>
                      ${blogs[index].content}
                    </p>
                    <p class="blog-item-relative-time">
                      ${getRelativeTime(blogs[index].postedAt)}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>
        `;
  }
}

function firstBlogContent() {
  return `
        <article class="col border border-2 rounded p-3 mb-3">
            <div class="row row-cols-lg-2 row-cols-sm-1 gy-3">
              <div class="col-lg-4">
                <img
                  src="img/class.webp"
                  alt="in the classroom"
                  class="blog-img-width rounded"
                />
              </div>
              <div class="col-lg-8">
                <div class="d-flex flex-column">
                  <div
                    class="d-flex flex-row justify-content-end gap-3 order-lg-1 order-2"
                  >
                    <a href="#" class="btn btn-secondary">Edit Blog</a>
                    <a href="#" class="btn btn-primary">Post Blog</a>
                  </div>
                  <div class="d-flex flex-column order-lg-2 order-1">
                    <a
                      href="/blog-detail"
                      class="text-decoration-none fs-1 fw-bold text-black"
                    >
                      <h1>Pasar Coding di Indonesia</h1>

                    </a>
                    <p>${formatToWib(new Date())} | Alex Josua</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Hic quas temporibus quaerat! Rerum vero atque perspiciatis
                      quas corporis hic consequuntur incidunt unde ipsam iste
                      nostrum voluptates deleniti laboriosam dicta et tenetur,
                      tempora quaerat facere consequatur fuga error sequi
                      nesciunt modi reiciendis. Perspiciatis eligendi fugiat
                      necessitatibus ad ab aut quo reprehenderit.
                    </p>
                    <p class="blog-item-relative-time">${getRelativeTime(
                      new Date()
                    )}</p>
                  </div>

                </div>
              </div>
            </div>
          </article>
    `;
}

function formatToWib(date) {
  let dateNow = date;
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

  let day = dateNow.getDate().toString().padStart(2, "0");
  let month = monthList[dateNow.getMonth()];
  let year = dateNow.getFullYear();

  let hours = dateNow.getHours().toString().padStart(2, "0");
  let minutes = dateNow.getMinutes().toString().padStart(2, "0");
  let formattedDate = `${
    day + " " + month + " " + year + " " + hours + ":" + minutes + " WIB "
  }`;
  console.log(formattedDate);

  return formattedDate;
}

function getRelativeTime(postTime) {
  let now = new Date();
  let diffTime = now - postTime;
  let diffInSeconds = Math.floor(diffTime / 1000);
  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  }

  let diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  }

  let diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 60) {
    return `${diffInHours} hours ago`;
  }

  let diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 60) {
    return `${diffInDays} days ago`;
  }

  let diffInMonth = Math.floor(diffInDays / 30);
  return `${diffInMonth} month${diffInMonth === 1 ? "" : "s"} ago`;
}

let hamburgerButton = document.getElementById("hamburgerButton");
let mobileMenuList = document.getElementById("mobileMenuList");

hamburgerButton.addEventListener("click", () => {
  mobileMenuList.classList.toggle("show");
});

window.onclick = (event) => {
  if (!event.target.matches(".hamburger-button")) {
    let dropdowns = document.getElementsByClassName("mobile-menu-list");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

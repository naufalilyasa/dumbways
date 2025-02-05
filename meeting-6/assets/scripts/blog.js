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
            <article class="blog-item">
              <div class="blog-item-img">
                <img src="${blogs[index].image}" alt="">
              </div>
              <div class="blog-item-text">
                <div class="blog-item-buttons">
                    <button class="blog-edit-button">Edit Blog</button>
                    <button class="blog-post-button">Post Blog</button>
                </div>
                <div class="blog-item-text-content">
                  <h1>${blogs[index].title}</h1>
                  <p>${formatToWib(blogs[index].postedAt)} | ${
      blogs[index].author
    }</p>
                  <p>${blogs[index].content}</p>
                  <p class="blog-item-relative-time">${getRelativeTime(
                    blogs[index].postedAt
                  )}</p>
                </div>  
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
            <div class="blog-item-text-content">
              <h1>Pasar Coding di Indonesia</h1>
              <p>${formatToWib(new Date())} | Alex Josua</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                quas temporibus quaerat! Rerum vero atque perspiciatis quas
                corporis hic consequuntur incidunt unde ipsam iste nostrum
                voluptates deleniti laboriosam dicta et tenetur, tempora quaerat
                facere consequatur fuga error sequi nesciunt modi reiciendis.
                Perspiciatis eligendi fugiat necessitatibus ad ab aut quo
                reprehenderit.
              </p>
              <p class="blog-item-relative-time">${getRelativeTime(
                new Date()
              )}</p>
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

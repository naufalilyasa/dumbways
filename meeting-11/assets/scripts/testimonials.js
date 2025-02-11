let testimonials = [
  {
    image: "user-1.jpg",
    author: "Amir Mahmud",
    rating: 5,
    caption: "Keren banget!",
  },
  {
    image: "user-2.jpg",
    author: "Alex Josua",
    rating: 5,
    caption: "Mantaapp! Terima kasih",
  },
  {
    image: "user-3.jpg",
    author: "Christina Adelia",
    rating: 4,
    caption: "Sudah bagus! suka banget",
  },
  {
    image: "coding.jpg",
    author: "Leo G",
    rating: 2,
    caption: "Sudah bagus tapi harus diperbaiki lagi",
  },
  {
    image: "user-4.png",
    author: "Amel Effendi",
    rating: 4,
    caption: "Asik banget!",
  },
];

const testimonialsContainer = document.getElementById("testimonialsContainer");

const testimonialsHTML = (testimonials) => {
  return testimonials.map((testimonial) => {
    `<article class="col">
            <div class="card border border-dark-subtle border-2 p-3">
              <img class="card-img-top" src="img/${testimonial.image}" alt="" />
              <div class="card-body">
                <p class="fw-light text-body-tertiary fst-italic">"${testimonial.caption}"</p>
                <p class="card-text text-end">- ${testimonial.author}</p>
                <p class="card-text text-end">★${testimonial.rating}</p>
              </div>
            </div>
          </article>`.join("");
  });
};

function showAllTestimonials() {
  testimonialsContainer.innerHTML = testimonialsHTML(testimonials);
}

showAllTestimonials();

function filterTestimonialsByStar(rating) {
  const filteredTestimonials = testimonials.filter((testimonial) => {
    testimonial.rating === rating;
  });

  testimonialsContainer.innerHTML = testimonialsHTML(filteredTestimonials);
}

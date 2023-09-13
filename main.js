const sliders = [
  {
    id: 1,
    title: "Explore The World",
    image: "./images/image1.jpg",
  },
  {
    id: 2,
    title: "Wild Forest",
    image: "./images/image2.jpg",
  },
  {
    id: 3,
    title: "Sunny Beach",
    image: "./images/image3.jpg",
  },
  {
    id: 4,
    title: "City on Winter",
    image: "./images/image4.jpg",
  },
  {
    id: 5,
    title: "Mountains - Clouds",
    image: "./images/image5.jpg",
  },
];

const slidersContainer = document.querySelector(".sliders");

sliders.forEach(({ image, title }) => {
  slidersContainer.innerHTML += `
    <div class="slider-card">
        <img src=${image} />
        <h4 class="card-title">${title}</h4>
      </div>
    `;
});

const sliderCards = document.querySelectorAll(".slider-card");

sliderCards.forEach((sliderCard) => {
  sliderCards[0].classList.add("active");
  sliderCard.addEventListener("click", (e) => {
    e.preventDefault();
    sliderCards.forEach((sliderCard) => {
      sliderCard.classList.remove("active");
    });
    sliderCard.classList.add("active");
  });
});

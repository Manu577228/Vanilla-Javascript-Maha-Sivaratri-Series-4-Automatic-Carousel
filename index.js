const carousel = document.getElementById("image-carousel");
let index = 0;

const runCarousel = () => {
  index++;
  if (index >= carousel.children.length) {
    index = 0;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(0)`;
  } else {
    carousel.style.transition = "transform 0.3s ease-in-out";
    carousel.style.transform = `translateX(${-index * 500}px)`;
  }
};

setInterval(runCarousel, 2000);

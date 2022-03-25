// todo toggle button for menu bars

const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  const link = document.querySelector(".links");
  link.classList.toggle("show-links");
});

// todo carousel for projects

const buttons = document.querySelectorAll("[data-carousel-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // todo find out the value if it is next or prev
    const nextMove = btn.dataset.carouselBtn === "next" ? 1 : -1;
    //  todo get access to the parent which is the carousel itself and then to the slides(ul)

    const slides = btn
      .closest("[data-carousel]")
      .querySelector("[data-carousel-slides]");

    // todo get the index of the current slide
    const activeSlide = slides.querySelector("[data-active]");
    const currentActiveSlideIndex = [...slides.children].indexOf(activeSlide);

    let newIndex = currentActiveSlideIndex + nextMove;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    delete activeSlide.dataset.active;
    slides.children[newIndex].dataset.active = true;
  });
});

// todo navbar scroll

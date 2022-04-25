// todo toggle button for menu bars
const home = document.getElementById("home").offsetTop;

const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  const link = document.querySelector(".links");
  link.classList.toggle("show-links");
});

// todo fixed navbar

const links = document.querySelectorAll("[data-link]");
const nav = document.getElementById("nav");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // exp get the href attribute of the link and remove the pound sign using slice method
    const link = e.currentTarget.getAttribute("href").slice(1);
    // exp get the element from the extracted href
    const element = document.getElementById(link);
    console.log("navbarheight", nav.getBoundingClientRect().height);
    console.log("element offsettop", element.offsetTop);
    const topPosition = element.offsetTop - nav.getBoundingClientRect().height;

    window.scrollTo({
      left: 0,
      top: topPosition,
    });
  });
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

//  todo projects cards & carousel
const projects = [
  {
    name: "Argao's Best Delicacies Shop",
    technology: ["react", "redux", "open-props", "sass"],
    site: {
      live: "https://liezsm.github.io/argao-delicacies-shop/#/argao-delicacies-shop/",
      code: "https://github.com/liezsm/argao-delicacies-shop",
    },
    description:
      "A simple e-commerce app that I have made proudly selling the best food in my town, Torta and Tableya. It can do the simple functionality of a ecommerce like adding to cart, compute the total, able to add or decrease items using React and Redux Toolkit for state management",
    img: "./dist/images/projects/argao-shop.png",
  },
  {
    name: "Todo App",
    technology: ["react", "react-beautiful-dnd", "sass"],
    site: {
      live: "https://liezsm.github.io/todo-app-frontendmentor/",
      code: "https://github.com/liezsm/todo-app-frontendmentor",
    },
    description:
      " App for creating your to-do list and features suchs as rearranging the items by dragging the item and toggle for dark/light theme preferrence but automatically switch according to your device's theme preference already set.",
    img: "./dist/images/projects/todo-app.png",
  },

  {
    name: "Guilang's Tableya Landing Page",
    technology: ["html", "css", "sass", "javascript"],
    site: {
      live: "https://liezsm.github.io/guilangs-tableya/#",
      code: "https://github.com/liezsm/guilangs-tableya",
    },
    description:
      "I made a simple landing page for a famous product here in my Town in Argao, Cebu",
    img: "./dist/images/projects/tableya.png",
  },

  {
    name: "Rock Paper Scissors Game",
    technology: ["html", "css", "sass(using gulp)", "vanilla -javascript"],
    site: {
      live: "https://liezsm.github.io/rock-paper-scissor-game/",
      code: "https://github.com/liezsm/rock-paper-scissor-game",
    },
    description: "Play rock paper scissor game against computer",
    img: "./dist/images/projects/rps-game.png",
  },

  {
    name: " Sunnyside Landing Page",
    technology: ["html", "css", "vanilla -javascript"],
    site: {
      live: "https://liezsm.github.io/frontendmentor-sunnyside-landing-page/",
      code: "https://github.com/liezsm/frontendmentor-sunnyside-landing-page",
    },
    description: " A landing page for a made-up company.",
    img: "./dist/images/projects/sunny-side.png",
  },

  {
    name: "Calculator App",
    technology: ["html", "css", "vanilla -javascript", "sass"],
    site: {
      live: "https://liezsm.github.io/calculator-app-frontendmentor-challenge/",
      code: "https://github.com/liezsm/calculator-app-frontendmentor-challenge",
    },
    description: "Calculator with theme-switcher",
    img: "./dist/images/projects/calculator-app.png",
  },

  {
    name: "Advice Generator App",
    technology: ["html", "css", "vanilla -javascript", "sass"],
    site: {
      live: "https://liezsm.github.io/advice-generator-app/",
      code: "https://github.com/liezsm/advice-generator-app",
    },
    description: " Get random advice everytime you click the dice button",
    img: "./dist/images/projects/advice-generator.png",
  },

  {
    name: "Booklist App",
    technology: ["react", "bootstrap"],
    site: {
      live: "https://liezsm.github.io/react-exercise-book-app/#/react-exercise-book-app/",
      code: "https://github.com/liezsm/react-exercise-book-app",
    },
    description:
      "I build this simple project that can create, edit, update and delete a book after finishing a beginner's course in React.",
    img: "./dist/images/projects/booklist-app.png",
  },
];

// todo add the slides to the carousel for mobile only

const carouselSlides = document.querySelector("[data-carousel-slides]");

const slideItem = projects
  .map((p) => {
    const { name, technology, site, description, img } = p;
    const techItem = technology
      .map((i) => `<span class="tech_item">${i}</span>`)
      .join("");
    return `
    <li class="carousel-slide">
                <div class="slide-content">
                  <div class="card">
                    <img src="${img}" alt="">
                  </div>
                  <div class="project-description">

                      <p class="project-title">${name}
                      </p>
                      
                     <div class="project_techUsed">
                   ${techItem}
                       
                     </div>
                     <div class="project-source">
                        <div class="preview-site">
                         <a href="${site.live}"
                         target="blank"
                         >
                         Preview Site
                           <i class="fas fa-external-link"></i>
                         </a>
                         </div>
                        <div class="preview-site">
                         <a href="${site.code}"
                         target="blank"
                         >View Code
                           <i class="fas fa-external-link"></i>
                         </a>
                         </div>

                     </div>
                    
                    <p class="description-text">
                   ${description}
                    </p>

                  </div>
                
                </div>
              </li>
  `;
  })
  .join("");
carouselSlides.innerHTML = slideItem;
// todo set the first slide to active
carouselSlides.children[0].setAttribute("data-active", "true");

// todo add the project in each card for desktops screen sizes

const projectWrap = document.querySelector("[data-project-card]");

const projectsCard = projects
  .map((p) => {
    const { name, technology, site, description, img } = p;
    const techItem = technology
      .map((i) => `<span class="tech_item">${i}</span>`)
      .join("");

    return `
        
            <div class="project-item">
              <div class="project-item-image">
                <img src="${img}" alt="">
              </div>

              <div class='project-description'>
  <p class='project-title'>${name}</p>

  <div class='project_techUsed'>${techItem}</div>
  <div class='project-source'>
    <div class='preview-site'>
      <a href='${site.live}' target='blank'>
        Preview Site
        <i class='fas fa-external-link'></i>
      </a>
    </div>
    <div class='preview-site'>
      <a href='${site.code}' target='blank'>
        View Code
        <i class='fas fa-external-link'></i>
      </a>
    </div>
  </div>

  <p class='description-text'>${description}</p>
</div>
             
            </div>
      `;
  })
  .join("");

projectWrap.innerHTML = projectsCard;

// todo github button to show up
const githubBtn = document.querySelector(".github-btn");

window.addEventListener("scroll", () => {
  const navbarHeight = document
    .getElementById("nav")
    .getBoundingClientRect().height;

  const scrolledHeight = window.pageYOffset;

  // todo add the arrowup if we scroll more than the desired px we want

  if (scrolledHeight > 500) {
    githubBtn.classList.add("show-github-btn");
  } else {
    githubBtn.classList.remove("show-github-btn");
  }
});

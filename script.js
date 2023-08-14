"use strict";

// Stats timer //
const valueDisplays = document.querySelectorAll(".number");
const stats = document.querySelector(".stats-section__statistics");
let interval = 5000;

const statsTimer = function () {
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
};

const statsObserver = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    return;
  } else {
    statsTimer();
  }

  observer.unobserve(entry.target);
};

const obsStats = {
  root: null,
  threshold: 1,
};

const observerStats = new IntersectionObserver(statsObserver, obsStats);
observerStats.observe(stats);

// About Slider //
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const sliderBtnLeft = document.querySelector(".slider__btn--left");
const sliderBtnRight = document.querySelector(".slider__btn--right");
let currSlide = 0;
const maxSlide = slides.length;

const dotContainer = document.querySelector(".dots");

const createDots = function () {
  slides.forEach(function (s, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  goToSlide(currSlide);
  activateDot(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
  activateDot(currSlide);
};

const init = function () {
  goToSlide(0);
  createDots();

  activateDot(0);
};
init();

sliderBtnRight.addEventListener("click", nextSlide);
sliderBtnLeft.addEventListener("click", prevSlide);

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const sl = e.target.dataset.slide;
    goToSlide(sl);
    activateDot(sl);
  }
});

// Heading animation //
const headings = document.querySelectorAll(".heading");

const revealHeading = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    return;
  } else {
    entry.target.classList.remove("heading__hidden");
    entry.target.classList.add("active");
  }

  observer.unobserve(entry.target);
};

const obsHeadingOptions = {
  root: null,
  threshold: 0.6,
};

const observerHeading = new IntersectionObserver(
  revealHeading,
  obsHeadingOptions
);

headings.forEach((heading) => observerHeading.observe(heading));

// Sticky nav //
const hero = document.querySelector(".hero-section");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
const sections = document.querySelectorAll(".section");

const stickyNav = function (entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    nav.classList.remove("sticky");
  } else {
    nav.classList.add("sticky");
  }

  // observer.unobserve(entry.target);
};

const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.8,
});

// sections.forEach((section) => navObserver.observe(section));
navObserver.observe(hero);

// Nav btns //
const btnAbout = document.querySelector(".btn-about");
const btnGallery = document.querySelector(".btn-gallery");
const btnContact = document.querySelector(".btn-contact");
const sectionAbout = document.querySelector(".slider-container");
const sectionGallery = document.querySelector(".gallery");
const sectionContact = document.querySelector(".contact");

btnAbout.addEventListener("click", function (e) {
  sectionAbout.scrollIntoView({
    behavior: "smooth",
  });
});

btnGallery.addEventListener("click", function (e) {
  sectionGallery.scrollIntoView({
    behavior: "smooth",
  });
});

btnContact.addEventListener("click", function (e) {
  sectionContact.scrollIntoView({
    behavior: "smooth",
  });
});

// Sponsors Slider //
const sponsSlider = document.querySelector(".sponsors__slider");
const sponsSlides = document.querySelectorAll(".sponsors__slider--item");
let slidesArray = Array.from(sponsSlides);
console.log(slidesArray);

const updateSlides = function () {
  slidesArray.forEach((el) => {
    el.classList.remove("sponsors__slider--item-1");
    el.classList.remove("sponsors__slider--item-2");
    el.classList.remove("sponsors__slider--item-3");
    el.classList.remove("sponsors__slider--item-4");
    el.classList.remove("sponsors__slider--item-5");
  });

  slidesArray.forEach((el, i) => {
    el.classList.add(`sponsors__slider--item-${i + 1}`);
  });
};

const setCurrentState = function () {
  slidesArray = [...slidesArray, slidesArray.shift()];
  // slidesArray.shift();
  console.log(slidesArray);
  updateSlides();
};

setInterval(setCurrentState(), 1000);

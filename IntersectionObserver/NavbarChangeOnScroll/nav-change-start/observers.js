const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const images = document.querySelectorAll('[data-src]');

const sectionOneOptions = {
  root: null,
  treshold: 0,
  rootMargin: '-150px 0px 0px 0px',
};

//navbar bg color change
const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      return;
    } else if (!entry.isIntersecting) {
      header.classList.toggle('nav-scrolled');
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//on scroll observer
const appearOptions = {
  //treshold: 1 - the whole element must be on the page before it starts to fade in! if the element is too long, do not put it on 1. 0 is the best option!
  treshold: 0,
  rootMargin: '0px 0px -20px 0px',
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

//sliders
sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

//image observer
//function that checks for an element with data-src attribute
function preloadImage(img) {
  const src = img.getAttribute('data-src');
  if (!src) {
    return;
  }
  img.src = src;
}
const imgOptions = {
  treshold: 0,
  //img starts loading before we get to them! positive 300!
  rootMargin: '0px 0px 100px 0px',
};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      prealodImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});

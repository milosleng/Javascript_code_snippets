const toggleButton = document.querySelector('.show-button');
const collapseNav = document.getElementById('collapseNavbar');
const navbar = document.querySelector('.nav-container');
const sectionTwo = document.getElementById('section2');
const faders = document.querySelectorAll('.fade-in');
const images = document.querySelectorAll('.img');

//TOGGLE NAVBAR FOR MEDIUM
toggleButton.addEventListener('click', () => {
  collapseNav.classList.toggle('show-menu');
});

//CHANGE NAV COLOR ON SCROLLL
const sectionTwoOption = {
  root: null,
  treshold: 0,
  rootMargin: '0px 0px -800px 0px',
};
sectionTwoObserver = new IntersectionObserver(function (
  entries,
  sectionTwoObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      navbar.classList.toggle('navBarDark');
    }
  });
},
sectionTwoOption);

sectionTwoObserver.observe(sectionTwo);

//FADE IN CONTENT
const fadersOption = {
  root: null,
  treshold: 0,
  rootMargin: '-300px',
};

const fadersObserver = new IntersectionObserver(function (
  entries,
  fadersObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('fadeBack');
      fadersObserver.unobserve(entry.target);
    }
  });
},
fadersOption);

faders.forEach((fader) => {
  fadersObserver.observe(fader);
});

//lazy loading images
const imagesOptions = {
  root: null,
  treshold: 1,
  rootMargin: '0px',
};

const observerImages = new IntersectionObserver(function (
  entries,
  observerImages
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      let image = entry.target;
      image.src = image.src.replace('&w=20', '&w=600');
      observerImages.unobserve(image);
    }
  });
},
imagesOptions);

images.forEach((img) => {
  observerImages.observe(img);
});

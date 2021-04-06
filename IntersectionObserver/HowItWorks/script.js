//observer fires off when the page loads!
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const sections = document.querySelectorAll('.section');
//here we can set 3 options: 1.root: null - it is a default, means viewport
//2.treshold - between 0 and 1, default 0
//3.rootMargin:
const options = {
  root: null,
  treshold: 0,
  rootMargin: '150px',
};
//creating an observer
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    //if this is false, return
    if (!entry.isIntersecting) {
      return;
    }
    //this code will run when our entry (section) is intersectiong!
    console.log(entry.target);
    entry.target.classList.toggle('inverse');
    //this will observe and when the observation happened, it is done. it will no longer OBSERVE!
    observer.unobserve(entry.target);
  });
}, options);

//observing multiple elements!
sections.forEach((section) => {
  observer.observe(section);
});

//telling an observer what to observe
// observer.observe(section1);

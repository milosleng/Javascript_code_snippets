gsap.registerPlugin(ScrollTrigger);

// gsap.to('.square', {
//   x: 700,
//   duration: 3,
//   scrollTrigger: {
//     trigger: '.square',
//     start: 'top 30%',
//     end: () => `+=${document.querySelector('.square').offsetHeight}`,
//     //end scrolling at the height of the box!
//     markers: true,
//     toggleClass: 'red',
//   },
// });

//trigger: what element is animation trigger?
//start: where we want to start animation!
//scrollTrigger: start/end value: how many px/% from the top of the viewport do I want my animation to start?
//we can use a number/string (top, center, bottom)
//start: 400; start animation after 400px of scrolling down!
//start: "top center"; start animation when the TOP of the trigger element hits the CENTER of the viewport!

// gsap.to('.square2', {
//   x: 1000,
//   duration: 5,
//   scrollTrigger: {
//     trigger: '.square2',
//     start: 'top 20%',
//     end: 'top 40%',
//     toggleActions: 'restart none none none',
//     //              onEnter onLeave  onEnterBack  onLeaveBack
//     //options: play/ restart/ reverse/ pause/ resume/ reset/ complete/ none
//     markers: {
//       startColor: 'white',
//       endColor: 'black',
//       fontSize: '3rem',
//       indent: 200,
//     },
//     toggleClass: 'red',
//   },
// });

//TOGGLE ACTIONS
//4 different keywords(ACTIONS!) trigged by 4 different events
//default: "play none none none"

//TODO:SCRUB - if I scroll, animation keeps moving! ANIMATION PROGRESS is bound to the SCROLL PROGRESS!
//options: true/false/ 4, 3, 2, 1 (meaning how mnay secs)
gsap.to('.square3', {
  x: 600,
  duration: 2,
  scrollTrigger: {
    trigger: '.square3',
    start: 'top 60%',
    end: 'center 10%',
    scrub: 1,
    toggleActions: 'play complete none none',
    markers: {
      startColor: 'black',
      endColor: 'black',
      fontSize: '1rem',
      indent: 100,
    },
  },
});

//:TODO: PINNING
//element gets PINNED between START and END of MARKERS!
//in this case: trigger is ".square5" and the element pinned is ".square4!"
//PIN SPACING: true/false; ture= adds padding to the bottom of the element we want to be pinned! (".square4"); ELEMENTS WILL NOT OVERLAP and COLLIDE!!
gsap.to('.square4', {
  x: 700,
  duration: 3,
  scrollTrigger: {
    trigger: '.square5',
    start: 'top 50%',
    end: 'top 30%',
    scrub: 3,
    toggleActions: 'restart none none none',
    pin: '.square4',
    pinSpacing: false,
    markers: true,
  },
});

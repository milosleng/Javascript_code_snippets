gsap.registerPlugin(ScrollTrigger);

//use DELAY and DURATIONS to match to make animations happen consecutively!
// gsap.to('.box', { x: 500, duration: 2 });
// gsap.to('.box', { y: 200, duration: 3, delay: 2 });
// gsap.to('.box', { x: 0, duration: 2, delay: 3 });

// TODO:TIMELINE - use timeline, so the DELAYS are automatic!!
//timeline animation starts only when the scroll trigger is fired off!
//value in SCRUB means "lag"; the higher value, the more "relaxed" feel
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.box',
    markers: true,
    start: 'top 80%',
    end: 'top 30%',
    scrub: 1,
  },
});
tl.to('.box', { x: 500, duration: 2 })
  .to('.box', { y: 200, duration: 3 })
  .to('.box', { x: 0, duration: 2 })
  .to('.box', { y: 600, duration: 5 })
  .to('.box', { x: 200, duration: 2 });

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: '.box',
  start: 'top 80%',
  end: 'top 50%',
  markers: true,
  toggleClass: 'box-red',
  // onEnter: () => console.log("enter!"),
  // onLeave: () => console.log("leave!"),
  // onEnterBack: () => console.log("enterBack!"),
  // onLeaveback:  () => console.log("leaveBack!"),
  onUpdate: (event) => console.log(event),
  //onUpdate is triggered constatly while are in the Scroll Zone!
});

ScrollTrigger.create({
  start: 'top 2%',
  trigger: '.myTrigger',
  toggleClass: {
    targets: 'nav',
    className: 'nav-active',
    markers: true,
  },
});

//explanation: when the TOP of the ".myTrigger" is 2% far from the TOP of the top of the viewport it will toggle the class
//targets: to which element do we want the class apply?

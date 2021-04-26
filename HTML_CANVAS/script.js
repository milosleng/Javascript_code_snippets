const canvas = document.querySelector('canvas');

//setting the size of our canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//context - this is how we can draw! Canvas can be manipulated withing 2D space!
var c = canvas.getContext('2d');

//TODO:creating objects on our Canvas element!
//creating a rectangle
// c, fillRect(x, y, width, height);
// c.fillStyle = '#fff833';
// c.fillRect(100, 100, 200, 200);
// c.fillStyle = '#f34833';
// c.fillRect(500, 400, 200, 200);

//TODO:drawing a line
// c.beginPath();
// // c.moveTo(x, y)
// c.moveTo(50, 300);
// c.lineTo(100, 500);
// c.lineTo(200, 400);
// c.lineTo(800, 200);
// c.strokeStyle = 'red';
// c.stroke();

//create an ARC / CIRCLE
//always use beginPath() to separate elements
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

////TODO: creating multiple elements with loop 1
// function drawCircles() {
//   let x = 0;
//   let y = 0;
//   let radius = 30;
//   for (let i = 0; i < 6; i++) {
//     x += 100;
//     y += 100;
//     radius += 30;
//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
//   }
// }

// drawCircles();

//TODO: creating multiple Elements with loop 2
// for (let j = 0; j < 100; j++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   let radius = Math.random() * 100;
//   c.beginPath();
//   c.arc(x, y, radius, Math.PI * 2, false);
//   c.strokeStyle = 'green';
//   c.stroke();
// }

// TODO: drawing multiple small circles
//function loop to create an animation
// function animate() {
//   requestAnimationFrame(animate);
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   let radius = Math.random() * 10;
//   c.beginPath();
//   c.arc(x, y, radius, Math.PI * 2, false);
//   c.strokeStyle = 'blue';
//   c.stroke();
// }

// animate();

// TODO:BOUNCING CIRCLEs
//function loop to create an animation
let mouse = {
  x: undefined,
  y: undefined,
};

let maxRadius = 80;
let minRadius = 1;

//changing color of circles
let colorArray = ['#A3CDD9', '#FFFCE6', '	##F2CC39', '#506AD4', '#C2B8AD'];

window.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

//circles travel to the empty part of the canvas when the window is resized, so our canvas is responsive
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

//creating a JS object; we will create multiple circles each behaving differently
function Circle(x, y, dx, dy) {
  this.x = x;
  this.y = y;
  this.radius = 2;
  this.dx = dx;
  this.dy = dy;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.minRadius = 10;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    c.strokeStyle = 'white';
    c.fillStyle = this.color;
    c.fill();
  };
  this.update = function () {
    //collision detection
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      //reversing velocity direction; positive becomes negative!
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      //reversing velocity direction; positive becomes negative!

      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    //interactivity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    //calling draw function inside update, bc we first need to draw a circle!
    this.draw();
  };
}

var circleArray = [];
function init() {
  // /this array will store 100 circles that we create below
  circleArray = [];
  for (var i = 0; i < 1000; i++) {
    // number 1 - 4
    let radius = Math.random() * 3 + 1;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    //variable for y velocity
    //getting negative value, circle going up
    let dy = (Math.random() - 0.5) * 2;
    //variable for x velocity
    //getting a negative value; circle going to the left
    let dx = (Math.random() - 0.5) * 2;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

init();
// circle.draw();
////////////////////////////////////////////////////////////////////

function animate() {
  requestAnimationFrame(animate);
  //clear the canvas, so only 1 circle is draw!
  c.clearRect(0, 0, innerWidth, innerHeight);
  //drawing 100 circles
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
  //   //collision detection
  //   if (x + radius > window.innerWidth || x - radius < 0) {
  //     //reversing velocity direction; positive becomes negative!
  //     dx = -dx;
  //   }
  //   if (y + radius > innerHeight || y - radius < 0) {
  //     //reversing velocity direction; positive becomes negative!

  //     dy = -dy;
  //   }

  //   x += dx;
  //   y += dy;
}

animate();

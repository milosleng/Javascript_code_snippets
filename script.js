//TODO:ARRAYS
//POPULATING AN ARRAY
//map
const newArr = new Array(15)
  .fill(null)
  .map(() => ({ name: 'Milosko', secondName: { hello: 'Wolrd' } }));
console.log(newArr);

//loop
const items = new Array(7);
for (let i = 0; i < items.length; i++) {
  items[i] = [1, 2, 3, 4];
}

console.log(items);

//Array.from
let filledArray = Array.from({ length: 10 }, () => ({ name: 'Milos' }));
console.log(filledArray);

//spread operator

let fillArray = [...Array.from(10)].map(() => ({ age: 30 }));

//min/max of an array
Math.max(3, 4, 20);

//with arr - ES5
const nums = [4, 5, 1, 3, 3];
Math.min.apply(Math, nums); //1

//descructuring
Math.max(...nums);

//splice, slice, splice
//SPLICE
// Insert "L" into the array between "M" and "XL"
var sizes = ['S', 'M', 'XL', 'XXL', 'XXXL'];
sizes.splice(2, 0, 'L'); //2 - start adding, 0 - remove how many?, "L" - element to add

var example = ['A', 'B', 'C', 'D'];

example.splice(2, 0, 'E'); // remove 0 item, and insert 'E' at 2-index

console.log(example);
// ["A", "B", "E", "C", "D"]
var copy = example.splice(2, 1); // remove 1 item at 2-index postion, return the deleted item

console.log(copy);
// ["E"]
console.log(example);
// ["A", "B", "C", "D"]
var copy2 = example.splice(2, 0, 'E');

console.log(copy2);
// []
console.log(example);
// ["A", "B", "E", "C", "D"]

function shiftArray(arr) {
  // remove 1 item at 0-index position, return the deleted item
  return arr.splice(0, 1);
}

var a = [1, 2, 3];

var b = a.shift();

//// convert to array
function convert2Array() {
  return Array.prototype.slice.call(arguments);
}

var arr = convert2Array(1, 2, 3);

console.log(arr);
// [1, 2, 3]

//slice

var a = ['A', 'B', 'C', 'D'];

var slicedArr = a.slice(1, 3); // slice starts from 1-index to 3-index, but not include 3-index : ['B', 'C']

console.log(a);
// ["A", "B", "C", "D"]         // slice doesn't change the input
console.log(slicedArr);
// ["B", "C"]
var b = 'ABCD';

var slicedStr = b.slice(1, 3); // slice process the slice as the array

console.log(b);
// "ABCD"
console.log(slice);

//TODO:OBJECTS
//destructuring
const myVacation = {
  startDate: '05-01-2020',
  endDate: '10-01-2020',
  citiesVisited: ['Roma', 'Torino', 'Naples'],
  stops: {
    Roma: {
      friendsMade: 4,
      barsVisited: 3,
    },
    Naples: {
      friendsMade: 10,
      barsVisited: 5,
    },
  },
};

const { startDate, endDate, citiesVisited, stops } = myVacation;
const { Roma: roma, Naples: naples } = stops;

console.log(roma, naples);

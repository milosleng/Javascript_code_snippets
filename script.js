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

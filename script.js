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

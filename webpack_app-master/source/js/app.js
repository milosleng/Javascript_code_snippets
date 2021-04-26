// everything from here will get compiled to bundle.js, it is the only file HTML will include!

//requiring css loaders below
require('../css/style.css');
require('../../test.js');

let people = require('../../people.js');
//bringing jQuery in after instalation with "npm install jquery --save"
let $ = require('jquery');

$.each(people, function (key, value) {
  $('body').append('<h1>' + people[key].name + '</h1>');
});
console.log(people[0]);

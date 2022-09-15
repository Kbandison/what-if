'use strict';

const prompt = require('prompt-sync')();

let value = Number(prompt('Pick a number! '));

if (value % 15 === 0) {
  console.log('Fizz Buzz');

} else if(value % 3 === 0) {
  console.log('Fizz');

} else if (value % 5 === 0) {
  console.log('Buzz');

} else {
  console.log('Not divisible by 3 or 5, or both!!');
}

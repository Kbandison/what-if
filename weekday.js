'use strict';

const prompt = require('prompt-sync')();

let answer = Number(prompt('Pick a number betweeen 1 and 7, 1 being Monday, and 7 being Sunday! '));

if (answer == 1){
  console.log('Your chosen day is Monday!');
} else if (answer == 2){
  console.log('Your chosen day is Tuesday!');
} else if (answer == 3){
  console.log('Your chosen day is Wednesday!');
} else if (answer == 4){
  console.log('Your chosen day is Thursday!');
} else if (answer == 5){
  console.log('Your chosen day is Friday!');
} else if (answer == 6){
  console.log('Your chosen day is Saturday!');
} else if (answer == 7){
  console.log('Your chosen day is Sunday!');
} else {
  console.log('Invalid number!');
}

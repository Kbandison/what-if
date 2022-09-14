'use strict';

const prompt = require('prompt-sync')();

let earthWeight = Number(prompt('What is your Earth weight? '));
let planet = prompt('Which planet are you going to? ');
let planetWeight = 0;
let results = true;

if (planet == 'venus'){
  planetWeight = earthWeight * .78;
} else if (planet == 'mars'){
  planetWeight = earthWeight * .39;
} else if (planet == 'jupiter'){
  planetWeight = earthWeight * 2.65;
} else if (planet == 'saturn'){
  planetWeight = earthWeight * 1.17;
} else if (planet == 'uranus'){
  planetWeight = earthWeight * 1.05;
} else if (planet == 'neptune'){
  planetWeight = earthWeight * 1.23;
} else{
  console.log('Invalid input!');
  results = false;
}

if(results === true){
  console.log(`Your weight on ${planet} would be ${planetWeight}.`);
}

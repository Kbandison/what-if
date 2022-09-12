const fizzbuzz = (arr) => {

  let fizzArr = [];
  // Solution code here...
  arr.forEach((value, i) => {

    if (value % 15 === 0) {
      fizzArr.push('Fizz Buzz');

    } else if(value % 3 === 0) {
      fizzArr.push('Fizz');

    } else if (value % 5 === 0) {
      fizzArr.push('Buzz');

    } else {
      fizzArr.push(value);
    }
  });
  return fizzArr;
};
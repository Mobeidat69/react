const numbers = [1, 2, 3, 4, 5];

// Using a regular function with map
const squaredNumbers = numbers.map(function (number) {
  return number * number;
});

// Using an arrow function with map
const squaredNumbersArrow = numbers.map((number) => number * number);

console.log(squaredNumbers); // [1, 4, 9, 16, 25]
console.log(squaredNumbersArrow); // [1, 4, 9, 16, 25]

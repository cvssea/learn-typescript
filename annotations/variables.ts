let apples: number = 5;
// apples = 'muie'; // wrong

let speed: string = 'fast';
// fast = 5;

let hasName: boolean = false;
let nothing: undefined = undefined;

let today: Date = new Date();

// arrays
let colors: string[] = ['red', 'green', 'blue'];

// classes
class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}
const car: Car = new Car('ferrarri');

// object literal
interface Point {
  x: number;
  y: number;
}

let point: Point = {
  x: 10,
  y: 20,
};

// function
const logNumber = (i: number): void => {
  console.log(i);
};

const logNumber2: (i: number) => void = i => {
  console.log(i);
};

function logNumberFunc(i: number): number {
  console.log(i);
  return i;
}

// When to use annotations

// 1) function returns any type
const json = '{"x": 10, "y": 20}';
const coordinates: Point = JSON.parse(json); // JSON.parse infers 'any' type
console.log(coordinates);

// 2) Separate variable declaration and initialization
const words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}

// 3) When inference doesn't work correctly
const numbers = [-10, -1, 12];
let numbersAboveZero: number[] | boolean;

numbersAboveZero = numbers.filter(n => n > 0);
if (!numbersAboveZero.length) numbersAboveZero = false;

console.log(numbersAboveZero);

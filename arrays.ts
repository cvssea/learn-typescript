const carMakers = ['ford', 'toyota', 'chevy'];
const carMakersEmpty: string[] = [];

const carsByMake = [['f150'], ['90'], ['camaro']];
const carsByMakeEmpty: string[][] = [];
const make = carsByMake.pop();

const makers = carMakers.map((car: string): { [car: string]: string } => ({
  [car]: car,
}));

interface Makers {
  [car: string]: string;
}

function logMakers(makers: Makers[]): void {
  console.log(makers);
}
logMakers(makers);

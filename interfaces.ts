interface Summary {
  // name: string;
  // year: number;
  // isBroken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  isBroken: true,
  summary() {
    return `The ${this.year} ${this.name} is ${
      this.isBroken ? 'broken' : 'running'
    }.`;
  },
};

const drink = {
  color: 'brown',
  isCarbonated: true,
  sugar: 40,
  summary() {
    return `My drink is ${this.color} and has ${this.sugar}g of sugar`;
  },
};

const printSummary = (item: Summary): void => {
  console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);

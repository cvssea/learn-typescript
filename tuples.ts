const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const tupleDrink: Drink = ['brown', true, 40];
tupleDrink[0] = 0;

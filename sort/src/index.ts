import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbers = new NumbersCollection([32, 325, 26, 2]);
const sorter = new Sorter(numbers);
sorter.sort();
console.log(numbers);

import { Sorter } from './Sorter';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const list = new LinkedList();
const numbers = new NumbersCollection([32, 325, 26, 2]);
const characters = new CharactersCollection('ILikeBigButts');

const unsortedNumbers = new Sorter(numbers);
const unsortedCharacters = new Sorter(characters);

unsortedNumbers.sort();
unsortedCharacters.sort();

list.add(10);
list.add(20);
list.print();

const unsortedList = new Sorter(list);
unsortedList.sort();
list.print();

console.log(numbers.data);
console.log(characters.data);

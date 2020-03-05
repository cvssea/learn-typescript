import { Sortable } from './Sorter';

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(idx: number): boolean {
    return this.data[idx].toLowerCase() > this.data[idx + 1].toLowerCase();
  }

  swap(idx: number): void {
    const arr = this.data.split('');
    const temp = arr[idx];
    arr[idx] = arr[idx + 1];
    arr[idx + 1] = temp;
    this.data = arr.join('');
  }
}

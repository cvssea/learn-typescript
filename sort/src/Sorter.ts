export interface Sortable {
  length: number;
  swap(idx: number): void;
  compare(idx: number): boolean;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j)) {
          this.collection.swap(j);
        }
      }
    }
  }
}

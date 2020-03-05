export class Collection {
  constructor(public data: number[] | string) {}

  get length(): number {
    return this.data.length;
  }
}
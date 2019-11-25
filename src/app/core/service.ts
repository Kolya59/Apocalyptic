export class Service {
  static reorder<T>(x: number, y: number, container: T[]): T[] {
    return x < y
      ? container.slice(0, x).concat(
        container.slice(x + 1, y + 1),
        container[x],
        container.slice(y + 1))
      : container.slice(0, y).concat(
        container[x],
        container.slice(y, x),
        container.slice(x + 1));
  }

  static remove<T>(removed: T, container: T[]): T[] {
    return container.filter(value => {
      console.log(value, removed, value !== removed);
      return value !== removed;
    });
  }
}

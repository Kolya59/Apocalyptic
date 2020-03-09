export class Service {
  static reorder<T>(x: number, y: number, container: T[]): T[] {
    return x < y
      ? [...container.slice(0, x), ...container.slice(x + 1, y + 1), container[x], ...container.slice(y + 1)]
      : [...container.slice(0, y), container[x], ...container.slice(y, x), ...container.slice(x + 1)];
  }
}

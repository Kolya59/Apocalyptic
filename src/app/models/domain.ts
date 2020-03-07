export interface IDomain {
  id: string;
  name: string;
  description: string;
  values: string[];

  insertValue(value: string): void;
  editValue(index: number, value: string): void;
  removeValue(index: number): void;
}

export class Domain implements IDomain {
  id: string;
  description: string;
  name: string;
  values: string[];

  constructor(id: string, name: string, description: string, values: string[]) {
    this.id = id;
    this.description = description;
    this.name = name;
    this.values = values;
  }

  insertValue(value: string) {
    // TODO Validate
    this.values.push(value);
  }

  editValue(index: number, value: string) {
    // TODO Validate
    this.values[index] = value;
  }

  removeValue(index: number) {
    // TODO Check existing
    this.values = this.values.filter((_, i) => i !== index);
  }
}

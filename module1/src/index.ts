function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true || toUpper === undefined) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
} 

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating > 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((a, b) => a.concat(b), []);
}

class Vehicle {
  make: string;
  year: number;
  model: string;
  constructor(make: string, year: number, model: string) {
    this.make = make;
    this.year = year;
    this.model = model;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, model: string) {
    super(make, year, model);
  }
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");

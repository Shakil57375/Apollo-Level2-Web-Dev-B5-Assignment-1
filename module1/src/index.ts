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

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * 2;
  }
  throw new Error("Invalid input type");
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  let mostExpensiveProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensiveProduct.price) {
      mostExpensiveProduct = products[i];
    }
  }
  return mostExpensiveProduct;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Monday:
      return "Weekday";
    case Day.Tuesday:
      return "Weekday";
    case Day.Wednesday:
      return "Weekday";
    case Day.Thursday:
      return "Weekday";
    case Day.Friday:
      return "Weekday";
    case Day.Saturday:
      return "Weekend";
    case Day.Sunday:
      return "Weekend";
    default:
      return "Invalid day";
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject(new Error("Negative number not allowed"));
    }
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}

// call the function
const result = squareAsync(5);
result.then((value) => {
  console.log(value); // Output: 25
});

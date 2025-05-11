# TypeScript: Interfaces vs Types & Code Quality Benefits

## ❓ What are some differences between interfaces and types in TypeScript?

In TypeScript, both `types` and `interfaces` are used to define the structure of an object, but they differ in their flexibility and use cases:

- **Extending Structures**:
  - `interface` uses the `extends` keyword.
  - `type` uses the intersection operator `&`.

- **Use Cases**:
  - `interface` is best suited for defining the shape of objects or classes.
  - `type` is ideal for more complex type compositions like unions (`|`), intersections (`&`), and mapped types.

- **Declaration Merging**:
  - Interfaces support declaration merging, allowing you to declare the same interface multiple times and TypeScript merges them.
  - Types do not support declaration merging.

```ts
// Interface example
interface User {
  name: string;
}
interface User {
  age: number;
}
// Result: User has both name and age

// Type example
type User = {
  name: string;
};
type User = {
  age: number;
}; // Error: Duplicate identifier 'User'

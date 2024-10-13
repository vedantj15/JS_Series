// 1. Shallow Copy
// A shallow copy creates a new array or object, copying the references of nested objects, not the actual objects themselves. Changes to nested objects will affect the original.

// Original array containing objects
let originalArray = [{ name: 'Alice' }, { name: 'Bob' }];

// Create a shallow copy
let shallowCopy = originalArray.slice(); // Shallow copy of the array

// Modify an object in the shallow copy
shallowCopy[0].name = 'Charlie';

console.log(originalArray); // [{ name: 'Charlie' }, { name: 'Bob' }] (Changed)
console.log(shallowCopy);   // [{ name: 'Charlie' }, { name: 'Bob' }] (Changed)


// Key Points:

// Primitive Types: Copied by value (e.g., numbers, strings).
// Objects/Arrays: Copied by reference; changes to nested objects affect both copies

// Original array containing primitive values
let originalArray1 = [1, 2, 3, 4];

// Create a shallow copy using the spread syntax
let shallowCopy1 = [...originalArray1]; // Shallow copy of the array

// Modify a value in the shallow copy
shallowCopy1[0] = 100;

console.log(originalArray1); // Output: [1, 2, 3, 4] (Unchanged)
console.log(shallowCopy1);   // Output: [100, 2, 3, 4] (Changed)

// 2. Deep Copy
// A deep copy creates a new array or object and recursively copies all nested objects. The original and the copy are independent.


// Original array containing objects
let originalArray2 = [{ name: 'Alice' }, { name: 'Bob' }];

// Create a deep copy
let deepCopy1 = JSON.parse(JSON.stringify(originalArray2)); // Deep copy of the array

// Modify an object in the deep copy
deepCopy1[0].name = 'Charlie';

console.log(originalArray2); // [{ name: 'Alice' }, { name: 'Bob' }] (Unchanged)
console.log(deepCopy1);      // [{ name: 'Charlie' }, { name: 'Bob' }] (Changed)


// Key Points:

// Complete Independence: Changes in the deep copy do not affect the original.
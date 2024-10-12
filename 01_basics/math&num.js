
// # JavaScript Number and Math Operations - Explained with Examples

// ## 1. Primitive Number
// A number can be declared directly as a primitive.

```javascript
const score = 400;
console.log(score);  // Output: 400
```

// ## 2. Number Object
// We can create a Number object using the `Number` constructor, which wraps the number in an object.

```javascript
const balance = new Number(100);
console.log(balance);  // Output: [Number: 100]
```

// ### Methods of Number Object:
// - **toString()**: Converts the number to a string.
```javascript
console.log(balance.toString().length);  // Output: 3
```

// - **toFixed()**: Rounds the number to a specified number of decimal places.
```javascript
console.log(balance.toFixed(1));  // Output: "100.0"
```

// ## 3. toPrecision()
// This method formats a number to a specific precision (number of significant digits).

```javascript
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));  // Output: "123.9"
```

// ## 4. toLocaleString()
// This method formats the number using local conventions. In this example, it formats the number in the Indian numbering system.

```javascript
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));  // Output: "10,00,000"
```

// # Math Operations in JavaScript

// ## Math Object
// The `Math` object provides various methods for mathematical operations.

```javascript
console.log(Math);  // Output: Math object and its properties
```

// ## Basic Math Methods:

// - **Math.abs()**: Returns the absolute value of a number.
```javascript
console.log(Math.abs(-4));  // Output: 4
```

// - **Math.round()**: Rounds a number to the nearest integer.
```javascript
console.log(Math.round(4.6));  // Output: 5
```

// - **Math.ceil()**: Rounds a number **up** to the nearest integer.
```javascript
console.log(Math.ceil(4.2));  // Output: 5
```

// - **Math.floor()**: Rounds a number **down** to the nearest integer.
```javascript
console.log(Math.floor(4.9));  // Output: 4
```

// - **Math.min()** and **Math.max()**: Returns the minimum or maximum value among a list of numbers.
```javascript
console.log(Math.min(4, 3, 6, 8));  // Output: 3
console.log(Math.max(4, 3, 6, 8));  // Output: 8
```

// ## Generating Random Numbers:
// - **Math.random()**: Generates a random number between 0 (inclusive) and 1 (exclusive).
```javascript
console.log(Math.random());  // Example output: 0.7154 (random value)
```

// ### Generate a Random Number Between 1 and 10:
```javascript
console.log((Math.random() * 10) + 1);  // Output: random number between 1 and 11
console.log(Math.floor(Math.random() * 10) + 1);  // Output: random integer between 1 and 10
```

// ## Random Number within a Range (min to max):
// This formula generates a random integer between `min` and `max` inclusive.

```javascript
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // Output: random integer between 10 and 20
```

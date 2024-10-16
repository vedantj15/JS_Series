// Checking if `userEmail` exists or is truthy
const userEmail = [];

// The if statement checks for truthy/falsy values of `userEmail`
// Since an empty array is considered truthy, it will execute the "true" branch
if (userEmail) {
    console.log("Got user email"); // Output: Got user email
} else {
    console.log("Don't have user email");
}

// Falsy values in JavaScript: These evaluate to false in Boolean contexts
// - false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values in JavaScript: These evaluate to true in Boolean contexts
// - "0", 'false', " ", [], {}, function(){}

// To check if `userEmail` array is actually empty, you can use its length property
if (userEmail.length === 0) {
    console.log("Array is empty"); // Output: Array is empty
}

// Checking if an object is empty by looking at its keys
const emptyObj = {};

// `Object.keys(emptyObj)` returns an array of the object's keys
// An empty array (i.e., `[]`) has a length of 0, indicating the object is empty
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); // Output: Object is empty
}

// Nullish Coalescing Operator (??)
// It returns the right-hand value if the left-hand value is null or undefined
// Otherwise, it returns the left-hand value
let val1;

// Examples of how the Nullish Coalescing Operator works:
// val1 = 5 ?? 10;   // Output: 5, since 5 is neither null nor undefined
// val1 = null ?? 10; // Output: 10, since null triggers the right-hand value
// val1 = undefined ?? 15; // Output: 15, since undefined triggers the right-hand value

// With multiple nullish coalescing operators, it stops at the first defined value
val1 = null ?? 10 ?? 20; // Output: 10, since null triggers the right-hand value (10)
console.log(val1); // Output: 10

// Ternary Operator - shorthand for if-else statements
// Syntax: condition ? exprIfTrue : exprIfFalse
const iceTeaPrice = 100;

// Checks if `iceTeaPrice` is less than or equal to 80
// If true, it logs "less than 80"; otherwise, it logs "more than 80"
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); // Output: more than 80

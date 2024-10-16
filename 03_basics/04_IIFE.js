// Immediately Invoked Function Expressions (IIFE)

// 1. Named IIFE
// This function is defined and immediately executed.
// Useful for creating a private scope and running code without polluting the global scope.
(function chai() {
    console.log(`DB CONNECTED`); // Output: DB CONNECTED
})(); // The () at the end immediately invokes the function.

// 2. Arrow Function IIFE with Parameter
// This is an IIFE written as an arrow function, which takes a parameter 'name'.
// Immediately invoked after being defined, it logs a message with the passed parameter.
((name) => {
    console.log(`DB CONNECTED TWO ${name}`); // Output: DB CONNECTED TWO hitesh
})('vedant'); // The string 'hitesh' is passed as an argument to the IIFE.

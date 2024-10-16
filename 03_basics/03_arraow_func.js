// Defining an object 'user' with properties and a method
const user = {
    username: "vedant", // Property of the user object
    price: 999, // Property of the user object

    // Method using a function expression
    welcomeMessage: function() {
        // 'this' refers to the 'user' object
        console.log(`${this.username} , welcome to website`);
        console.log(this); // Logs the 'user' object because it's within a method of the object
    }
};

// Output: "vedant , welcome to website" and 'user' object
user.welcomeMessage(); // Calls the method, 'this' refers to 'user'

// Changing the username property
user.username = "sam"; // Updating the 'username' property of 'user'
// Output: "sam , welcome to website" and updated 'user' object
user.welcomeMessage(); // 'this' still refers to 'user', reflecting the updated 'username'


// Global 'this' reference
// 'this' in the global scope refers to the global object in non-strict mode (window in browsers).
console.log(this); // Logs the global object (window in browsers, global in Node.js)


// Function expressions and arrow functions

// Regular function declaration - 'this' depends on how it's called
function chai() {
    let username = "vedant";
    console.log(this.username); // 'this' refers to the global object, so logs undefined since no 'username' there
}

// chai(); // Uncomment to run


// Arrow function declaration
const chai = () => {
    let username = "vedant";
    console.log(this); // 'this' in an arrow function is lexically scoped, inheriting 'this' from its enclosing context (global object here)
};

// chai(); // Uncomment to run


// Arrow functions and shorthand returns

// Explicit return statement
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };

// Implicit return without braces
const addTwo = (num1, num2) => num1 + num2;

// Implicit return with an object literal (must be wrapped in parentheses)
// const addTwo = (num1, num2) => ({ username: "vedant" });

// Output: { username: "vedant" }
console.log(addTwo(3, 4)); // Since we're returning an object, logs the object { username: "vedant" }


// Array and forEach example (for practice with array methods)

// const myArray = [2, 5, 3, 7, 8];
// myArray.forEach((element) => console.log(element)); // Loops through the array, logging each element

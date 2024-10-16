// if statement with comparison
const isUserloggedIn = true;
const temperature = 41;

// Check temperature
// If temperature equals 40, log "less than 50"
// Else log "temperature is greater than 50"
if (temperature === 40) {
    console.log("less than 50"); // Output: (doesn't execute as condition is false)
} else {
    console.log("temperature is greater than 50"); // Output: temperature is greater than 50
}

// Comparison Operators: <, >, <=, >=, ==, !=, ===, !==

// if statement with block scope variable
const score = 200;

// If score is greater than 100, define and log 'power'
if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`); // Output: User power: fly
}

// Trying to access 'power' outside of if block - leads to an error because 'power' is block-scoped
// console.log(`User power: ${power}`); // Uncaught ReferenceError: power is not defined

// if statement with multiple statements without braces
const balance = 1000;

// If balance is greater than 500, log two statements in sequence
if (balance > 500) console.log("test"), console.log("test2"); // Output: test and test2

// Nested if-else if-else for multiple conditions
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200"); // Output: less than 1200
}

// Logical Operators: AND (&&) and OR (||)
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// AND condition - all conditions must be true
if (userLoggedIn && debitCard && 2 === 3) {
    console.log("Allow to buy course"); // Output: (doesn't execute as 2 == 3 is false)
}

// OR condition - any one condition can be true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); // Output: User logged in
}

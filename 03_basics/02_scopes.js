// var c = 300 
// Declaring a variable with var (uncomment if needed). 
// Note that var is function-scoped or globally-scoped, so it would be accessible outside any block.

let a = 300 // Declaring a variable 'a' with let, which is block-scoped.

if (true) {
    let a = 10 // Declaring a new variable 'a' inside the block. This 'a' is separate from the outer 'a'.
    const b = 20 // Declaring a constant 'b' inside the block. This 'b' is only accessible within this block.

    // Output: "INNER: 10"
    console.log("INNER: ", a); // Logs the inner 'a' (10) due to block scoping.
}

// Output after the block
// Output: "OUTER: 300"
// This logs the outer 'a' (300) since the inner 'a' is limited to the if block.
console.log("OUTER: ", a);

// Trying to log 'b' here would cause a ReferenceError, as 'b' is not defined outside the block.
// Uncommenting the line below will throw an error:
// console.log(b); 


// Outer function 'one' containing a nested function 'two'
function one() {
    const username = "vedant"; // Variable scoped to 'one'

    function two() {
        const website = "youtube"; // Variable scoped to 'two'
        // Output: "vedant"
        console.log(username); // 'two' has access to 'username' due to lexical scoping
    }

    // Uncommenting the next line will throw a ReferenceError because 'website' is not accessible here.
    // console.log(website);

    two(); // Calling 'two' inside 'one'
}

// Uncomment to call 'one' and execute 'two'
// one();


// Block scope example using nested if statements
if (true) {
    const username = "vedant";
    if (username === "vedant") {
        const website = "youtube";
        // Output: "vedant youtube"
        console.log(username + " " + website); // Both 'username' and 'website' are accessible in this block
    }

    // Uncommenting the next line will throw a ReferenceError because 'website' is only accessible within the inner block.
    // console.log(website);
}

// Uncommenting the next line will throw a ReferenceError because 'username' is not accessible outside the block.
// console.log(username);


// ++++++++++++++++++ Interesting Hoisting Example ++++++++++++++++++


// Function declaration is hoisted, so you can call 'addone' before its declaration
// Output: 6
console.log(addone(5));

function addone(num) {
    return num + 1;
}


// Function expression is not hoisted, so calling 'addTwo' before its declaration causes an error
// This will throw a TypeError: Cannot access 'addTwo' before initialization
// addTwo(5);

const addTwo = function(num) {
    return num + 2;
};


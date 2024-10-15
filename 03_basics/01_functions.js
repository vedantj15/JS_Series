// Function to print each character in the name "VEDANT"
function sayMyName(){
    console.log("V");
    console.log("E");
    console.log("D");
    console.log("A");
    console.log("N");
    console.log("T");
}

// Uncomment the line below to call the function
// sayMyName()

// Function to add two numbers and log the result
// This version logs the result directly
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// Function to add two numbers and return the sum
function addTwoNumbers(number1, number2){
    // Adding number1 and number2 and returning the result
    // let result = number1 + number2
    // return result

    return number1 + number2;
}

// Storing the result of the function call
const result = addTwoNumbers(3, 5)

// Output: "Result: 8"
// Uncomment the line below to log the result
// console.log("Result: ", result);


// Function to generate a login message, with a default username "sam"
function loginUserMessage(username = "sam"){
    // Check if the username is provided; if not, prompt for a username
    if(!username){
        console.log("Please enter a username");
        return;
    }
    // Template literal to return a message with the username
    return `${username} just logged in`;
}

// Example calls to the function with and without an argument
// Output: "vedant just logged in"
// console.log(loginUserMessage("vedant"))
// Output: "sam just logged in"
// console.log(loginUserMessage())


// Function to handle a varying number of arguments, returning them as an array
//...num1, the 3 dots now is a rest operator which packs the rest of values in an array
// spread and rest operator both have same no. of dots and works in opp ways..
function calculateCartPrice(val1, val2, ...num1){ 
    // Only the extra parameters beyond val1 and val2 will be returned
    return num1;
}

// Example call that ignores the first two arguments and returns the rest
// Output: [500, 2000]
// console.log(calculateCartPrice(200, 400, 500, 2000))


// Object representing a user with a username and a price
const user = {
    username: "vedant",
    prices: 199
}

// Function to handle an object, logging specific properties from it
function handleObject(anyobject){
    // Using a template literal to insert object properties into a string
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Example function call passing a new object as an argument
// Output: "Username is sam and price is 399"
handleObject({
    username: "sam",
    price: 399
});


// Array of numbers to demonstrate accessing specific elements
const myNewArray = [200, 400, 100, 600]

// Function to return the second element of an array
function returnSecondValue(getArray){
    // Accessing and returning the element at index 1
    return getArray[1];
}

// Example function call to get the second value from the array
// Output: 400
console.log(returnSecondValue(myNewArray));

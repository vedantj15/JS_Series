// 1. Using a while loop to iterate from 0 to 10, incrementing by 2 each time
let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

// Expected Output:
// Value of index is 0
// Value of index is 2
// Value of index is 4
// Value of index is 6
// Value of index is 8
// Value of index is 10


// 2. Using a while loop to iterate through an array
let myArray = ['flash', "batman", "superman"];
let arr = 0;

while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}

// Expected Output:
// Value is flash
// Value is batman
// Value is superman


// 3. Using a do-while loop to demonstrate that the loop runs at least once, even if the condition is false initially
let score = 11;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);

// Expected Output:
// Score is 11

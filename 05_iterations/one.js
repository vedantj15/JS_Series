// 1. Basic for loop from 0 to 10
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // This would output: "5 is the best number"
        // console.log("5 is the best number");
    }
    // Outputs each element from 0 to 10
    // console.log(element);
}

// Attempting to access `element` here will result in an error because it's block-scoped within the for loop.
// console.log(element); // Error: element is not defined

// Expected Output (if uncommented):
// 0
// 1
// 2
// 3
// 4
// 5 is the best number
// 5
// 6
// 7
// 8
// 9
// 10


// 2. Nested for loop for multiplication table
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // Outputs multiplication of i and j
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Expected Output (if uncommented, example for `i = 1`):
// Outer loop value: 1
// 1 * 1 = 1
// 1 * 2 = 2
// ...
// 1 * 10 = 10
// Outer loop value: 2
// 2 * 1 = 2
// ...
// 2 * 10 = 20
// ...
// Outer loop value: 10
// 10 * 1 = 10
// ...
// 10 * 10 = 100


// 3. Looping through an array with for loop
let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length); // Output: 3

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // Outputs each element in the array
    // console.log(element);
}

// Expected Output (if uncommented):
// flash
// batman
// superman


// 4. Using break to stop loop execution at a specific condition
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break; // Stops the loop when index reaches 5
    }
    console.log(`Value of i is ${index}`);
}

// Expected Output:
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5


// 5. Using continue to skip a specific condition
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue; // Skips the rest of the loop body when index is 5
    }
    console.log(`Value of i is ${index}`);
}

// Expected Output:
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5
// Value of i is 6
// ...
// Value of i is 20

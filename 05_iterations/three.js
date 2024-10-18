// 1. Using a for-of loop to iterate over an array
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // Outputs each number in the array
    // console.log(num);
}

// Expected Output (if uncommented):
// 1
// 2
// 3
// 4
// 5


// 2. Using a for-of loop to iterate over a string
const str = "Hello Vedant, Welcome!";

for (const char of str) {
    // Outputs each character in the string
    // console.log(char);
}

// Expected Output (if uncommented):
// H
// e
// l
// l
// o
//  (space)
// V
// e
// d
// a
// n
// t
// ,
//  (space)
// W
// e
// l
// c
// o
// m
// e
// !

// 3. Using a for-of loop to iterate over a Map
const maps = new Map();
maps.set("IN", "India");
maps.set("USA", "United States of America");
maps.set("Fr", "France");

for (const key of maps) {
    // Outputs each key-value pair as an array
    // console.log(key);
}

// Expected Output (if uncommented):
// ["IN", "India"]
// ["USA", "United States of America"]
// ["Fr", "France"]

// Using destructuring to get key and value separately
for (const [key, value] of maps) {
    // Outputs the key and value in the format: key :- value
    // console.log(key, ':-', value);
}

// Expected Output (if uncommented):
// IN :- India
// USA :- United States of America
// Fr :- France


// 4. Attempting to use a for-of loop to iterate over an object (will cause an error)
const obj = {
    key1: "hello",
    key2: "welcome",
    key3: "vedant"
};

// This will throw an error because `for-of` cannot iterate over plain objects.
// Objects are not iterable by default with `for-of`. We would use `for-in` to iterate over object keys.
// for (const key of obj) {
//     console.log(key); // TypeError: obj is not iterable
// }
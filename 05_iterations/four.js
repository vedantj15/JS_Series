// 1. Iterating over an object with a for-in loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
};

for (const key in myObject) {
    // Outputs each key and its corresponding value from the object
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Expected Output:
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple


// 2. Iterating over an array with a for-in loop
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // Outputs each element in the array
    console.log(programming[key]);
}

// Expected Output:
// js
// rb
// py
// java
// cpp

// Explanation: The for-in loop here iterates over the indices of the array (0, 1, 2, etc.),
// so programming[key] returns the element at that index.


// 3. Attempting to iterate over a Map using for-in (This will not work)
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
// map.set('IN', "India");  // Duplicate key, so this overwrites the previous 'IN'

/* 
for (const key in map) {
    console.log(key);  // This will not work because Map is not iterable with for-in
} 
*/

// Explanation: for-in cannot be used to iterate over a Map. You must use for-of or .forEach().
// The below code demonstrates the correct way to iterate over a Map:




const myArr = [0, 1, 2, 3, 4, 5];          // Array literal
const myHeors = ["shaktiman", "naagraj"]; // Array of strings
const myArr2 = new Array(1, 2, 3, 4);     // Array constructor
console.log(myArr[1]); // Output: 1

myArr.push(6);  // myArr is now [0, 1, 2, 3, 4, 5, 6]
myArr.push(7);  // myArr is now [0, 1, 2, 3, 4, 5, 6, 7]
myArr.pop();    // myArr is now [0, 1, 2, 3, 4, 5, 6]

myArr.unshift(9); // myArr is now [9, 0, 1, 2, 3, 4, 5, 6]
myArr.shift();    // myArr is now [0, 1, 2, 3, 4, 5, 6]

console.log(myArr.includes(9));  // Output: false
console.log(myArr.indexOf(3));   // Output: 3

const newArr = myArr.join(); // Joins elements into a string
console.log(myArr);           // Output: [0, 1, 2, 3, 4, 5, 6]
console.log(newArr);          // Output: "0,1,2,3,4,5,6"

console.log("A ", myArr); // Output: A  [0, 1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1, 3); // Creates a new array with elements at index 1 and 2
console.log(myn1);               // Output: [1, 2]
console.log("B ", myArr);        // Output: B  [0, 1, 2, 3, 4, 5, 6] (Unchanged)

const myn2 = myArr.splice(1, 3); // Removes 3 elements starting from index 1
console.log("C ", myArr);         // Output: C  [0, 3, 4, 5, 6] (Modified)
console.log(myn2);                 // Output: [1, 2, 3] (Removed elements)

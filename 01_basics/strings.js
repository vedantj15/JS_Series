const str = "Vedant" //creates primitive string
const anotherStr = new String("Vedant")// this is creating a String object using string constructor

console.table([str==anotherStr,str===anotherStr]) // first output - true, second - false

console.log(typeof str); //string
console.log(typeof anotherStr); //object


console.log(str.toUpperCase());   // Output: "VEDANT"
console.log(anotherStr.toUpperCase());  // Output: "VEDANT"

/*
In both cases, methods like .toUpperCase() or .toLowerCase() work the same because the JavaScript engine temporarily converts the primitive string str into a String object under the hood when you call a method on it. This process is known as autoboxing.
*/

//Some strings method is shown below that you should know

// 1. slice()
// Definition: Extracts a section of a string (or an array) and returns it as a new string without modifying the original one.
// Syntax: string.slice(startIndex, endIndex)
let strSlice = "Hello, World!";
console.log(strSlice.slice(0, 5));  // Output: "Hello"
console.log(strSlice.slice(7));     // Output: "World!"

// 2. substring()
// Definition: Similar to slice(), it extracts a part of a string between two indices.
// Syntax: string.substring(startIndex, endIndex)
// Difference from slice(): It doesn't accept negative indices.

let strSubString = "JavaScript";
console.log(strSubString.substring(0, 4)); // Output: "Java"
console.log(strSubString.substring(4));    // Output: "Script"


// 3. replace()
// Definition: Replaces a specified value or regular expression in a string with another value.
// Syntax: string.replace(searchValue, newValue)

let strReplace = "Hello World";
console.log(strReplace.replace("World", "JavaScript")); // Output: "Hello JavaScript"


// 4. toUpperCase() and toLowerCase()
// Definition: Converts the entire string to upper or lower case, respectively.
// Syntax:
// string.toUpperCase() for uppercase.
// string.toLowerCase() for lowercase.

// 5. trim()
// Definition: Removes whitespace from both ends of a string.
// Syntax: string.trim()

let strTrim = "  Hello World!  ";
console.log(strTrim.trim());  // Output: "Hello World!"


// 6. split()
// Definition: Splits a string into an array of substrings based on a specified delimiter.
// Syntax: string.split(separator, limit)
// separator: The character or regular expression to split by.
// limit: The number of splits to perform (optional).

let strSplit = "apple, banana, cherry";
let fruits = strSplit.split(", ");
console.log(fruits); // Output: ["apple", "banana", "cherry"]

// 7. includes()
// Definition: Checks if a string contains a specified substring.
// Syntax: string.includes(substring, startIndex)

let strIncludes = "Hello, World!";
console.log(strIncludes.includes("World")); // Output: true
console.log(strIncludes.includes("world")); // Output: false (case-sensitive)

// 8. indexOf() and lastIndexOf()
// Definition: Finds the index of the first or last occurrence of a specified value in a string.
// Syntax:
// string.indexOf(substring, startIndex)
// string.lastIndexOf(substring, startIndex)

let strIndex = "Hello, World!";
console.log(strIndex.indexOf("o"));     // Output: 4 (first occurrence)
console.log(strIndex.lastIndexOf("o")); // Output: 8 (last occurrence)


// 9. charAt() and charCodeAt()
// Definition:
// charAt(): Returns the character at a specified index.
// charCodeAt(): Returns the Unicode code of the character at a specified index.

let strChar = "JavaScript";
console.log(strChar.charAt(4));     // Output: "S"
console.log(strChar.charCodeAt(4)); // Output: 83


// 10. concat()
// Definition: Combines two or more strings into one.
// Syntax: string.concat(string2, string3, ...)

let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2));  // Output: "Hello, World"


// 11. repeat()
// Definition: Repeats a string a specified number of times.
// Syntax: string.repeat(count)

let strRepeat = "Ha! ";
console.log(strRepeat.repeat(3));  // Output: "Ha! Ha! Ha! "




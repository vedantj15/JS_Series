const marvel_heros = ["Ironman", "CaptainAmerica", "Loki"];
const dc_heros = ["Batman", "Superman", "WonderWoman"];

// marvel_heros.push(dc_heros) // Adds dc_heros as a nested array within marvel_heros
// console.log(marvel_heros);

// Using concat
// const all_heros = marvel_heros.concat(dc_heros); // Creates a new array by merging both arrays
// console.log(all_heros);

// Using Spread Operator
// const learnSpread = [...marvel_heros, ...dc_heros]; // Unpacks both arrays into a single new array
// console.log(learnSpread);

/* flat */
const new_arr = [1, 2, 3, [4, 5, 6], [7, 8, [12, 34, 56]]];
// const again_new_arr = new_arr.flat(Infinity); // Flattens the nested array. Pass depth (e.g., 2) or Infinity for full flattening
// console.log(again_new_arr);

console.log(Array.isArray("Vedant")); // false; checks if the value is an array
console.log(Array.from("Vedant")); // ["V", "e", ...]; converts a string into an array of characters
console.log(Array.from({ name: "vedant" })); // []; returns an empty array for objects without specifying the values to extract

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Creates an array from the provided arguments

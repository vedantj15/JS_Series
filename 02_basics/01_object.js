// singleton
// Object.create

// Using Symbol to create a unique property key; "key1" is just a label, symbols are always unique
const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", // Property with space, accessed using bracket notation
    [mySym]: "mykey1", // Symbol as a key for unique property
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// Accessing properties
// console.log(JsUser.email); // Dot notation
// console.log(JsUser["email"]); // Bracket notation
// console.log(JsUser["full name"]); // Accessing property with space
// console.log(JsUser[mySym]); // Accessing property with Symbol key

JsUser.email = "hitesh@chatgpt.com"; // Modifying property value
// Object.freeze(JsUser); // Freezes object, preventing further modifications
JsUser.email = "hitesh@microsoft.com"; // This change won't apply if object is frozen
// console.log(JsUser);

// Adding methods
JsUser.greeting = function() {
    console.log("Hello JS user");
};
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`); // Accessing object property using 'this'
};

JsUser.greeting(); // Invokes greeting method
console.log(JsUser.greetingTwo()); // Invokes greetingTwo method with dynamic content

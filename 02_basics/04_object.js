// const tinderUser = new Object() //singleton - constructor

// 1. Creating an empty object and adding properties -by object literals
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(tinderUser);


// 2. Creating an object with nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vedant",
            lastname: "johari"
        }
    }
}

// Accessing a nested property
// Output: "vedant"
console.log(regularUser.fullname.userfullname.firstname);


// 3. Merging objects using spread operator
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Merging obj1, obj2, and obj4 into a new object obj3
const obj3 = {...obj1, ...obj2, ...obj4}

// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
console.log(obj3);


// 4. Accessing a specific property within an array of objects
const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "j@gmail.com" },
    { id: 3, email: "k@gmail.com" }
]

// Accessing the email of the second user in the array
// Output: "j@gmail.com"
console.log(users[1].email);


// 5. Using Object methods
// Getting all keys of tinderUser
// Output: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.keys(tinderUser));

// Getting all values of tinderUser
// Output: [ '123abc', 'Sammy', false ]
console.log(Object.values(tinderUser));

// Getting all entries (key-value pairs) of tinderUser
// Output: [ ['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false] ]
console.log(Object.entries(tinderUser));

// Checking if a property exists in tinderUser
// Output: true
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// 6. Object destructuring and renaming
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "vedant"
}

// Destructuring courseInstructor and renaming it to instructor
const { courseInstructor: instructor } = course

// Output: "vedant"
console.log(instructor);


// 7. Creating an array of empty objects (example of structure)
[
    {},
    {},
    {}
]

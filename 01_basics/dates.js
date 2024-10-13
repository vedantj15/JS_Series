// 1. Creating a new Date object with the current date and time
let myDate = new Date(); // Current date and time
console.log(myDate.toString()); // Logs full date-time string
console.log(myDate.toDateString()); // Logs date string without time
console.log(myDate.toLocaleString()); // Localized date-time string
console.log(typeof myDate); // Logs type of the object, which is "object"

// 2. Creating a Date object using different formats

// a) Using year, month (0-indexed), and day
// Months are 0-indexed: 0 = January, 1 = February, etc.
let myCreatedDate1 = new Date(2023, 0, 23); // Creates date: January 23, 2023
console.log(myCreatedDate1.toString()); // Logs "Mon Jan 23 2023"

// b) Using year, month, day, hours, and minutes
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3); // Creates date: Jan 23, 2023, 5:03 AM
console.log(myCreatedDate2.toString()); // Logs "Mon Jan 23 2023 05:03:00"

// c) Using ISO 8601 format (recommended for consistency across systems)
// ISO format is YYYY-MM-DD, always safe and consistent
let myCreatedDateISO = new Date("2023-01-14"); // Creates date: January 14, 2023
console.log(myCreatedDateISO.toString()); // Logs "Sat Jan 14 2023"

// d) Non-ISO format (MM-DD-YYYY), potentially ambiguous across browsers
// Some regions expect MM-DD-YYYY, others expect DD-MM-YYYY
let myCreatedDateNonISO = new Date("01-14-2023"); // Interprets as Jan 14, 2023
console.log(myCreatedDateNonISO.toString()); // Logs "Sat Jan 14 2023" but may vary by region

// 3. Working with timestamps

// Get the current timestamp (milliseconds since Jan 1, 1970)
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Logs the timestamp (e.g., 1697185619234)

// Get the timestamp for a specific date
console.log(myCreatedDateISO.getTime()); // Logs milliseconds for "2023-01-14"

// Convert timestamp to seconds
console.log(Math.floor(Date.now() / 1000)); // Logs timestamp in seconds

// 4. Date manipulation

let newDate = new Date(); // Current date
console.log(newDate.getMonth() + 1); // Logs current month (1-12), since months are 0-indexed
console.log(newDate.getDay()); // Logs current day of the week (0 = Sunday, 1 = Monday, etc.)

// Get the full name of the weekday using toLocaleString
console.log(newDate.toLocaleString('default', { weekday: "long" })); // Logs full weekday name (e.g., "Sunday")

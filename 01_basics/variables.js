// 3 types : - const, let, var

const my_name = "Vedant";
let city = "Amroha";
var state = "Uttar Pradesh";

//my_name = "Rahul"; // not allowed
city = "Delhi";
state = "New Delhi";

/*
Prefer not use var because of issue in block and functional scope
*/

console.table([my_name,city,state])
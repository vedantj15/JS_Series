// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); //true
// console.log("02" > 1); //true


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >=0); //true

/*
 - In case of null > 0 , comparison operator converts the null to a number which is zero itself so it is like 0>0 which is false hence the output.
 - In case of null >=0, after conversion , null becomes zero and after checking 0>=0 that is indeed true hence the output.
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);

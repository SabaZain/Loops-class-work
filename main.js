// Loops - In TypeScript, loops are control structures that repeatedly execute a block of code as long as a specified condition is true.
// for loop - The for loop repeats a block of code a specified number of times.
// Example 1
for (let i = 1; i <= 15; i++) {
    console.log(`${i}. Welcome to the Typescript Class`);
}
// Example 2
// Function which takes a parameter type number and in function block writing a for loop which prints the number table.
const printTable = (num) => {
    for (let t = 1; t <= 10; t++) {
        console.log(`${num} * ${t} = ${num * t}`);
    }
};
//  calling function 
printTable(9);
printTable(5);
// Example 3 - Function that executes sum of N numbers
const sumOfN = (num) => {
    let sum = 0;
    for (let n = 1; n <= num; n++) {
        sum = sum + n;
    }
    console.log(sum);
};
// calling function
sumOfN(5);
sumOfN(15);
sumOfN(10);
// A while loop in TypeScript repeatedly executes a block of code as long as a specified condition evaluates to true. 
// The condition is checked before each iteration, and if false initially, the loop body will not execute at all.
// Example 1
let i = 1;
while (i <= 10) {
    console.log(i, "Typescript");
    i++;
}
;
// Example 2 - Print table using while loop
let t = 1;
let tableNumber = 4;
while (t <= 10) {
    console.log(`${tableNumber} * ${t} = ${tableNumber * t}`);
    t++;
}
// Example 3 - Function to print table using while loop
const mathematicTable = (num) => {
    let t = 1;
    while (t <= 10) {
        console.log(`${num} * ${t} = ${num * t}`);
        t++;
    }
};
// calling function
mathematicTable(6);
// for in loop - A for in loop in TypeScript iterates over the enumerable property keys of an object.
// It allows you to execute a block of code for each property name in the object.
// Example 1
let student = {
    name: "Sarah",
    age: 15,
    class: "Thursday morning 9am - 12pm"
};
for (const Student in student) {
    console.log(`${Student}: ${student[Student]}`);
}
// Example 2
let employee = {
    name: "Ali",
    age: 30,
    dept: "Finance",
    emailId: "ali123@hotmail.com"
};
for (const Status in employee) {
    console.log(Status, employee[Status]);
}
export {};

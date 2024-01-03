// Question-1.  Write a program to print the   marks of a student in an object  using for loop
//                        obj={ harry: 98, rohan;70,akash;7}

let marks = {
  harry: "98",
  rohan: "70",
  akash: "7",
};

for (let i = 0; i < Object.keys(marks); i++) {
  console.log(
    "Marks of student",
    Object.keys(marks)[i],
    "are :",
    marks[Object.keys(marks)[i]]
  );
}

// Question-2.  Write a program in Q1 for in loop

// let obj = {
//   harry: "98",
//   rohan: "70",
//   akash: "7",
// };
// for (let a in obj) {
//   console.log(" Marks of ", a, "is  :", obj[a]);
// }

// Question-3.  Write a program to print "try again" until the user   enters the correct number.

let cn = 9;
let i;

while (i != cn) {
  i = prompt("Enter a lucky number :");
  console.log("Try again!");
}
console.log("You have entered a write number.");
// Question-4.  Write a function to find mean of 5 numbers.

// function average(a, b, c, d, f) {
//   return (a + b + c + d + f) / 5;
// }
// let p = 5;
// let q = 8;
// let r = 9;
// let s = 2;
// let t = 3;
// console.log("The sum of ", "is :", average(p, q, r, s, t));

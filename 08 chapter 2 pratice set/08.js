console.log("Chapter 2 pratice set");

// Question-1.  Use logical opreter to find whether the age of a person lies between 10 and 20?

let a = prompt("what's your age:");

if (a <= 0) {
  alert("");
} else if (a < 10) {
  alert("");
} else if (a >= 10 && a <= 20) {
  alert("your age 10 to 20");
} else {
  alert("Your age above 20");
}

// Question-2.  Demonstrate the use of  switch case statement in javascript.
console.log("I have some fruit Mango, Banana, Grapes, Apple");

let b = prompt("What do you need!");
switch (b) {
  case "Mango":
    {
      console.log("Mango 40 Rupees per Kg");
    }
    break;
  case "Banana":
    {
      console.log("Banana 50 Rupees per Kg");
    }
    break;
  case "Grapes":
    {
      console.log("Grapes 60 Rupees per Kg");
    }
    break;
  case "Apple":
    {
      console.log("Apple 70 Rupees per Kg");
    }
    break;
  default: {
    console.log("invalied santax");
  }
}

// Qestion-3.  Write a java script program to find whether a number is diviable by 2 and 3.
console.log("Numbers that is divisbel by 2 and 3");
let c = prompt("Enter number! : ");

if (c % 2 === 0 && c % 3 === 0) {
  alert(console.log("Number is divisable by 2 and 3"));
} else {
  alert(console.log("This is number is not divisable by 2 and 3"));
}

// Question-4.  Write a  java script program to find wether a number is divisable by either 2 or3?

console.log("Numbers that is divisbel by 2 or 3");
let d = prompt("Enter number! : ");

if (d % 2 === 0 || d % 3 === 0) {
  alert(console.log("Number is divisable by 2 or 3"));
} else {
  alert(console.log("This is number is not divisable by 2 or 3"));
}

// Question-5.  Print "you can drive " or "you can't drive" based on age being opreter than 18 using ternary opreter.

let e = prompt("Enter your Age! : ");

console.log("You can", e < 18 ? "not drive" : "drive");

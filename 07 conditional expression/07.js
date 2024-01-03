// if condition
// let a = prompt("what's your age:");
// if (a > 0) {
//   alert("This is valid age"); // if condition it is ture then it is work or not.
// }

// if and else condition

// if (a > 0) {
//   alert("This is valid age");
// } else {
//   alert("This is unvalid age"); //  both of one codition is ture then value given
// }

// if   if else condition

// if (a < 0) {
//   alert("This is unvalid age");
// } else if (a < 9) alert("You can not think driving");
// else if (a > 9 && a < 18) alert("You can drive age of 18 ");
// else alert("You can drive");

// switch statement program

console.log("I have some fruit Mango, Banana ,Apple,Grapes");

let fruit = prompt("You need which fruit");
switch (fruit) {
  case "Mango":
    console.log("Magno 40 ruppes per kg");
    break;
  case "Banana":
    console.log("Banana 50 ruppes per kg");
    break;
  case "Apple":
    console.log("Apple 60 ruppes per kg");
    break;
  case "Grapes":
    console.log("Grapes 70 ruppes per kg");
    break;

  default:
    console.log("Sorry");
}

// ternery opreter

let a = prompt("what's your age:");

console.log("You can", a < 18 ? "Not drive" : "Drive");

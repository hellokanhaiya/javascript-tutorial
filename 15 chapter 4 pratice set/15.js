// Question-1.  What wil the follwing print in jabascript?  consol.log("har\"".length).

let a = 'har"';
console.log(a.length);

// Question-2.  Explore the includes, starts  with & endswith functions of a string.

let friend = "Harry how are you";

console.log(friend.startsWith("H"));
console.log(friend.startsWith("Harry"));
console.log(friend.startsWith("harry"));
console.log(friend.endsWith("u"));
console.log(friend.endsWith("you"));
console.log(friend.endsWith("You"));

// Question-3.   Write a program to convert a given string to lowercase.

let vr = "KANHAIAY";

console.log(vr.toLowerCase());

// Question-4.   Extract the amount out of this string "plese give  Rs 1000".

let Extract = "plese give  Rs 1000";

console.log(Extract.length);
let amount = Number.parseInt(Extract.slice(15));
console.log(amount);

//  Question-5.  Try to change 4th character of a given string were you able to do it?

let kanha = "kanhaiya";
kanha[4] = "k"; //  it is not working because string is imutable
console.log(kanha.replace("h", "k"));

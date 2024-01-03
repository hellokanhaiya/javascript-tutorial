console.log("JAVA SCRIPT 03 var let and const");
// var variable is not used our website mostly use let and const
var b = 5;
// var a ="r"  if i can use then no error but let is throw error  ek name ke do variable bana sakte hai

let a = 5;

// let a = "b";  if i can use then error thorw   ek name ke do variable nahi bana sakte
let c = null;
let d = undefined;
{
  let a = 7;
  console.log(a);
}
console.log(a);
//  yadi let ka use karte hai to pahle hame 7 milega and then 5 milega

{
  var b = 7;
  console.log(b);
}
console.log(b);
// lekin yadi hum var keyword ka use karete hai to hame 7 and 7 milega kyuki var bolck define nahi karta

const author = "m";
console.log(author);
// author = 5;  then throw error kyki ho chiz const hai to aap usko do bar use nahi kar sakte

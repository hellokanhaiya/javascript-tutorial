// function jo chiz hum bar bar apne code may use karte hai to hum uska ek function bana lete hai or ek bar ke change may hi sab jagh chnge kar lete hai
function average(x, y) {
  console.log("Done!");
  return Math.round((x + y) / 2);
}
let a = 5;
let b = 6;
let c = 8;
console.log("Average of a and b  :", average(a, b));
console.log("Average of b and c  :", average(b, c));
console.log("Average of c and a  :", average(c, a));

const sum = (p, y) => {
  let r = p + y;
  return r;
};
let d = sum(3, 5);
console.log(d);

// hum function ko jaruri nahi hia ke define kare or return value kuch de

function item(y, z) {
  console.log("");
}
console.log("Average of a and b  :", item(a, b));

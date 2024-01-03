let helo = "harry";

console.log(helo.toUpperCase());
console.log(helo.toLowerCase());
console.log(helo.slice(2));
console.log(helo.slice(2, 3));

// replece

console.log(helo.replace("har ", "moh"));

let friend = "kanha";
console.log(helo.concat(" is friend of ", friend));

let friends = "                      reena                     ";
console.log(friends.trim());

let fr = "kanhaiya";

// console.log(fr[0]);
// console.log(fr[1]);
// console.log(fr[2]);
// console.log(fr[3]);
// console.log(fr[4]);
// console.log(fr[5]);
// console.log(fr[6]);
// console.log(fr[7]);

// how to solve same problem in loop

let cn = "kanhaiya";

for (let i = 0; i < cn.length; i++) {
  console.log(i);
}

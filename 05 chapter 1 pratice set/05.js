// Question-1  Create a variable to type string  and try to  add a number  to it.

let a = 6;
let b = "kanha";
console.log(a + b);
// Question-2  Use type of opreter of find  the datatype  of the string  in last  question.

console.log(typeof (a + b));

// Question-3  Create a const  object  in javascript can  you change it to  hold a number later?

const c = {
  name: "helo",
};
// c = "helo";
// nahi kar sakte

// Question-4  Try  to add a new key  to the const object in problem 3 were you able to do it?

const d = {
  name: "Kanhaiya",
  lastname: "Prajapati",
  class: "12th",
};
d["friends"] = "atul";
console.log(d);
// Question-5  Write  a js program to create  a word-meaning dictionery of 5 words.

const item = {
  Month: "January",
  Flower: "Lotous",
  Bird: "Crow",
  Fruit: "Banana",
  Animal: "Cat",
};

console.log(item);
console.log(item.Month);

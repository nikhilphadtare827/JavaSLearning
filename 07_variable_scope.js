var firstName; // variable declaration
firstName = "Virat"; // variable initialization

var lastName = "Kohli"; // variable declaration and  initialization
firstName = "King Kohli"; // variable update

var firstName; //variable re-declaration
console.log(firstName);

let city; // variable declaration
console.log("Value of city:", city);
city = "Delhi"; // variable  initialization

// let city = "mumbai"; // Not allowed variable re-declaration

const pI = 3.14;
// pI = 3.56; // updeat or modify not allowed
console.log(pI);

var num = 10;
if (num == 10) {
  var word = "Revision is the mother of Success";
}
// console.log(greet);

function sayHi(arg) {
  var greet = "Hi Good Morning";
  if (arg % 2 == 0) {
    var isEven = true;
  } else {
    var isEven = false;
  }
  return isEven;
}
let result = sayHi(10);
console.log(result);

var fullName = "MS DHONI";
if (true) {
  console.log("Hello", age);
} else {
  var age = 37;
}
console.log(age);

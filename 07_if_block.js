console.log("start");
var num = 10;
if (num > 0) {
  console.log("inside if");
  console.log("Number is positive ${num} ");
}

console.log("End");

var ageForvote = 10;
if (ageForvote >= 18) {
  console.log("You are eligibls for voting");
  console.log("Age is: ${ageForvote}");
}
console.log("End of next if block");

function checkEvenOdd(num) {
  if (num % 2 == 0) {
    return "EVEN";
  }
  if (num % 2 != 0) {
    return "ODD";
  }
}
var result = checkEvenOdd(45);
console.log("Given Number 45 is: ${result}");
var result = checkEvenOdd(70);
console.log("Given Number 70 is: ${result}");

var num1 = 5;
if (num1 > 0) {
  console.log("Number ${num1} is positive");
  console.log("Number ${num1} is Negative");
}

function maleMarriiageEligibility(gender, age, boyName) {
  if (gender == "male" && age >= 21) {
    console.log("You are eligible");
  } else {
    console.log("Not Eligble");
  }
}

maleMarriiageEligibility("Male", 20, "Billgates");
maleMarriiageEligibility("Male", 25, "Anil");

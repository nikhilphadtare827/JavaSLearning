// console.log("=============Function with No arguments & No return=============");

// var sumResult = addThreevalues("My Full Name: NIKHIL KAKASAHEB PHADTARES")
// console.log();




console.log("............Function with argument & No return...............");

function swapValuesDude(value1, value2) {

    console.log(".........Before swap...........");
    console.log(value1, value2);
    console.log(".........After swap............");
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log(value1, value2);
}


swapValuesDude("Nikhi", "Nagesh");
swapValuesDude("1000", "2000");

console.log(".........Function with arguments & return........");

function addThreevalues(value1, value2, value3)  {
     var sum = value1 + value2 + value3;
     return sum; 



}

var sumResult = addThreevalues(10.25, 600, 20)
console.log(sumResult);

var sumResult = addThreevalues("Hello, Good, Morning")
console.log(sumResult);













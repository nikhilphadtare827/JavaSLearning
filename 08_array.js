let akshyFN = "Akshya Ghule";
let nayanFN = "Nayan Patil";

let arrayOfNumbers = [0, 2, 4, 5, 6, 7, 8];
console.log(arrayOfNumbers);
console.table(arrayOfNumbers);

const totalArrayElements = arrayOfNumbers.length;
console.log(`Total element available in array is:${totalArrayElements}`);

const is8Available = arrayOfNumbers.includes(8);
console.log(`Is 8 available: ${is8Available} `);

const is9Available = arrayOfNumbers.includes(9);
console.log(`Is 9 available: ${is9Available} `);


const indexOf8 = arrayOfNumbers.indexOf(8);
console.log(`Index of 8 element is: ${indexOf8} `);

const indexOf100 = arrayOfNumbers.indexOf(100);
console.log(`Index of 100 element is: ${indexOf100} `);

var arrayOfNumber = [ 10, 20, 25, 15, 30, 5];
const valueAtIndex2 = arrayOfNumbers[2];
console.log(`Value at index 2 is: ${valueAtIndex2}`);

arrayOfNumbers[3] = 35;
console.log(arrayOfNumbers);

arrayOfNumbers[1] = 50;
console.log(arrayOfNumbers);

var arrayOfNumber = [ 10, 20, 25, 15, 30, 5];
arrayOfNumber.push(40)
console.log(arrayOfNumber);
console.log("===Adding element in the last using push()===");
console.log(arrayOfNumber);
console.log("===Adding element in the last using push()===");
arrayOfNumber.unshift(5)
console.log(arrayOfNumber);

var arrayOfNumber = [ 10, 20, 25, 15, 30, 5];
arrayOfNumber.pop()
console.log(arrayOfNumber);
console.log("===Adding element in the last using push()===");
console.log(arrayOfNumber);
console.log("===Adding element in the last using push()===");
arrayOfNumber.shift()
console.log(arrayOfNumber);

var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5, 40, 45];
console.log("===slice(startIndex)===");
const arrayFromIndex =arrayOfNumbers.slice(3)
console.log(arrayFromIndex);

onsole.log("============================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex) === ");
const splicedArray = arrayOfNumbers.splice(3);
console.log(`Removed elements from array is: ${splicedArray}` );
console.log(arrayOfNumbers);

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex, deleteCount) === ");
const splicedArrayWithDeleteCount = arrayOfNumbers.splice(2, 2);
console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount}` );
console.log(arrayOfNumbers);


var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(1);
console.log(arrayOfNumber);

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumber.splice(3,1);
console.log( `After removing is:$(arrayOfNumbers)`);


var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumber.splice(1,2)
console.log( `After removing is:$(arrayOfNumbers)`);

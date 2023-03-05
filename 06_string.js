var greet = "Good Morning";
console.log(typeof greet);

console.log("Total number chars availble into string variable  - greet");
 var greetLength = greet.length;
 console.log(greetLength);

 console.log("Find the character by index value")
 var charAtIndex3 = greet.charAt(3);
 console.log("character available at index 3 is:", charAtIndex3);

 console.log("Find the last character");
 var charAtLastIndex = greet.charAt(greetLength-1);
 console.log("Last char is:", charAtLastIndex);

 console.log("Find the index by character value");
 var indexOfM = greet . indexOf('M');
 console.log("Index of char M is:", indexOfM);

 console.log("Index of char which is not availeble into the string:", greet.indexOf('z'));

 console.log("Index of o char:", greet.indexOf('o') )
 console.log("Index of o char using lastIndex(:", greet.lastIndexOf('o'));

  var replaceResult = greet.replace("Morning", "Evenig");
  console.log(replaceResult);
  console.log(greet);

  console.log("upper case:", replaceResult.toUpperCase());
  console.log("upper case:", replaceResult. toLocaleUpperCase());

var myName = "Nikhil phadtare";
  var myNameAfterTrim = myName.trim();
  console.log("Removing extra start and end spaces using trim():", myNameAfterTrim, myName. length, myNameAfterTrim. length );

  var count = myName.length - myNameAfterTrim.length;
  console.log(count);

  console.log(myName.trimStart(), myName.trimEnd());
  console.log("includes");
  console.log( "Is substring Mor includes in the greet or not", greet.includes("Mor"));
  console.log( "Is substring Mor includes in the greet or not", greet.includes("Afternoon"));
  console.log( "Is substring Mor includes in the greet or not", greet.includes("o"));





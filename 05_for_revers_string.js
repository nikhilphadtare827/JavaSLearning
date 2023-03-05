var reverseString = function(str){
    var reverse = ""; // wo
    for (let index = str.length-1 ; index >= 0; index--) { // 9 
      var charAt = str.charAt(index);
      reverse = reverse + charAt; // "w"+"o" ==> "wo"
   }
    return reverse;
}
var result = reverseString("Do it anyhow"); 
console.log(`Reverse String is: ${result}`)//


var reverseStr = function(str){ // str = "Do it anyhow"
    var reverse = ""; // wohyna
    for (let index = str.length-1 ; index >= 0; index--) {
       var char = str.charAt(index);// o
       if(char == " "){
            break;
       }
       reverse = reverse + char; // "w"+"o" ==> "wo"
    }
    return reverse;
}
var result = reverseStr("Do it anyhow"); 
console.log(`Reverse last word : ${result}`)

var str= "I am Angular  champ"
for (let index = str.length; index >=0; index=index+1) {
    console.log(index);
    
}
   console.log("Total number of spaces is: ", count);
    var firstword = "";
   var firstwordLength = function (strGiven){
    for (let index = 0; index < firstwordLength.length; index++){
        var char = strGiven.charAt(index);
        firstword = firstword + char;
        if(char==" "){
            break
        }
    }
       return firstword;

   }
     firstwordLength("Focus is the key");
     console.log(`First word--> ${firstword} length is : ${firstword.length}`);
           
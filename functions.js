// Convert Celsius to Fahrenheit using equation
// A1: celsius
// R: fahrenheit
function convertCelsToF(celsius) {
   let fahrenheit = celsius * (9 / 5) + 32;
   return fahrenheit;
}

//Reverse a string
//A1: str
//R: reverse string
//var reverseString = (str) => str.split("").reverse().join("");
function reverseStr(str) {
   //split given string str by char using .splt
   let split = str.split("");
   //use .reverse to reverse split string
   let reverse = split.reverse();
   //join char back together .join
   return reverse.join("");
}
//factoralize a number
//A1: number
//R: number
function factorialize(num) {
   if (num === 0) {
      return 1;
   }
   return num * factorialize(num - 1);
}
// Find the longest word in a string
// First you want to split the words in string into array
// Then assign greatest to 0 to keep track of longest word in array
// Use map method
//A1: string
//R : number of charecters in longest word
var findLongWordStr = (str) => {
   var split = str.split(" ");
   var greatest = 0;
   split.map((words) => {
      if (words.length > greatest) {
         greatest = words.length;
      }
   });
   return greatest;
};
// Return an array of the largest numbers from nested arrays
//A1: array
//R: new array
function largestOfFour(arr) {
   var results = [];
   for (var n = 0; n < arr.length; n++) {
      var largestNumber = arr[n][0];
      for (var sb = 1; sb < arr[n].length; sb++) {
         if (arr[n][sb] > largestNumber) {
            largestNumber = arr[n][sb];
         }
      }

      results[n] = largestNumber;
   }

   return results;
}

//Confirm ending
//A1: string
//A2: target
//R: true or false boolean
function confirmEnding(str, target) {
   return str.slice(str.length - target.length) === target;
}

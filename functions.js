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
//R : number of characters in longest word
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
// Create a variable to store the results of array
// Create an outer loop to iterate throught the outer array
// Create second var to hold the largest number and initialise it with the first number.This is outside the inner loop so it wont be reassigned until we find larger number
// Create inner loop to work with the sub-arrays
//Check if the element of the sub array is larger than the currently stored largest number.If so , then update the number in variable
//After the inner loop, save the largest in the corresponding position inside of the results array.
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
//Use slice meth to copy string and extract section return new str
//Only use first param in start slice to copy everything from start of index then the length is sub from target.length to get remaing char equivalent to targets length
//Compare the results of slice to target to see if have same char
//A1: string
//A2: target
//R: true or false boolean
function confirmEnding(str, target) {
   return str.slice(str.length - target.length) === target;
}

// Repeat A String
//A1: string
//A2: number
//R: repeated string or empty string if not positive number
function repeatStringNumTimes(str, num) {
   let repeat = ""; //repeated word stored
   while (num > 0) {
      //while loop repeat code according currvalnum
      repeat += str; //add string to repeat var
      num--; //decrease num
   }
   return repeat; // return at end of loop
}

// Truncate String
// Given str (str.length) is greater than num then use slice method
// 0 is starting point, num is ending point for slice
// after slicing the str, add on end (...)
//if statement is false just return the str :str
//A1: string
//A2: number
//R: string
//function truncateString(str, num) {
//let a = str.length;
//let b = str.slice(0, num);
//return a > num ? b + "..." : str;
//}
var truncateString = (str, num) =>
   str.length > num ? `${str.slice(0, num)}...` : str;

//Finders Keepers
//A1: array
//A2: function
//R: return num if true and if false undefined
// use loop to look through array
// set the num variable to each index in array
// The predefined function checks each number, if true return num
// If none of the numbers in the array pass the function's test, return undefined
var findElement = (arr, func) => {
   let num = 0;
   for (var i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
         return num;
      }
   }
   return undefined;
};
// Boo Who
// Check if a value is classified as boolean primitive.
//Use the operator of typeof to check if the variable is a boolean
//A1: value of bool
//R: boolean true or false
function booWho(bool) {
   return typeof bool === "boolean";
}
//var booWho = (bool) => typeof bool === "boolean";
//if the given bool is boolean, return true//if not, return false

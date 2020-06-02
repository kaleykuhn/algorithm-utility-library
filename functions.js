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
function reverseStr(str) {
   //split given string str by char using .splt
   let split = str.split("");
   //use .reverse to reverse split string
   let reverse = split.reverse();
   //join char back together .join
   return reverse.join("");
}

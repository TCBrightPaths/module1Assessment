//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

let colorCopy    = faveColors.slice(0, 3);

console.log(colorCopy);

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

colorCopy.push("blue");
console.log(colorCopy);

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers  = [1, 2, 3, 4, 5]

let middleNums = [numbers.slice(1, 4)[0], numbers.slice(1,4)[1], numbers.slice(1,4)[2]];
console.log(middleNums);


//////////////////PROBLEM 4////////////////////
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr', 
  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the
  array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
  Return the answers array inside of the function.
*/
let arr         = [2, 3, 5, 80, 112, 17, 210, 28];
let answers     = [];
for(i = 0; i < arr.length; i++) {
    if(arr[i] > 100) {
            answers.push("big");
    } else {
            answers.push("small");
    }
}
function bigOrSmall(_arr) {
    console.log(answers);
}
bigOrSmall();
//
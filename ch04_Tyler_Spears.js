//Tyler Spears

/* The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum 
of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array 
containing all the numbers from start up to and including end.

Next, write a sum function that takes an array of numbers and returns the sum of these 
numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that 
indicates the “step” value used when building the array. If no step is given, the elements 
should go up by increments of one, corresponding to the old behavior. The function call 
range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative 
step values so that range(5, 2, -1) produces [5, 4, 3, 2]. */


function range(start, end, step = 1) {
  let values = [];
  for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
    values.push(i);
  }
  return values;
}

function sum(n) {
  let total = 0;
  for (let i = 0; i < n.length; i++) {
    total += n[i];
  }
  return total;
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1))
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)))
// → 55


/*Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its 
elements appear. For this exercise, write two functions, reverseArray and 
reverseArrayInPlace. The first, reverseArray, should take an array as its argument and 
produce a new array that has the same elements in the inverse order. The second, 
reverseArrayInPlace, should do what the reverse method does: modify the array given as 
its argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, 
which variant do you expect to be useful in more situations? Which one runs faster? */

function reverseArray(array) {
  let arrayNew = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayNew.push(array[i]);
  }
  return arrayNew;
}

/*********
i did have a little help wit this second part thanks to notebook LM i understood how to do
the funtion and i also had the for loop the part that was confusing is the body
of the for loop i understand it more now but the array in place is kinda confusing.
 */

function reverseArrayInPlace(array) {
for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i]; 
    array[i] = array[array.length - 1 - i]; 
    array[array.length - 1 - i] = old; 
  }
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
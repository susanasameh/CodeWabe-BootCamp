//Create an array of fruits (e.g., ["apple","banana","orange"]).
let fruits = ["apple", "banana", "orange"];
//push() to add a new fruit.
fruits.push("mango");
console.log(fruits); //to display the updated array.
//pop() to remove a fruit.
fruits.pop();
console.log(fruits);
//shift() to remove the first fruit.
fruits.shift();
console.log(fruits);
//unshift() to add a new fruit at the beginning.
fruits.unshift("grape");
console.log(fruits);


//________________________________________________________________
//Task 2: Filter and Map Array Elements
//Create an array of numbers (e.g., [1, 2, 3, 4, 5, 6]).
let numbers = [1, 2, 3, 4, 5, 6];
//Use filter() to create a new array containing only even numbers.
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
//Use map() on the filtered array to calculate the square of each number
let squares = evenNumbers.map(num => num ** 2);
console.log(squares);
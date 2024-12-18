//splice(): Adds/removes elements from an array and returns the removed elements.
//Mutates the original array

const originalArray = [1, 2, 3, 4, 5];

const removedElements = originalArray.splice(2, 3); 
// Removes 2 elements starting from index 2
console.log(originalArray); // [1, 2]
console.log(removedElements); // [3, 4,5]

let fruits1 = ["Apple", "Banana", "Cherry"];
fruits1.splice(1, 1, "Mango"); // Removes "Banana" at index 1 and inserts "Mango"
console.log(fruits1); // ["Apple", "Mango", "Cherry"]

//The splice() method is very versatile and can be used in a variety of scenarios to add, 
//remove, or replace elements in an array. Here are some common use cases for splice():

//1. Removing Elements from an Array
//You can remove one or more elements from any position in an array.
//Example: Remove elements starting from a specific index

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// Remove 2 elements starting from index 1 (removes "Banana" and "Cherry")
fruits.splice(1, 2);
console.log(fruits); // ["Apple", "Date", "Elderberry"]

//2. Inserting Elements into an Array
//You can insert new elements at any position in an array without removing anything.
//Example: Insert elements at a specific index

let numbers = [1, 2, 5, 6];
// Insert "3" and "4" at index 2 (before the existing "5")
numbers.splice(2, 0, 31, 41);
console.log("Insert elements at specific index" +numbers); // [1, 2, 31, 41, 5, 6]

//3. Replacing Elements in an Array
//You can replace existing elements by removing them and 
//inserting new ones in their place

let cars = ["Toyota", "Ford", "BMW"];
// Replace "Ford" with "Tesla"
cars.splice(1, 1, "Tesla");
console.log(cars); // ["Toyota", "Tesla", "BMW"]

//4. Removing and Inserting at the Same Time
//You can remove elements and insert new ones at the same time. 
//This is useful when you want to update part of an array.

let scores = [10, 20, 30, 40, 50];
// Remove 2 elements starting at index 1, and add 25 and 35 in their place
scores.splice(1, 2, 25, 35);
console.log(scores); // [10, 25, 35, 40, 50]


//5. Clearing Part of an Array
//You can use splice() to remove all elements from 
//a specific position onward, effectively shortening the array.

let animals = ["Dog", "Cat", "Rabbit", "Hamster", "Fish"];
// Remove all elements starting from index 2
animals.splice(2);
console.log(animals); // ["Dog", "Cat"]


//9. Reversing Part of an Array
//You can use splice() to take out part of an array, reverse it, 
//and then insert it back.

let numbers1 = [1, 2, 3, 4, 5, 6];
// Take out elements at index 1 to 4, reverse them, and put them back
let reversedPart = numbers1.splice(1, 4).reverse();
numbers1.splice(1, 0, ...reversedPart);
console.log(numbers1); // [1, 5, 4, 3, 2, 6]



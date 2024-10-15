//splice(): Adds/removes elements from an array and returns the removed elements.
//Mutates the original array

const originalArray = [1, 2, 3, 4, 5];

const removedElements = array.splice(2, 3); 
// Removes 2 elements starting from index 2
console.log(originalArray); // [1, 2]
console.log(removedElements); // [3, 4,5]

let fruits = ["Apple", "Banana", "Cherry"];
fruits.splice(1, 1, "Mango"); // Removes "Banana" at index 1 and inserts "Mango"
console.log(fruits); // ["Apple", "Mango", "Cherry"]

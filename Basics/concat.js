//non mutating method
//concat() created a new array by combining 
//arr1 and arr2, but it did not modify the original arrays.

let arr1 = [1, 2, 3];
let arr2 = [3, 4];

let newArr = arr1.concat(arr2); // Combines arr1 and arr2 into a new array

console.log(newArr); // [1, 2, 3, 3, 4]
console.log(arr1); // [1, 2] (original array is unchanged)

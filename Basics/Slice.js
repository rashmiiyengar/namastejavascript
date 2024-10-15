 
//slice(): Extracts a portion of an array and returns a new array.
//The original array remains unchanged because slice() 
//does not mutate the array, it just returns a new array with the selected elements.
 
 async function sortAllPrices() {
    const prices = ["$10.00","$20.00","$30.00","$40.00","$50.00"]
    const priceArray = [];
  
    for (let price of prices) {
      let newPrice = price.slice(1); // Removes the first character, usually a dollar sign
      priceArray.push(Number(newPrice));
    }
  
    priceArray.sort((a, b) => {
      return a - b; // Sorts the array in ascending order
    });
    
    return priceArray;
  }

  (async () => {
    const result = await sortAllPrices(); // Await the async function
    console.log(result); // Logs the sorted prices
  })();

const array = [1, 2, 3, 4, 5];
const newArray = array.slice(0, 4); // Extracts from index 1 to 3 (excludes 4)
console.log(newArray); // [2, 3, 4]
console.log("array orig" +array); 


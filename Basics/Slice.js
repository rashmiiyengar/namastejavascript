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
const cart = ["shoes","jackets","coat","mobile"];

//createOrder api will return us a promise, promise can be assumed as an empty object
//createOrder api is an async operation it will take some time to execute

// {date:undefined} //while executing
// {data: orderDetails} //after createOrder api returns the promise with data

//const promise = createOrder(cart);

// promise.then((orderId)=>{
//     proceedToPayment(orderId);
// })

// fetch is a synchronous function which will return us a promise
// promises are immutable
// Promises is an object representing the eventual completion or failure 
// of an asynchronous operation.


const GITHUB_API = "https://github.com/rashmiiyengar";
const promise1= fetch(GITHUB_API);


    promise1.then((data)=>{
    console.log(promise1);
    //console.log(data);
    })



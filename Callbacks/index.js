console.log("Callbacks");
console.log("Javascript");
console.log("Asynchronous");

// Using callbacks is a powerfull way to do asynchronous things in Javascript
// 
setTimeout(()=>{
    console.log("Javascript");
},5000)

// Use case 2: 
// 1. Create order
// 2. Proceed to payment
// Agenda createorder api call should be completed before calling the proceed to payment api
// we will pass a callback function to createorder api 

//the below is example of callback hell also known as pyramid pof dume

const cart =["shoes","jacket","mobile","sandles"];
api.createOrder(cart,()=>{
    api.proceedtoPayment(()=>{
        api.showOrderSummary(()=>{
            api.updatewallet();
        });
    });
});


//Inversion of Control

//You loose the control of code while using callbacks
//we have given control of proceedtoPayment api to createOrder api

api.createOrder(cart,()=>{

    api.proceedtoPayment()

});




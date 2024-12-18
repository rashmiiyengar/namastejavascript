
//It is basically used to transform a array. The map() method creates a new array with the results
//of calling a function for every array element.
const arr = [5, 1, 3, 2, 6];

const res =arr.map((e)=>e*2)
console.log(res)

const result=arr.filter((e)=>e%2)
console.log(result)

const reduceRes=arr.reduce((accumulator,curentValue)=>{
    return accumulator+curentValue
},0)
console.log("Sum: " +reduceRes)

const users = [
    { firstName: "Alok", lastName: "Raj", age: 23 },
    { firstName: "Ashish", lastName: "Kumar", age: 29 },
    { firstName: "Ankit", lastName: "Roy", age: 29 },
    { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
    ];

const output=users.filter((user)=>user.age<30).map((user)=>user.firstName)
console.log(output); // ["Alok", "Ashish", "Ankit"]

const output2=users.reduce((acc,currVal)=>{
    if(currVal.age<30){
        acc.push(currVal.firstName)
    }
    return acc;
},[])
console.log(output2)
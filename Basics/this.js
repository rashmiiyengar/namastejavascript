function sayHi(){

    console.log(this)
    console.log(this.name)
}

const user = {name:"rashmi"}

sayHi.call(user)
sayHi.apply(user)
const res=sayHi.bind(user)
res()
//call: Invokes the function with a specific this value and arguments.
//apply: Similar to call, but arguments are provided as an array.
//bind: Returns a new function with this permanently set.

//Explicit Binding (call, apply, bind): JavaScript provides methods to 
//explicitly set the value of this when calling a function.
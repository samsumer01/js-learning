// premitive 

// 7 types : string , Number, Boolean , null, undefined,Symbol,BigInt

const score=100
const scoreValue=100.5

const isLoggedIN = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id ===anotherId);

const bigNumber = 2423423242342342423n

//  Reference ( Non premitive)
// Array, Oject , funtion 

const heros = ["sam","erath","soil"]
let myObj={
    name:"sam",
    age:22,
}


const myFunction = function(){
    console.log("Hello world")
}

console.log( typeof outsideTemp);


//***************************

// stack (primitive),heap(Non-primitive)

let myName="sam"
let anotherName="Elbert"
anothername="samsumer"

console.log(anotherName);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne


userTwo.email="sam@gmial.com"

console.log(userOne.email);
console.log(userTwo.email);

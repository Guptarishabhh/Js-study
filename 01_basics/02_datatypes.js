// data types in js

let name = "rishabh"
let age = 23

console.log();

// => primitive datatype
    // -> [string] -> used for text
    // -> [number] -> stores numbers and integers
    // -> [Boolean] -> stores only [true, false]
    // -> [Undefined] -> var declared but value not b assign
    // -> [Null] -> stanalone  value
    // -> [Symbol] -> use to create unique values
    // -> [Bigint] -> use for very large integers 

// => non-Primitive datatypes
    // -> [object] ->it stores data in key values
    // -> [Array] -> use to store multiple values
    // -> [Functions] ->  it is also type of object we need to create function to define value

// if u want to know the type of datatype use //

// console.log(typeof "rishabh"); 
// // it gives string
// console.log(typeof age);
// // it gives number

// ----------------------- memory-----------------

//  stack, Heap

// stack is used in all (primitive datatypes)
    // we always get a copy when derclare a var in stack memory

// Heap is used in all ( Non-primitive datatypes)
// we always get reference of original value when we derclare in heap memory

let myname = "rishabhgupta"

let anothername = myname
anothername = "rishugupta"

console.log(myname);
console.log(anothername);

let user1 = {
    email: "user@gmail.com",
    age: 22
}

let user2 = user1

user2.email = "user@rishugmai.com"

console.log(user1.email);
console.log(user2.email);




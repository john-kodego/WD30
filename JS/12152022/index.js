// Modern JavaScript Features

// Default Parameters
// old way
const add = (num1, num2) => {
    // ternary operator
    // condition ? true value : false value
    num2 = typeof num2 !== 'undefined' ? num2 : 0;
    return num1 + num2;
}
// console.log( add(15) );

// new way
const multiply = (num1, num2 = 5,) => {
    return num1 * num2;
}
// console.log( multiply(99) );
// console.log( multiply(99, 2) );

// Spread syntax 
const nums = [5, 4, 3, 2, 1];
// for function calls
Math.min( ...nums );
// Math.min( 5, 4, 3, 2, 1 );

// in array literals, creating a new array using existing array
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

const arr1 = [ ...nums1, ...nums2 ];
// [1, 2, 3, 4, 5, 6]
const arr2 = [ "a", "b", ...nums2 ];
// ["a", "b", 4, 5, 6]
const arr3 = [ ...nums1, ...nums2, 7, 8, 9 ];
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// in object literals
// copy property from one object to another
const feline = { 
    family: "Felidae", 
    legs: 4 
};
const canine = { 
    family: "Canidae", 
    hasTail: true 
};

const dog = { 
    ...canine, 
    isPet: true 
};
// { family: "Canidae", hasTail: true, isPet: true }
const catDog = {
    ...canine,
    ...feline
}
//{ family: "Felidae", hasTail: true, legs: 4}
// console.log(dog);
// console.log(catDog);

// Rest Parameter(s)
// get all remaining arguments into an array
// only one rest parameter is allowed
// A rest parameter must be last in a parameter list
const getSum = ( message, ...numbers) => {
    let sum = 0;
    for(let n of numbers) {
        sum += n;
    }
    console.log(message);
    return sum;
}
console.log( getSum(1, 2) ); // 3
console.log( getSum(1, 2, 3, 4, 5) ); // 15
console.log( getSum("Hello!", 1,3,2,5,6,7,81,2,3) )
//                 ( message, ...numbers)



console.log("Sending a request to server");

setTimeout( 
    () => {
        console.log("Received a response from the server");
    },
    3000
);

console.log("This is the end of the file!");

// Call Stack

// check if triangle is a right triangle
// a^2 + b^2 = c^2

const multiply = (x, y) => {
    return x * y;
}
const square = (x) => {
    return multiply(x, x);
}
const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
}
// 9 + 16 === square(c)
console.log( isRightTriangle(3, 4, 5) ); // true
// Call Stack
/*
    x * y
    multiply(x, x)
    square(c)
    isRightTriangle(3, 4, 5)
*/

// Promise(s)
// Resolved or Rejected

loadFBNewsFeed('myProfile')
    // res = response
    .then((res) => {
        // runs if promise is resolved
    })
    .then((res) => {
        // runs if promise is resolved
    })
    .catch((err) => {
        // runs if promise is rejected
    })
    
// Unsplash Access Key
// YOUR_UNSPLASH_ACCESS_KEY
// https://api.unsplash.com/
// Authorization: Client-ID YOUR_ACCESS_KEY

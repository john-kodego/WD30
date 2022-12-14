// JavaScript Core Objects

// String
const fullName = "Firstname Lastname";
// string.length property
// console.log( fullName.length );

const sentence = "The quick brown fox jumps over the lazy dog";
// split method, returns an array
// split(separator, limit)
const sentenceSplit = sentence.split(" ", 3);
// console.log(sentenceSplit);
const sentenceChars = sentence.split("");
// console.log(sentenceChars);
const sentenceCopy = sentence.split();
// console.log(sentenceCopy);

// slice method
// slice(indexStart, indexEnd)
// console.log(sentence[31]);
const slice1 = sentence.slice(31);
// console.log(slice1);
const slice2 = sentence.slice(4, 19);
// console.log(slice2);
const slice3 = sentence.slice(-5);
// console.log(slice3);

// indexOf method
// indexOf(substring, position)
// const index1 = sentence.indexOf("jumps");
// -1 means not found, substring does not exist in string
const index1 = sentence.indexOf("jumps", 21);
// console.log(index1);
// lastIndexOf
const lastIndex = sentence.lastIndexOf("dog");
// console.log(lastIndex);
// search method
// search(regexp)
const searchIndex = sentence.search("lazy");
// console.log(searchIndex);

// substring method
// substring(indexStart, indexEnd)
const substring1 = sentence.substring(31);
// console.log(substring1);

// replace method
// replace(searchString, replacement);
// replaceAll()
const replaced = sentence.replace( "lazy", "sleepy" );
// console.log(replaced);
const upperCase = sentence.toUpperCase();
// console.log(upperCase);
const lowerCase = upperCase.toLowerCase();
// console.log(lowerCase);

// trim method
const newString = "                 This is a new string                        ";
const trimString = newString.trim();
// console.log(newString);
// console.log(trimString);

// Number
const myNumber = 5.146;
// console.log(myNumber);
// toString method
// console.log( myNumber.toString() );
// toFixed method
// console.log( myNumber.toFixed(2) );
const numString = "20";
// console.log( Number(numString) );
// Number.isInteger() method
// console.log( Number.isInteger(25) );
// Number.isNaN
// NaN means Not a Number
// console.log( myNumber - sentence );
// console.log( Number.isNaN( myNumber - sentence ) );


// Math
// console.log( Math.round(4.5) );
// ceil(), ceiling, round up
// console.log( Math.ceil(3.01) );
// floor(), round down
// console.log( Math.floor(99.99) );

// 9, 3, 5, 6, 7, 1
const numbers = [9, 3, 5, 6, 7, 1];
// console.log( Math.min(9, 3, 5, 6, 7, 1) );
// console.log( Math.max(9, 3, 5, 6, 7, 1) );

// Spread syntax ...array
// Math.min(9, 3, 5, 6, 7, 1)
console.log( Math.min(...numbers) );
console.log( Math.max(...numbers) );

const letters = ['a', 'b', 'c'];
const letters2 = ['d', 'e', 'f'];

const combined = [ ...letters, ...letters2 ];
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(combined);

// using numbers array
// Find the 2nd highest value




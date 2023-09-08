/*
*
*
*     QUESTION #1:
*
*
**/ 
// 1. Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as a parameter to the callback function.

// Sample:

// var allAreLessThanSeven = all([1,2,9], function(num){

// return num < 7;

// });

// console.log(allAreLessThanSeven); // false


// ========== Solution: =========== 

// callback function definition
const callback = (number) => {
 return number < 7;
};
// all() function definition
const all = (numbers, callback) => {
  // loop through array of numbers
  for (let i=0;i<numbers.length;i++) {
    //call the callback and pass in the number
    let pass = callback(numbers[i]);
    // If any element fails the test, return false
    if (!pass) {
      return false;
    }
  }
  //  if pass is true then the elments are all less than seven
  return true;
};

// Let's test it !
let arrayOfNumbers = [6, 9, 67];
let allLessThanSeven = all(arrayOfNumbers, callback); 

console.log(allLessThanSeven); 
// logs false because all elements did not satisfy the condition defined in the callback




/*
*
*
*     QUESTION #2:
*
*
**/ 


// 2. Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
// Sample Object:

// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }


// ========== Solution: ===========


// function contains definition
function contains(obj, value) {

    //if the current object matches the value, return true
    if (obj === value) {
      return true; 
    }
  
    // Check if the current object is an array [so we can loop using index]
    if (Array.isArray(obj)) {
  
      // ;oop through elements in the obj
      for (let i = 0; i < obj.length; i++) {
  
        // check for element using contain
        if (contains(obj[i], value)) {
          
          // if found,
          return true;
        }
      }
    }
  
    // check if the current object is an object [so we can loop using keys/properties]
    if (typeof obj === 'object' && obj !== null) {
  
      // loop through each property in the object
      for (let key in obj) {
  
        // Call contains on the value of each key 
        if (contains(obj[key], value)) { 
          // If found in the nested property
          return true;
        }
      }
    }
  
    // else
    return false;
  }
  

//   Let's test it!

const nestedInfo = {
    data: {
      info: {
        moreInfo: { 
          almostThere: {
            nearlyThere: {
              companyName: 'Bayt' 
            }
          }
        }
      }
    }
  }
  
  
  console.log(contains(nestedInfo, 'Bayt'))  // logs true because the return false flag wasn't raised
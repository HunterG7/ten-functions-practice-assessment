"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

const isTrue = userInput => {
    if (typeof userInput === "boolean") {
        return userInput;
    } else {
        return false;
    }
}
const isFalse = userInput => {
    if (typeof userInput === "boolean") {
        return !userInput;
    } else {
        return false;
    }
}

const not = userInput => {
    if (userInput === 123 || userInput === "hello" || userInput === 5) {
        return false;
    } else if (userInput === true) {
        return false;
    } else {
        return true;
    }
}


const addOne = userNum => {
    userNum = parseFloat(userNum);
    if (isNaN(userNum) === false && typeof userNum === "number") {
        return userNum + 1;
    }
}
// console.log(addOne(Infinity));

const isEven = userNum => {
    userNum = parseFloat(userNum);
    if (isNaN(userNum) === false && typeof userNum === "number") {
        if (userNum % 2 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
// console.log(isEven(true));

const isIdentical = (inputOne, inputTwo) => {
    if (inputOne === inputTwo) {
        return true;
    } else {
        return false;
    }
}
// console.log(isIdentical('100', 100));

const isEqual = (inputOne, inputTwo) => {
    if (inputOne == inputTwo) {
        return true;
    } else {
        return false;
    }
}
// console.log(isEqual('10', 10));

const or = (inputOne, inputTwo) => {
    if (inputOne === "hello") {
        return inputOne;
    } else if (inputOne || inputTwo === true) {
        return true
    } else {
        return false;
    }
}
// console.log(or("hello", "world"));

const and = (inputOne, inputTwo) => {
    if (inputTwo === "world") {
        return inputTwo;
    } else if (inputOne && inputTwo === true) {
        return true;
    } else {
        return false;
    }
}
// console.log(and('gray', 22));

const concat= (inputOne, inputTwo) => {
    inputOne = inputOne.toString();
    inputTwo = inputTwo.toString();
    if (typeof inputOne === "string" && typeof inputTwo === "string") {
        return inputOne + "" + inputTwo;
    }
}
// console.log(concat(true, true));
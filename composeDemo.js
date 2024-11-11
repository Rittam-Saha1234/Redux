import { compose } from "redux";

function removeSpaces(string){
    return string.split(" ").join("");
}

function repeatString(string){
    return string + string; //or you can use return string.repeat(2)
}

function convertToUpper(string){
    return string.toUpperCase();
}

const input="abc def ghi";

// console.log(convertToUpper(repeatString(removeSpaces(input))));

const composedFunction= compose(removeSpaces, repeatString, convertToUpper);
console.log(composedFunction(input))
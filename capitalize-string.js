// Capitalize Every first Letter of each word in a String.

let string = 'I love programming and coding';
let stringLow = string.toLowerCase();   //Converts the whole string to lowercase
let stringArr = stringLow.split(' ');   //Splits the string into an array of words


let capString = []; 
for(let i = 0; i < stringArr.length; i++){
    let word = stringArr[i];
    let firstLetter = word[0].toUpperCase();    //Capitalizes the first letter
    let rest = word.slice(1);           //Takes the rest of the word
    let final = firstLetter + rest;     
    capString.push(final);              //Joins them back and pushes
    
}
let finalString = capString.join(' ');    //joins the array back into a single string
    console.log(finalString);
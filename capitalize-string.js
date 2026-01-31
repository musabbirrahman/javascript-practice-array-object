// Capitalize Every first Letter of each word in a String

let string = 'I love programming and coding';
let stringLow = string.toLowerCase();
let stringArr = stringLow.split(' ');


let capString = [];
for(let i = 0; i < stringArr.length; i++){
    let word = stringArr[i];
    let firstLetter = word[0].toUpperCase();
    let rest = word.slice(1);
    let final = firstLetter + rest;
    capString.push(final);
    
}
let finalString = capString.join(' ');
    console.log(finalString);
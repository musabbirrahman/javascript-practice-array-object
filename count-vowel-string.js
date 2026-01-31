// Check whether a string contains all the vowels a, e, i, o, u


let string = 'Once upon a time, there was a village';

let stringLow = string.toLowerCase();
if(stringLow.includes('a') && 
    stringLow.includes('e') && 
    stringLow.includes('i') && 
    stringLow.includes('o') && 
    stringLow.includes('u')
){
    console.log('Includes all vowels')
}
else{
    console.log('Does not include all vowels')
}
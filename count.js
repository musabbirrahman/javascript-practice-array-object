// Count how many times a string has the letter


let string = 'We love to travel bangladesh';

let count = 0;

for(let i = 0; i < string.length; i++){
    let letter = string[i];
    if(letter.toLowerCase() == 't'){
        count += 1;
    }
}
console.log(count);


// Count how many times a string has the letter a or A

let str = 'There is a garden outside the building. A river is there'

let countStr = 0;

for( let n = 0; n < str.length; n++){
    let howMany = str[n];
    if(howMany.toLowerCase() === 'a'){
        countStr++;
    }
}
console.log(countStr)




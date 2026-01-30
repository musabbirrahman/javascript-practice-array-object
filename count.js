let string = 'We love to travel bangladesh';

let count = 0;

for(let i = 0; i < string.length; i++){
    let letter = string[i];
    if(letter.toLowerCase() == 't'){
        count += 1;
    }
}
console.log(count);
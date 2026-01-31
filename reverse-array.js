// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let colorReverse = [];
for(let i = 0; i < colors.length; i++){
    colorReverse.unshift(colors[i]);

}
console.log(colorReverse)
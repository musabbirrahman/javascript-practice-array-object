// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let string = 'There is a box where every fruit was arranged';

if(string.includes('x')){
    string =  string.replace('x', 'y');
}
else if(string.includes('X')){
    string = string.replace('X', 'Y')
}
console.log(string)


// Shortcut

let str = 'There is a box where every fruit was arranged';

str = str.replace('x', 'y').replace('X', 'Y');
console.log(str)
// Loop through an object and print the key-value pairs with their types

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

let myObjectArr = Object.keys(myObject);
for(let i = 0; i < myObjectArr.length; i++){
    let key = myObjectArr[i];
    let values = myObject[key];
    console.log(key , ':', values, '| type: ', typeof(values))
}
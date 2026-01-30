let  bike = {
    brand: 'honda',
    color: 'Black',
    price: '2500000',
    bikeCc: 250,
    battery: {
        durability: 3,
        brand: 'hero',
        capacity: '500v'
    }
}
// For in loop

for(let key in bike){
    // console.log(key, ':', bike[key])
}

// for loop

let bikeKeys = Object.keys(bike);
for(i = 0; i < bikeKeys.length; i++){
    let key = bikeKeys[i];
    let value = bike[key]
    console.log(i, '->', bikeKeys[i], ':', value);
}
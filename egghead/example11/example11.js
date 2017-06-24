let products = [ 5 , 10 , 4 , 12 , 1 , 18 , 3 ];


console.log(products);

let p = products
    .filter( product => product < 10)
   // .forEach( product => product * 2 )

console.log( p )

products
    .filter( product => product < 10)
    .forEach( ( product ) => {
        console.log( product * 2)
    })


function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered)
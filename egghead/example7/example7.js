/**
* Created by ISORTEGAH on 04/06/2017.
**/
console.log([ 1, 2, 3]);

console.log(...[ 1, 2, 3 , 4]);

let first = [ 1, 2, 3];
let second = [ 1, 2, 3 ,4];

first.push(second);

console.log(first); 

first.push(...second);

console.log(first); 
/**
* Created by ISORTEGAH on 04/06/2017.
**/
var salutation = "Hello";
var greeting = salutation + ", World";

console.log(greeting);

console.log(`${salutation}, Mundo `);

console.log( `

${salutation}, 

    World


`);

console.log(`

${salutation}, 
  You
    Crazy       World

    How
  Are
      You  

`);


var place = "planet";
console.log(`

Greeting
Your
Crazy ${place}

How
They are
Your

`)

var x = 1;
var y = 2;
var ecuacion = `${x} + ${y} = ${x + y}`

console.log (ecuacion);

var message = `Its ${new Date().getHours()} Im sleepy`;

console.log(message);

var message2 = tag`It's ${new Date().getHours()} I'm ${""}`;

function tag( strings, ...values){
    console.log(strings)
    console.log(values);
    if(values[0] < 21 ){
        values[1] = "awake"
    }
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

console.log(message2);
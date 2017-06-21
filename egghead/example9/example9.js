/**
* Created by ISORTEGAH on 18/06/2017.
**/
var obj = {
  color: "blue"
}
console.log(obj.color);

var {color} = {
  color: "blue"
}
console.log(color);

var {color,position} = {
  color: "blue",
  name : "John",
  state : "New York",
  position: "Forward"
}
console.log(color);
console.log(position);

function generarObj(){
    return {
        color: "blue",
        name : "John",
        state : "New York",
        position: "Forward"
    }
}

var { name , state } = generarObj();
console.log();
console.log( name );
console.log( state );

console.log();
var { name:firstName , state:location } = generarObj();

console.log( firstName );
console.log( location );
console.log();
var [first,,,,fifth] = [ "red" , "yellow" , "green" , "blue" , "orange"]
console.log(first);
console.log(fifth);

console.log();
var people = [
  {
    "firstName": "Skyler",
    "lastName": "Carroll",
    "phone": "1-429-754-5027",
    "email": "Cras.vehicula.alique@diamProin.ca",
    "address": "P.O. Box 171, 1135 Feugiat St."
  },
  {
    "firstName": "Kylynn",
    "lastName": "Madden",
    "phone": "1-637-627-2810",
    "email": "mollis.Duis@ante.co.uk",
    "address": "993-6353 Aliquet, Street"
  },
]

people.forEach(({firstName})=> console.log(firstName))

var [,Kylynn] = people;

function logEmail({email}){
  console.log(email);
}
console.log();
logEmail(Kylynn)
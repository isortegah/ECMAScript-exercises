/**
* Created by ISORTEGAH on 04/06/2017.
**/
/*
Paso 1: 
function receive(complete){
  complete();
}

receive(function(){
  console.log("complete");
});*/

/**
 * Paso 2:
 * function receive(complete = function(){
  console.log("complete");
}){
  complete();
}

receive();
 */

/**
 * Paso 3:
 * function receive(complete = () => console.log("complete")){
  complete();
}
 */

let receive = (complete = () => console.log("complete")) => complete();

receive();
receive(()=>console.log('Hola Ivan'));

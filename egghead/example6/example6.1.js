/**
* Created by ISORTEGAH on 04/06/2017.
**/
var color = "red";
var speed = 10;
function go() {
  console.log("vroom");
}

var car = {color, speed, go};

car.go(); // "vroom"

/**
 * // ES6
var car = {
  color,
  speed,
  go(){
    console.log("vroom");
  }
};
 */

/**
 * // ES5
var car = {
  color,
  speed,
  go: function(){
    console.log("vroom");
  }
};
 */

/**
 * var car = {
  color,
  speed,
  ["go"]: function(){
    console.log("vroom");
  }
};
 */

/**
 * var drive = "go";
var car = {
  color,
  speed,
  [drive]: function(){
    console.log("vroom");
  }
};
 */
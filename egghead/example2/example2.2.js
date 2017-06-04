/**
* Created by ISORTEGAH on 04/06/2017.
**/
var fs = [];
for (var i = 0; i <10; i ++) {
  fs.push (function () {
    console.log (i);
  })
}

fs.forEach( function ( f ) {
  f();
})
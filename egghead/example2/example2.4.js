/**
* Created by ISORTEGAH on 04/06/2017.
**/
function varFunc(){
	var previus = 0;
	var current = 1;
	var i;
	var temp;

	for( i = 0 ; i < 5 ; i += 1) {
		temp = previus ;
		previus = current;
		current = temp + current;
		console.log( current );
	}
}

function letFunc() {
	let previus = 0;
	let current = 1;

	for( let i = 0 ; i < 5 ; i+= 1 ) {
		let temp = previus;
		previus = current;
		current = temp + current;
		console.log(current);
	}
}

console.log('varFunc')
varFunc();

console.log('\nletFunc')
letFunc();


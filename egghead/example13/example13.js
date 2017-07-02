function* greet(){
    console.log(`You called 'next()'`)
    yield "hello";
}

let greeter = greet();
console.log(greeter);
let next = greeter.next();
console.log(next);

let done = greeter.next();
console.log(done);
console.log("---------");

function* greet1(){
  console.log(`Generators are "lazy"`);
  yield "How";
  console.log(`I'm not called until the second next`);
  yield "are";
  console.log(`Call me before "you?"`);
  yield "you?";
  console.log(`Called when "done"`);
}

let greeter1 = greet1();
let greeter2 = greet1();
console.log(greeter1.next());
console.log(greeter1.next());
console.log(greeter1.next());
console.log(greeter1.next());
console.log('---------');
console.log('---------');
console.log(greeter2.next().value);
console.log(greeter2.next().value);
console.log(greeter2.next().value);


console.log("--------->");
let greeter3 = greet1();
for ( let word of greeter3) {
    console.log( word );
}

console.log("--------->>");
function* greet2(){
    let friendly = yield "How";
    friendly =  yield friendly + "are";
    yield friendly + "you?";
}

let greeter4 = greet2();
console.log(greeter4.next().value);
console.log(greeter4.next(" the heck ").value);
console.log(greeter4.next(" silly ol`").value);

console.log("--------->>>");
function* graph(){
    let x = 0;
    let y = 0;
    while(true){
        yield { x :x , y:y}
        x += 2;
        y += 1;
    }
}

let graphGenerator = graph();
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
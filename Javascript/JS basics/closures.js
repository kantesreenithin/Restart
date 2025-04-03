// function x(){
//     let a=10;
//     function y(){
//         console.log(a)
//     }
//     y();
// }
// x();

function x() {
  let a = 10;
  function y() {
      console.log(a);
  }
  return y; // Returning function 'y' instead of calling it
}

const closureFunction = x(); // 'x' executes and returns 'y', which remembers 'a'
closureFunction(); // Logs 10


// function x(){
//     //var will  refer to same spot in the memory
//     //let will create a new i every time the fun called (closures) (block scope)
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){console.log(i)},i*1000)
//     }
//     console.log("Namaste JS");
// }
// x();

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }
//   console.log("Namaste JS");
// }
// x();

// private counter
function counter(){
  var _counter=0;
  function add(increment){
    _counter+=increment;
  }
  function retrive(){
    return "Counter: "+_counter;
  }
  return {
    add,retrive,
  };
}
const c=counter();
c.add(5);
c.add(10);
console.log(c.retrive())
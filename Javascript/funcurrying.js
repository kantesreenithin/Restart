let multiply = function (x, y) {
  console.log(x * y);
};
let multiplyByThree = multiply.bind(this,2); //copy of multiply with first agrument as 3
multiplyByThree(5);
//create by bind func and pass arguments to it .


//by closures
let Multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo = Multiply(2); //copy of multiply with first agrument as 3
multiplyByTwo(5); 

let multiplyByFour = Multiply(4);
multiplyByFour(5);
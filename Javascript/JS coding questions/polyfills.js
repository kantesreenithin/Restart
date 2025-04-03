// polyfill for map filter reduce
//i and this can be removed
// Array.map((num,i,arr)=>{})
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};
const Arr = [1, 2, 3, 4];
const multiplyByTwo = Arr.myMap((num, i, arr) => {
  return num * 2;
});
console.log(multiplyByTwo);

//Array.filter(()=>{})
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};
const moreThanTwo = Arr.myFilter((num, i, arr) => {
  return num > 2;
});
console.log(moreThanTwo);

//Array.reduce((acc,cur,index,arr)=>{},initialValue)
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};
const sum = Arr.myReduce((acc, cur, i, arr) => {
  return acc + cur;
}, 0);
console.log(sum);

//polyfill for call apply bind

//call - method can use to call methods for diff objects take obj and args separately
let car = {
  color: "red",
  company: "ferrari",
};
function purchaseCar(currency,price){
  console.log(`I have purchased ${this.color}-${this.company} car for ${currency}${price}`);
}
Function.prototype.myCall=function(context={},...args){
  if(typeof this !== 'function'){
    throw new Error(this + "it's not callable");
  }
  context.fun=this;
  context.fun(...args)
};
purchaseCar.myCall(car,"$",500000000);

//apply --method can use to call for diff objects take obj and array of args as args

Function.prototype.myApply=function(context={},args=[]){
  if(typeof this !== 'function'){
    throw new Error(this+"it's not callable");
  }
  if(!Array.isArray(args)){
    throw new TypeError("create an array");
  }
  context.fun=this;
  context.fun(...args);
}
purchaseCar.myApply(car,["$",500000000]);

//bind - borrow a method from another object - creates a new function
Function.prototype.myBind=function(context={},...args){
  if(typeof this !== 'function'){
    throw new Error (this + 'cannot bound as it is not callable');
  }
  context.fun=this;
  return function(...newArgs){
    return context.fun(...args,...newArgs);
  }
};
const newFun=purchaseCar.myBind(car,"$",500000000);
console.log(newFun());

// const newFun=purchaseCar.myBind(car);
// console.log(newFun("$",500000000));

//closures in js 
//once
function once(func,context){
  let ran;
  return function(){
    if(func){
      ran=func.apply(context||this,arguments);
      func=null;
    }
    return ran;
  };
}
const hello=once((a,b)=>console.log("hello",a,b));
hello(1,2);
hello(1,2);
hello(1,2);

//memoize
function myMemoize(fun,context){
  const res={};
  return function(...args){
    var argsCache=JSON.stringify(...args);
    if(!res[argsCache]){
      res[argsCache]=fun.call(context||this,...args);
    }
    return res[argsCache];
  }
}

const clumsyProduct=(num1,num2)=>{
  return num1*num2;
}

const memoizedClumzyProduct=myMemoize(clumsyProduct);

console.time("first call");
console.log(memoizedClumzyProduct(2,2));
console.timeEnd("first call");

console.time("second call");
console.log(memoizedClumzyProduct(2,2));
console.timeEnd("second call");

//promise
// function PromisePolyFill(executer){
//   let onResolve,onReject,
//   isFulfilled=false,
//   isRejected=false,
//   isCalled=false,value;

//   function resolve(val){
//     isFulfilled=true;
//     value=val;
//     if(typeof onResolve === 'function'){
//       onResolve(val);
//       isCalled=true;
//     }
//   }
//   function reject(value){
//     isRejected=true;
//     value=val;
//     if(typeof onReject === 'function'){
//       onReject(val);
//       isCalled=true;
//     }
//   }

//   this.then=function(callback){
//     onResolve=callback;
//     if(isFulfilled && !isCalled){
//       isCalled=true;
//       onResolve(value);
//     }
//     return this;
//   }
//   this.catch=function(callback){
//     onReject=callback;
//     if(isRejected && !isCalled){
//       isCalled=true;
//       onReject(value);
//     }
//     return this;
//   }
//   executer(resolve,reject);
// }

// const examplePromise=new PromisePolyFill((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(2);
//   },1000)
// });
// examplePromise.then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.error(err);
// })

//promise
function PromisePolyFill(executer){
  let onResolve,onReject;
  function resolve(value){
    onResolve(value);
  }
  function reject(value){
    onReject(value);
  }
  this.then=function(callback){
    onResolve=callback;
    return this;
  }
  this.catch=function(callback){
    onReject=callback;
    return this;
  }
  executer(resolve,reject);
}

const examplePromise=new PromisePolyFill((resolve,reject)=>{
  setTimeout(()=>{
    resolve(2);
  },1000)
});
examplePromise.then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.error(err);
})


// debounce 
// function debounce(fn, delay) {
//   let timer;
//   return function (...args) {
//       clearTimeout(timer); // Clear the previous timer
//       timer = setTimeout(() => fn.apply(this, args), delay); // Set a new timer
//   };
// }
// function logMessage(message) {
//   console.log("Debounced:", message);
// }
// const debouncedLog = debounce(logMessage, 1000);
// debouncedLog("Hello");
// debouncedLog("Hello Again");  // Only this will be logged after 1 second
// debouncedLog("Hello check");


//throttle
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
      const now = Date.now();
      if (now - lastCall >= delay) {
          lastCall = now;
          fn.apply(this, args);
      }
  };
}
function logMessage(message) {
  console.log("Throttled:", message);
}
const throttledLog = throttle(logMessage, 1000);
throttledLog("Hello");
throttledLog("Hello Again");  // Ignored if called within 1 second
setTimeout(() => throttledLog("After 1s"), 1000); // Executes after 1 second



function x(){  //CB fun
    console.log("x")
}

function y(x){ //HOF
    x();
}

const radius=[1 , 2 ,3 ,4 ];

const area= function (radius){
    return Math.PI * radius * radius;
}

const circumference= function (radius){
    return 2 * Math.PI * radius;
}

const diameter= function (radius){
    return 2  * radius;
}

const calculate=function (arr,logic){
    const output=[];
    for(let i=0;i<arr.length;i++){
         output.push(logic(arr[i]));
    }
    return output;
}
console.log(radius.map(area)); // same as above fun it creates a new array and does the logic for every ele in array and return an array
console.log(calculate(radius,area));

// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));


//polyfill for map
Array.prototype.cal=function (logic){
    const output=[];
    for(let i=0;i<this.length;i++){
         output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.cal(area));
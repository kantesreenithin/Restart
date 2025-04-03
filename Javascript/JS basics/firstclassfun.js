//fun statements aka fun declarations
function a(){
    console.log("a");
}

//fun expressions
var a=function(){
    console.log("a");
}

//anonymous functions
function (){
    console.log("a");
}

//named fun
var a=function xyz(){
    console.log("a");
}
// xyz(); this gives reference error not defined

// first class fun
// used as a value, can be passed as a parameter,can be return from fun
var a=function (param){
    return function xyz(){
        console.log("xyz")
    }
}
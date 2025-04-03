const btn=document.querySelector(".increment_btn");
const btnPress=document.querySelector(".increment_pressed");
const count=document.querySelector(".increment_count");

var pressedCount=0;
var triggerCount=0;

// const debounceCOunt=_.debounce(()=>{
//     count.innerHTML=++triggerCount;
// },800);
// btn.addEventListener("click",()=>{
//     btnPress.innerHTML=++pressedCount;
//     debounceCOunt();
// });

const throttledCount=_.throttle(()=>{
    count.innerHTML=++triggerCount;
},800);
btn.addEventListener("click",()=>{
    btnPress.innerHTML=++pressedCount;
    throttledCount();
});

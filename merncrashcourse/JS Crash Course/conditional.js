function greet(time) {
  if (time < 12) {
    console.log("Good Morning");
  } else if (time > 11 && time < 20) {
    console.log("good afternoon");
  } else {
    console.log("good evening");
  }
}
let t = 12;
greet(t);

switch (new Date().getDay()) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  default:
    break;
}

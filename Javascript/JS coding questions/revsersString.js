function reverseString(str) {
  return str.split("").reverse().join("");
}
let str = "sample";
console.log(reverseString(str));

function reversWithFor(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reversWithFor(str));

function recursiveRev(str) {
  if (str === "") return "";
  else return recursiveRev(str.substr(1)) + str.charAt(0);
}
console.log(recursiveRev(str));

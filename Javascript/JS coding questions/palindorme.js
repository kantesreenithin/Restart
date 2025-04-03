function checkPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

let str = "madam";
console.log(checkPalindrome(str));

function longestInString(str) {
  const words = str.split(" ");
  let longest = " ";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(longestInString("i am Sreenithin"));

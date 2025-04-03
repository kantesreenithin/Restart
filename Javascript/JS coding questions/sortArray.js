let arr = [2, 5, 6, 3, 7, 9];
console.log(arr.sort());

console.log(
  arr.sort((a, b) => {
    return b - a;
  })
);

function findLargest(arr) {
  let res = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > res) {
      res = arr[i];
    }
  }
  return res;
}
console.log(findLargest([1, 2, 3, 4, 5]));

const arr = [25, 42, 84, 36, 74, 95, 100, 235];
console.log(Math.max(...arr));

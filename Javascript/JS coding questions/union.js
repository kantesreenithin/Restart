function findUnion(arr1, arr2) {
  let newArr = new Set([...arr1, ...arr2]);
  return newArr;
}
console.log(findUnion([1, 2, 3], [2, 3, 4, 5]));

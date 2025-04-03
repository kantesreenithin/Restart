function findIntersection(arr1, arr2) {
  let set = new Set(arr2);
  return arr1.filter((value) => set.has(value));
}
console.log(findIntersection([1,2,3,4], [3,4,5,6]));

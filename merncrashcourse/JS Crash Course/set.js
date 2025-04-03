const letters = new Set(["a", "b", "c"]);
console.log(letters);
letters.add("c");
letters.add("d");
console.log(letters);

for (let x of letters) {
  console.log(x);
}

console.log(letters.has("b"));
letters.forEach(function (x) {
  console.log(x);
});
console.log(letters.values()); //iterator object
console.log(letters.keys());//iterator object

console.log(letters.entries());

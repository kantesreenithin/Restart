const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits);
fruits.set("grapes", 400);
console.log(fruits);

console.log(fruits.get("apples"));
console.log(typeof fruits);

// Map.size();
// Map.delete();
// Map.clear();
// Map.has();
// Map.forEach();
// Map.entries();
// Map.keys();
// Map.values();
// Map.groupBy();

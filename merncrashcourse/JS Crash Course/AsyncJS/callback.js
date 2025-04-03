function greet(name, callback) {
  console.log("hello, " + name);
  callback();
}
function sayGoodMorn() {
  console.log("Good Morning");
}
greet("Sreenithin", sayGoodMorn);

//settimeout
function Greet() {
  console.log("Hello , How are you!");
}
// setTimeout(Greet, 3000);

//A more practical example is using callbacks
// with asynchronous operations like fetching data:
function fetchData(callback) {
  console.log("Fetching Data");
  setTimeout(() => {
    const user = { name: "Sreenithin", age: 21 };
    callback(user);
  }, 2000);
}
function displayData(data) {
  console.log("User Data:", data);
}
fetchData(displayData);

//--example
function greet(name) {
  console.log(`hello ${name}`);
}
function greetSreenithin(greertFn) {
  const name = "Sreenithin";
  greertFn(name);
}
greetSreenithin(greet);

//exapmle to name HOF
function greet(name) {
  console.log(`hello ${name}`);
}
function HOF(callback) {
  const name = "Sreenithin";
  callback(name);
}
HOF(greet);

// why-
// syn and asyn
//syn - immediately executed ex:map,sort,filter
//asyn- after sometime executed ex:settimeout,settimeinterval

setTimeout(greet, 2000, "Sreenithin");
// event,data fetching

//callback hell example

// Callback Hell happens when multiple asynchronous functions
// are nested inside each other,
//  making the code hard to read and maintain.

// Scenario:
// Imagine fetching user details, then fetching their orders,
// and then fetching the details of a specific order—
// all using callbacks.

function getUser(callback) {
  setTimeout(() => {
    console.log("Fetched user");
    callback({ id: 1, name: "Sreenithin" });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    console.log(`Fetched order details for user ${userId}`);
    callback([
      { orderId: 1, item: "phone" },
      { orderId: 2, item: "laptop" },
    ]);
  }, 1000);
}

function getOrdersDetails(orderId, callback) {
  setTimeout(() => {
    console.log(`Fetched details for order ${orderId}`);
    callback({ orderId, item: "phone", price: 20000 });
  }, 1000);
}

//callback hell
getUser((user) => {
  getOrders(user.id, (orders) => {
    getOrdersDetails(orders[0].orderId, (orderDetails) => {
      console.log("Final Order Details:", orderDetails);
    });
  });
});

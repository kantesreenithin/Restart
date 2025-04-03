//asyn - makes a function retuen a promise
//await - males a function wait for promise

// async/await is a modern way to handle
//  asynchronous operations in JavaScript.
// It makes code more readable and avoids
// callback hell or chained .then() calls in Promises.

// async → Declares a function as asynchronous, making it return a Promise.
// await → Pauses execution until a Promise resolves or rejects, making it behave synchronously inside an async function.

function fetchUserData() {
  return new Promise((resolve, reject) => {
    console.log("Fecthing user data");
    setTimeout(() => {
      let success = true;
      //   let success = false;
      if (success) {
        resolve("user:Sreenithin");
      } else {
        reject("Failed to fetch");
      }
    }, 2000);
  });
}

async function getUserData() {
  try {
    const user = await fetchUserData();
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

// getUserData();

//example
async function greet() {
  return "Hello";
}
// console.log(greet());
// greet().then((value) => console.log(value));

//same as
// function greet() {
//   return Promise.resolve("Hello");
// }

//await - pauses the func and wait for settleing the promise
async function greet() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 2000);
  });
  let result = await promise;
  console.log(result);
}
// greet();

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched User");
      resolve({ id: 1, name: "Sreenithin" });
    }, 1000);
  });
}
function getOrders(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetched orders for user ${userId} `);
      resolve([
        { orderId: 1, item: "phone" },
        { orderId: 2, item: "laptop" },
      ]);
    }, 1000);
  });
}
function getOrderDetails(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`orders details for ${orderId}`);
      resolve({ orderId, item: "laptop", price: 2000 });
      // reject("data not found")
    }, 1000);
  });
}
async function fetchData() {
  try {
    const user = await getUser();
    const orders = await getOrders(user.id);
    const orderDeatils = await getOrderDetails(orders[0].orderId);
    console.log("Full Details", orderDeatils);
  } catch (e) {
    console.log("Error", e);
  }
}
fetchData();

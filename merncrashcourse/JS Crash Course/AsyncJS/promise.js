let myPromise = new Promise((resolve, reject) => {
  let x = 0;
  if (x == 0) {
    resolve("x is zero");
  } else {
    reject("err x is not zero");
  }
});
// myPromise.then(
//   (val) => {
//     console.log(val);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
// console.log(myPromise);

//settimeout example
let newprom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hii, I am resolved");
    // reject("Error");
  }, 3000);
});
// newprom
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("executing finally");
//   });

//callbackhell -problem resolved with promise chaining

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched User");
      resolve({ id: 1, name: "Sreenithin" });
    }, 1000);
  });
}
function getOrders(userId) {
  return new Promise((resolve) => {
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
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`orders details for ${orderId}`);
      resolve({ orderId, item: "laptop", price: 2000 });
    }, 1000);
  });
}

// getUser()
//   .then((user) => getOrders(user.id))
//   .then((orders) => getOrderDetails(orders[0].orderId))
//   .then((orderdetails) => console.log("final orders details:", orderdetails))
//   .catch((err) => console.log(err));

// promise - methods and props
//all,allsettled,any,race

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 Success"), 2000);
});

//promise.all() - takes arr of promises,if all succed return arr of success values
//if any promise get rejected then returns err and not wait for any other promise

// Promise.all([p1, p2, p3]).then((res) => console.log(res));

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P4 Success"), 2000);
  // setTimeout(() => reject("P4 failed"), 2000);
});
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P5 Success"), 1000);
  // setTimeout(() => reject("P5 Failed"), 1000);
});
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P6 Failed"), 3000);
});
// Promise.all([p4, p5, p6])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.allSettled - waits for all promises to get settle and
// then after all promise to get completed (irr of S/R)
// it give arr of result

// Promise.allSettled([p1, p2, p3]).then((res) => console.log(res));
// Promise.allSettled([p4, p5, p6])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//race-take the array of promises and return res of first settles val(s/f)
//if first promise get rejected then return the err val
//its like race - if fist p success the o/p - success val.if fail then o/p is err val

// Promise.race([p1, p2, p3]).then((res) => console.log(res));
// Promise.race([p4, p5, p6])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//promis.any - check for the  first success promise if all fail return agg err
// Promise.any([p1, p2, p3]).then((res) => console.log(res));
// Promise.any([p4, p5, p6])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

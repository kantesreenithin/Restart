//promise.all()

//promise all success case:

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Success"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 Success"), 2000);
// });
// Promise.all([p1, p2, p3]).then((res) => console.log(res));

// promise fail case:

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
// //   setTimeout(() => resolve("P2 success"), 1000);
//     setTimeout(() => reject("P2 Fail"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   //   setTimeout(() => resolve("P3 Success"), 2000);
//   setTimeout(() => reject("P3 Fail"), 2000);
// });
// Promise.all([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err)); //after 1 sec

//promise.allSettled - array of objects

//all success case
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Success"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 Success"), 2000);
// });
// Promise.allSettled([p1, p2, p3]).then((res) => console.log(res));

//fail case
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Success"), 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2 Fail"), 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 Success"), 2000);
//   });
//   Promise.allSettled([p1, p2, p3]).then((res) => console.log(res));

//promise.race() - first settled promise value is returned

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Success"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 Success"), 2000);
// });
// Promise.race([p1, p2, p3]).then((res) => console.log(res));

//fail case
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Success"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("P3 Fail"), 2000);
// });
// Promise.race([p1, p2, p3]).then((res) => console.log(res));

//promise.any() - return the first success settled promise
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("P2 Fail"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("P3 Fail"), 2000);
// });
// Promise.any([p1, p2, p3]).then((res) => console.log(res));

//all failed case
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P1 Fail"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P2 Fail"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P3 Fail"), 2000);
});
Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);//have an object 
    console.log(err.errors);//gives arr of errors
  });
//AggregateError: All promises were rejected

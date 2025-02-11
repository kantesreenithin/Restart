//promises help in asynchronous

//using callback - issue inversion control,pyramid of dome
const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

// by promises

const promise = createOrder(cart);

//{data:undefined}
//return promise (empty obj) and filled after async time in further
//{data:orderDetails}
//attach cb fun to promise obj
promise.then(function (orderId) {
  proceedToPayment(orderId);
});

const GITHUB_API = "https://api.github.com/users/kantesreenithin";
const user = fetch(GITHUB_API);
console.log(user); //promise obj
user.then(function (data) {
  console.log(data);
});

//data should be passed over the promises
// createOrder(cart)
//   .then((orderId) => proceedToPayment(orderId))
//   .then((paymentInfo) => showOrderSummary(paymentInfo))
//   .then((paymentInfo) => updateWalletBalance(paymentInfo));

//creating a promise

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((summary) => updateWalletBalance(summary))
  .catch((error) =>console.log(error.message));

function createOrder(cart){
    return new Promise((resolve, reject) =>{
        if(!validateCart(cart)){
            reject("Invalid cart");
        }
        const orderId="1234";
        resolve(orderId);
    });
}
function validateCart(cart){
    return true;
}
function proceedToPayment(orderId){
    return new Promise((resolve, reject) =>{
        const paymentInfo="success";
        resolve(" proceeded to payment.", paymentInfo);
    });
}
function showOrderSummary(paymentInfo){
    return new Promise((resolve, reject) =>{
        resolve(paymentInfo);
    });
}
function updateWalletBalance(paymentInfo){
    return new Promise((resolve, reject) =>{
        resolve(paymentInfo);
    });
}
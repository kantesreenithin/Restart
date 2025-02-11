const cart = ["shoes", "pants", "kurta"];

createOrder(cart) //success
  .then(function (orderId) {
    console.log(orderId);
    //   console.log(promise);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (PaymentInfo) {
    console.log(PaymentInfo);
  })
  //reject
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (PaymentInfo) {
    console.log("no matter what happens the then sts after catch will executed");
  });

  //nomatter what happens the then sts after catch will executed.

// producer - resolve promise is accepted
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //create order
    //validate cart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    //logic for createorder
    const orderId = "1234";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}

//rejecting the promise
// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     //create order
//     //validate cart
//     //orderId
//     if (!validateCart(cart)) {
//       const err = new Error("cart is not valid");
//       reject(err);
//     }
//     //logic for createorder
//     const orderId = "1234";
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return pr;
// }

// function validateCart(cart) {
//   return false;
// }


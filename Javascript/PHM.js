const cart = [
  {
    item: "apple",
    price: "120",
  },
  {
    item: "apple",
    price: "120",
  },
  {
    item: "apple",
    price: "120",
  },
];
let walletAmount = 2000;

createOrder(cart)
  .then(function (orderId) {
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (balance) {
    return updateWallet(balance);
  })
  .then(function (resBalance) {
    console.log(resBalance.balance);
  })
  .catch(function (error) {
    console.log(error.message);
  });

function createOrder(orderId) {
  return new Promise(function (resolve, reject) {
    if (!validateCart) {
      reject("Invalid cart");
    }
    let orderId = "1234";
    resolve(orderId);
  });
}
function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (orderId) {
      resolve({
        status: true,
        message: "Payment Success",
      });
    } else {
      reject("Invalid payment");
    }
  });
}
function showOrderSummary(paymentInfo) {
  return new Promise(function (resolve, reject) {
    if (paymentInfo.status) {
      resolve({
        status: "success",
        order: "cart",
      });
    } else {
      reject("something went wrong");
    }
  });
}
function updateWallet(history) {
  return new Promise(function (resolve, reject) {
    if (history.status == "success") {
      let amount = 500;
      walletAmount = walletAmount - amount;
      resolve({
        balance: walletAmount,
        message: "Wallet updated successfully",
      });
    } else {
      reject("something went wrong");
    }
  });
}
function validateCart(cart) {
  return true;
}

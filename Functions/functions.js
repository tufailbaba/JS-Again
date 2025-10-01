function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
  console.log(test);
}

let teaOrder = makeTea("Lemon Tea");
// console.log(teaOrder);

function OrderTea(TeaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder();
}
let orderConfirmation = OrderTea ("chai")
// console.log(orderConfirmation);

const calculateTotal = (price, quantity) => price * quantity

let totalCost = calculateTotal(499 * 100)
function MakeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
  console.log(test);
}

let teaOrder = MakeTea("Lemon Tea");
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

function makeTea ( typeOfTea){
return `makeTea : ${typeOfTea}`;

}
function processTeaOrder (teafunction){
    return teafunction('earl grey' )
}

let order = processTeaOrder(makeTea)
console.log(order);

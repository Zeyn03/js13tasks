// Task 6: The shop stores the following information about customers:
// - Name;
// - Age;
// - The number of orders;
// - Amounts of orders.
// The store offers a discount to regular customers and customers over 60 years of age.
//  A customer is considered a regular if he or she made 4 or more orders with a total amount of 100 AZN or more.
//  Write a function that will receive customer’s data as input and return information whether the customer receives
//   a discount or not.
let customerName = document.getElementById("customerName");
let customerAge = document.getElementById("customerAge");
let customerOrdersNum = document.getElementById("customerOrdersNum");
let customerOrdersAmount = document.getElementById("customerOrdersAmount");
const discountDiv = document.getElementById("discount");
const discountP = document.createElement("p");
discountDiv.appendChild(discountP);


function defineDiscount( age, orderSum, orderAmount) {
    
  if (age.value >= 60 || (orderSum.value >= 4 || orderAmount.value >= 100)) {
    discountP.innerText = "you receive discount";
  } else {
    discountP.innerText = "sorry,you cannot receive discount";
  };
  customerName.value = "";
  customerAge.value = "";
  customerOrdersNum.value = "";
  customerOrdersAmount.value = "";
  
}

function callDiscount() {
  defineDiscount(
    customerAge,
    customerOrdersNum,
    customerOrdersAmount
  );
}

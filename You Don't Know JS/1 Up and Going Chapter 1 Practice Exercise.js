const PHONE_PRICE = 299.99;
const ACCESSORY_PRICE = 15.99;
const TAX_RATE = .12;

var spending_threshold = prompt('How Much Would You Like To Spend?');
var bank_account_balance = prompt("What's Your Bank Account Balance?");

//calculate tax on purchase
function taxAmount(price) {
  return price * TAX_RATE;
}

var total_price = 0;

//keep buying phones until you have money
while (total_price < Number(bank_account_balance)) {
  total_price += PHONE_PRICE;
  //check if you want to buy an accessory
  if (Number(spending_threshold) > total_price) {
    total_price += ACCESSORY_PRICE;
  }
}

total_price += taxAmount(total_price);

//round to two decimals with a dollar sign
function formatAmount(price) {
  return "$" + String(price.toFixed(2));
}

//inform user
console.log("Your Total Price Is " + formatAmount(total_price));


//check if you can afford it
if (total_price > bank_account_balance) {
  console.log("Sorry, Can't Afford It. Go Earn More Money");
}
else {
  console.log("Happy Purchase")
}

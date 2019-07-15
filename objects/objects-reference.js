let myAccount = {
  name: 'Andrew Mead',
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
}

// addIncome
let addIncome = function (account, amount) {
  account.income = account.income + amount;
}

// resetAccount
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
}

// getAccountSummary: print summary of account
// Account for Andrew has $900. $1000 in income. $100 in expenses.
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. ${account.income} in income. $${account.expenses} in expenses.`;
}

addExpense(myAccount, 2.50);
addIncome(myAccount, 1000);
resetAccount(myAccount);
console.log(myAccount);

console.log(getAccountSummary(myAccount));
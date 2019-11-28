let calculateChange = function(total, cash) {
  // Your code here
  const validDenomInCents = [
    ["twentyDollar", 2000], ["tenDollar", 1000], ["fiveDollar", 500], ["twoDollar", 200], ["oneDollar", 100],
    ["quarter", 25], ["dime", 10], ["nickel", 5], ["penny", 1]
  ];
  let changeLeft = cash - total;
  let changeGiven = {};

  if (changeLeft < 0) {
    return "You haven't paid for the entire bill!";
  }

  for (let i = 0; i < validDenomInCents.length; i++) {
    if (changeLeft > validDenomInCents[i][1]) {
      changeGiven[validDenomInCents[i][0]] = Math.floor(changeLeft / validDenomInCents[i][1]);
      changeLeft = changeLeft % validDenomInCents[i][1];
    }
  }
  return changeGiven;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
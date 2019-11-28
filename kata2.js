const conditionalSum = function(values, condition) {
  // Your code here
  let sum = 0;

  for (let i = 0; i < values.length; i++) {
    let isEven = values[i] % 2 === 0;
    if (condition === "even" && isEven) {
      sum += values[i];
    } else if (condition === "odd" && !isEven) {
      sum += values[i];
    }
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
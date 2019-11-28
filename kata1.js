let sumLargestNumbers = function(data) {
  // Put your solution here

  let largest = data[0];
  let second = null;
  for (let i = 1; i < data.length; i++) {
    if (data[i] > largest) {
      second = largest;
      largest = data[i];
    } else if (i === 1) {
      second = data[i];
    } else if (data[i] > second) {
      second = data[i];
    }
  }
  return largest + second;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([2]));
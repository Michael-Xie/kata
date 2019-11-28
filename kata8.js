const multiplicationTable = function(maxValue) {
  // Your code here
  let multTable = "";

  if (maxValue < 0) {
    return "no negative multiplication!";
  }

  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      let multiple = j * i;
      multTable += multiple + " ";
    }
    multTable += "\n";
  }
  return multTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
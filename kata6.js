let repeatNumbers = function(data) {
  // Put your solution here
  let repeatStr = "";
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      repeatStr += data[i][0];
    }
    if (i !== data.length - 1) {
      repeatStr += ", ";
    }
  }

  return repeatStr;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
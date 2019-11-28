const blocksAway = function(directions) {
  // Put your solution here
  let finalCoord = {};
  for (let i = 0; i < directions.length - 1; i += 2) {

    // prev != curr -> positive value
    // prev = curr -> negative value
    // initial direction is positive
    if (i === 0) {
      finalCoord.east = directions[i + 1];
      finalCoord.north = 0;
    } else if (i % 4 === 0) {
      if (directions[i - 2] !== undefined && directions[i] === directions[i - 2]) {
        finalCoord.east += directions[i + 1] * -1;
      } else {
        finalCoord.east += directions[i + 1];
      }
    } else if (i % 2 === 0) {
      if (directions[i - 2] !== undefined && directions[i] === directions[i - 2]) {
        finalCoord.north += directions[i + 1] * -1;
      } else {
        finalCoord.north += directions[i + 1];
      }
    }
  }
  return finalCoord;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
const squareCode = function(message) {
  // Put your solution here
  let noSpaceMsg = message.replace(/\s+/g, '');
  let squareDim = Math.ceil(Math.sqrt(noSpaceMsg.length));
  let squareMsg = "";

  for (let i = 0; i < squareDim; i++) {
    for (let j = 0; j < squareDim; j++) {
      let movement = i + j * squareDim;
      if (noSpaceMsg[movement] !== undefined) {
        squareMsg += noSpaceMsg[movement];
      }
    }
    squareMsg += " ";
  }
  return squareMsg;

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

//chi
//llo
//ut
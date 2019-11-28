const generateBoard = function(whiteQueen, blackQueen) {
  const boardDim = 8;
  let chessboard = [];

  for (let i = 0; i < boardDim; i++) {
    let row = [];
    for (let j = 0; j < boardDim; j++) {
      if (i === whiteQueen[0] && j === whiteQueen[1] || i === blackQueen[0] && j === blackQueen[1]) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    chessboard.push(row);
  }
  return chessboard;
};

const queenThreat = function(chessboard) {
  let queens = [];
  for (let i = 0; i < chessboard.length; i++) {
    for (let j = 0; j < chessboard[i].length; j++) {
      if (chessboard[i][j] === 1) {
        queens.push([i, j]);
      }
    }
  }

  let queen1 = queens[0];
  let queen2 = queens[1];
  // will intersect when the queens are on the same row or column
  // will intersect if their diagonals intersect

  //y = mx+b
  //m = -1 or 1
  //b = y - mx
  let slope = [1, -1];
  let base = [queen1[1] - slope[0] * queen1[0], queen1[1] - slope[1] * queen1[0]];

  if (queen1[0] === queen2[0] || queen1[1] === queen2[1]) {
    return true;
  } else if (queen2[1] === slope[0] * queen2[0] + base[0] || queen2[1] === slope[1] * queen2[0] + base[1]) {
    return true;
  } else {
    return false;
  }
};
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
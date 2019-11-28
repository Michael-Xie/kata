let camelCase = function(input) {
  // Your code here
  let wordList = input.trim().split(' ');
  let camelString = wordList[0];

  wordList = wordList.splice(1, wordList.length);
  wordList = wordList.map(str => str[0].toUpperCase() + str.slice(1, str.length));

  camelString += wordList.length > 0 ? wordList.reduce((acc, curr) => acc + curr) : "";
  return camelString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase(""));

let camelCase = function(input) {
  // Your code here
  let wordList = input.trim().split(/\s+/);
  let camelString = wordList[0];

  wordList = wordList.splice(1, wordList.length);
  wordList = wordList.map(str => str[0].toUpperCase() + str.slice(1, str.length));

  camelString += wordList.length > 0 ? wordList.reduce((acc, curr) => acc + curr) : "";
  return camelString;
};

let pascalCase = function(input) {
  let wordList = input.trim().split(/\s+/);
  let pascalString = "";

  wordList = wordList.map(str => str[0].toUpperCase() + str.slice(1, str.length));
  pascalString = wordList.reduce((acc, curr) => acc + curr);

  return pascalString;
};

let vowelCase = function(input) {
  const vowel = "aeiou";
  let newStr = "";
  for (let i in input) {
    if (vowel.indexOf(input[i].toLowerCase()) !== -1) {
      newStr += input[i].toUpperCase();
    } else {
      newStr += input[i].toLowerCase();
    }
  }
  return newStr;
};

let consonantCase = function(input) {
  const vowel = "aeiou";
  let newStr = "";
  for (let i in input) {
    if (vowel.indexOf(input[i].toLowerCase()) === -1) {
      newStr += input[i].toUpperCase();
    } else {
      newStr += input[i].toLowerCase();
    }
  }
  return newStr;
};

let titleCase = function(input) {
  const exceptions = ["the", "and", "or", "but"];
  let wordList = input.trim().split(/\s+/);

  let newStr = "";
  //always captilize first letter of first word
  //captitalize each word except conjunctions, short propositions and articles are lower case
  for (let i = 0; i < wordList.length; i++) {
    if (i === 0 && wordList[i][0].match(/[a-z]/i) !== null) {
      newStr += wordList[i][0].toUpperCase() + wordList[i].slice(1, wordList[i].length);
    } else if (wordList[i][0].match(/[a-z]/i) !== null && exceptions.indexOf(wordList[i].toLowerCase()) === -1) {
      newStr += wordList[i][0].toUpperCase() + wordList[i].slice(1, wordList[i].length);
    } else {
      newStr += wordList[i];
    }
    newStr += " ";
  }

  return newStr;
};

let snakeCase = function(input) {
  let wordList = input.trim().split(/\s+/);
  return wordList.join("_");
};

let kebabCase = function(input) {
  let wordList = input.trim().split(/\s+/);
  return wordList.join("-");
};

let upperCase = function(input) {
  return input.toUpperCase();
};

let lowerCase = function(input) {
  return input.toLowerCase();
};

const makeCase = function(input, cases) {
  // Put your solution here
  let caseStr = input;

  const casesFcn = [
    ["camel", camelCase], ["pascal", pascalCase], ["snake", snakeCase], ["kebab", kebabCase], ["title", titleCase],
    ["vowel", vowelCase], ["consonant", consonantCase],
    ["upper", upperCase], ["lower", lowerCase]
  ];

  if (typeof (cases) === "string") {
    cases = [cases];
  }
  //need to be in order of functions applied and not by order specified by user
  for (let i = 0; i < casesFcn.length; i++) {
    if (cases.indexOf(casesFcn[i][0]) !== -1) {
      caseStr = casesFcn[i][1](caseStr);
    }
  }
  return caseStr;

};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

console.log("\n\n");
console.log(pascalCase("this is   a string"));
console.log(vowelCase("this is a string"));
console.log(consonantCase("this is a string"));
console.log(titleCase("the fish today are the best!"));
console.log(snakeCase("this is a strange case  zzz"));
console.log(kebabCase("this is a strange case  zzz"));

/* camel, pascal, snake, kebab, title
vowel, consonant
upper, lower */
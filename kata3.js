let numberOfVowels = function(data) {
  // Put your solution here
  const vowels = "aeiou";
  let vowelCount = 0;
  for (let i = 0; i < data.length; i++) {
    if (vowels.indexOf(data[i].toLowerCase()) !== -1) {
      vowelCount++;
    }
  }

  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
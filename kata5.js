const urlEncode = function(text) {
  // Put your solution here
  const encodeSpace = "%20";
  let encodedStr = "";
  let trimmedText = text.trim();

  for (const i in trimmedText) {
    if (trimmedText[i] === " ") {
      encodedStr += encodeSpace;
    } else {
      encodedStr += trimmedText[i];
    }
  }

  return encodedStr;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
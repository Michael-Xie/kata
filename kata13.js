const urlDecode = function(text) {
  // Put your solution here
  let keyValues = text.split("&");
  let jsObj = {};

  for (let i = 0; i < keyValues.length; i++) {
    let keyValue = keyValues[i].split("=");
    let key = keyValue[0];
    let value = keyValue[1];
    value = value.replace(/%20/g, " ");
    jsObj[key] = value;
  }
  return jsObj;

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
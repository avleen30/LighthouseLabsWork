function charPosition (string) {
  var newObj = {

  };

  newString = string.split('');

  for (i = 0; i < newString.length; i++) {
    if (newString[i] in newObj) {
      newObj[newString[i]] += " "
      newObj[newString[i]] += String(i)
    } else {
      newObj[newString[i]] = String(i)
    }
  }
return newObj
}

console.log(charPosition("lighthouse in the house"))
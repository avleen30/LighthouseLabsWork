// var password = process.argv.splice(2)[0];

function obfuscate(password)
{
  var split = password.toLowerCase().split("");
  for (var i = 0 ; i <= password.length ; i++)
  {
    if (split[i] === "a")
    {
      split[i] = "4";
    }
    else if (split[i] === "e")
    {
      split[i] = "3";
    }
    else if (split[i] === "o")
    {
      split[i] = "0";
    }
    else if (split[i] === "l")
    {
      split[i] = "1";
    }
  else {
      split[i] = split[i];
    }
  }
  return split.join("");

}

console.log(encryptingPasswords(split));
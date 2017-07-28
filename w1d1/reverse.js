var string = process.argv.splice(2);
var reverseString =[];

for (var i=string.length-1; i>=0; i--)
{
 console.log(string[i]);
 reverseString.push(string[i]);
}
console.log(reverseString.join(""));
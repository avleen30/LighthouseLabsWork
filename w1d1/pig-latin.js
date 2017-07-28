//node pig-latin.js pig latin
//igpay atinlay

//node pig-latin.js this is all just gibberish
//istay siay llaay ustjay ibberishgay

var originalWords = process.argv.slice(2); //use only the inputs
var pigLatinWords = []; //create empty array

for (var i = 0; i < originalWords.length; i++) { //look at each word
  pigLatinWords.push(translateToPigLatin(originalWords[i])); //
}

console.log(pigLatinWords.join(' '));//converts array into string

function translateToPigLatin(word) { //defining function to break up the word, add 1st to end and ay to end
  return word.slice(1, word.length) + word[0] + "ay";
}

var wordArray = ["ASDF", "BLAH", "Oh! ", "Hi ", "There!"];
// var stringResult = '';  // had to have a variable set as an empty string so that the output would log each array item into the string.
// stringResult is a global variable
var secondwordArray = ["zombie", "taco", 'conphident', 'fi', 'phi', 'fo', 'fum'];

function putAllOfTheWordsTogether(stringArray, startingIndex) {
  var stringResult = '';
  for (var i = startingIndex; i < stringArray.length; i++) {  // he used a different world other than the name of his array
    // console.log(stringResult);
    // var stringResult = '';
    stringResult = stringResult + stringArray[i] + ' ';  // this would replace the array item and in the end, only log out the last array item
    // add a word to the stringResult
    // console.log(stringResult);
    // console.log(stringResult);
    // return stringResult;
  }
  return stringResult;
  // console.log(putAllOfTheWordsTogether(2));
}

console.log(putAllOfTheWordsTogether(wordArray,2));
// putAllOfTheWordsTogether(1);

var alphabetString = "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
  "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
  "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";

var dictionary = {};
alphabetString.split(";").forEach(value => {
  dictionary[value.split("=")[0]] = value.split("=")[1];
});

var morseCodeToChar = function (morseCode) {
  return Object.keys(dictionary).find(key => dictionary[key] === morseCode);
}

var charToMorseCode = function (letter) {
  if (typeof letter === 'string' && isNaN(letter) && letter.length === 1) {
    return dictionary[letter];
  }
}
y
var convertToMorse = function (word) {
  var morseCode = "";
  word.split('').forEach(char => {
    morseCode += ' ' + charToMorseCode(char);
  });
  return morseCode;
}

console.log(convertToMorse("acdas"))
console.log(charToMorseCode("b"))
console.log(morseCodeToChar("..."));
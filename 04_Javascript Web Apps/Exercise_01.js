var alphabetString = "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;"+
		"m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;"+
    "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";
var dictionary = {};
alphabetString.split(";").forEach(value => {
  dictionary[ value.split("=")[0]] =  value.split("=")[1];
});

var charToMorseCode = function(letter){
  var morseCode = "";
  letter.split('').forEach(char => {
    morseCode += ' ' + dictionary[char];
  });
  return morseCode;
}
 
console.log(charToMorseCode("acdas"))
console.log(charToMorseCode("b"))

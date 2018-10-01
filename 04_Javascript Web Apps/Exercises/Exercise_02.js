function Char(value, string) {
  this.value = value;
  this.string = string;
}

function Font(name, chars) {
  this.name = name;
  this.chars = chars;
  this.alphabet = Object.create(null);

  chars.forEach(function (item, index) {
    this.alphabet[item.value] = item;
  }, this);
}

Font.prototype.render = function (text) {
  var line = "";
  for (var i = 0; i < text.length; i++) {
    var c = text.charAt(i);
    if (this.alphabet[c]) {
      line += this.alphabet[c].string; //hier mit .string da es sich um ein char object handelt
    } else {
      line += c;
    }
  }
  return line;
}

Font.prototype.write = function (text, to) {
  to = to || console.log;
  to(this.render(text));
}

var alphabetString = "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
  "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
  "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";

var chars = {}
var dictionary = {};
alphabetString.split(";").forEach(value => {
  var split = value.split("=");
  var char = new Char(split[0], split[1]);
  chars.push(char);
});

var morseFont = new Font("morseFont", dictionary);
morseFont.render = function (text) {
  var line = "";
  for (var i = 0; i < text.length; i++) {
    var c = text.charAt(i);
    if (this.alphabet[c]) {
      line += this.alphabet[c].string + "/"; //hier mit .string da es sich um ein char object handelt
    } else {
      line += "-!-";
    }
  }
  return line;
}
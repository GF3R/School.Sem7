eval("var y = 12");
console.log(y);

eval("var f = function(x) { return x * x }");
console.log(f(12));

var g = new Function("x, y", "return x + y");
console.log(g(5,7));

//  =============================

function _require(name) {
  if(name in _require.cache) {
    return _require.cache[name];
  }
  var code = new Function("exports", readFile(name));
  var exports = {};
  code(exports);
  _require.cache[name] = exports;
  return exports;
}
_require.cache = Object.create(null);


function readFile(name){
  var req = new XMLHttpRequest();
  req.overrideMimeType("text/javascript");
  req.open("GET", "./" + name + ".js", false);
  req.send(null);
  return req.responseText;
  //return file content as string
}


//For node
/**
function readFile(name) {
  var fs = require("fs");
  return fs.readFileSync("Courses/"+ name + ".js");
}
*/
// ================================
var counter = _require("counterService");
counter.increment();
counter.get();
console.log(counter.increment());

var counter2 = _require("counterService");
console.log(counter2.increment());


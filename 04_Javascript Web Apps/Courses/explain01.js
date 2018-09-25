var colors = ["Blue", "Red"];
console.log(colors[1]);
colors[2] = "Green";
colors[3] = 22;
colors[4] = function(){
  console.log("I am a function");
}

colors.length = 30;
colors.halfLength = colors.length/2;
console.log(colors);
console.log(colors.length);
console.log(colors.halfLength);

colors.forEach(color => {
  console.log(color);
});
colors[4]();



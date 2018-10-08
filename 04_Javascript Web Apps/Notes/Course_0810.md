# Notes 08.10.2018

## "Services" and "Modules"

### [course06.js](../Courses/course06.js)
-------
das i im increment ist in keinem speizifischem **scope** daher wird beim increment das **i** des foreach loops (10) erhöht
```
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
console.log(get());       // 3

for( var i = 0; i < 5; i++){
  //**
}
console.log(increment()); // 4? NEIN /// 11 Da wir im for i ein i definiert haben im gleichen scope we im increment!
```

daher müssen wir den Counter in eine function einbdinen (closure) 

### IIFE
immidiatly-inwoked function expression
```
(function () {
  /// Stuff to do 
  i++ // or whatever
})();
```

IN einem Objekt wäre ein i, welches als **this.i** definiert ist, von aussen zugreifbar, daher
wäre folgendes möglich:
```
unction CounterService(){
  var i  = 0;
  this.increment =  function(){
    return ++i;
  }
}
```
Die Methode muss im der Function definiert sein, da die Prototype function nicht auf das I zugreifen kann.

## Jquery

###[How to plugin](../Courses/jquery-identify.html)

with the script: [How to plugin](../Courses/jquery-identify.js)
a jquery module can be written as follows:
```
function($) {
  var counter = 0;
  $.fn.identify = function(options) {

    var settings = $.extend({
      prefix : "test-"
    }, options);

    this.each(function() {
      this.id = settings.prefix + (++counter);
    })
  }
})(jQuery);

```

the options can be added. The options are an object and have to be added as follows:
```
 $('body *').identify({
    prefix: "mypref-"
  })
```
the *$.extend({})* checks wheter the *prefix* is set in the *options*
```
 $.extend({
      prefix : "test-"
    }, options);
```
if it would not be set "test-" would be used
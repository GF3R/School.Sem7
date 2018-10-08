// ===== increment service =====
var counterService = (function () {
  var i = 0;

  function get() {
    return i;
  };

  function increment() {
    return ++i;
  };
  //jetzt verpacken wir die funktionen in einem objekt, dass sie ausserhabl des scopes gebraucht werden können
  return {
    increment: increment,
    get: get
  };

})();
//=======

/** 
console.log(increment());
console.log(increment());
console.log(get());
// geht nicht mehr da das ganze in einem IIFE ist
*/

console.log(counterService.increment());
console.log(counterService.increment());
console.log(counterService.get());

//** durch diese verschachtelung ist das i nicht zugänglich */
// console.log(counterService.i);


function CounterService() {
  var i = 0;
  this.increment = function () {
    return ++i;
  }
}

var cs = new CounterService();
cs.increment();
//cs.i= 120;// geht nur weil this.i definiert wurde mit var i ist sie nicht mehr im scope


// a small improvment would be:

var cs = {};

(function (exports) {
  var i = 0;

  function get() {
    return i;
  }

  function increment() {
    return ++i;
  }
  //jetzt verpacken wir die funktionen in einem objekt, dass sie ausserhabl des scopes gebraucht werden können
  exports.increment = increment;
  exports.get = get;

})(cs);

cs.increment();

/** Jquery Plugin */

(function($) {
  var counter = 0;
  $.fn.identify = function() {
    this.each(function() {
      this.id = "test-" + (++counter);
    })
  }
})(jQuery);


$('body *').identify();


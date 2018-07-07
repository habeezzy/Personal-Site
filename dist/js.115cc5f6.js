// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({39:[function(require,module,exports) {
module.exports="/img3.21232dc7.jpg";
},{}],43:[function(require,module,exports) {
module.exports="/LIMM.572fe28a.jpg";
},{}],42:[function(require,module,exports) {
module.exports="/itJS.8f28ac42.jpg";
},{}],38:[function(require,module,exports) {

},{"./..\\img\\img3.jpg":39,"./..\\img\\LIMM.jpg":43,"./..\\img\\itJS.jpg":42}],40:[function(require,module,exports) {
module.exports="/img1.b98c9d68.jpg";
},{}],41:[function(require,module,exports) {
module.exports="/img2.75c1c173.jpg";
},{}],15:[function(require,module,exports) {
'use strict';

require('../scss/main.scss');

var _img = require('../img/img3.jpg');

var _img2 = _interopRequireDefault(_img);

var _img3 = require('../img/img1.jpg');

var _img4 = _interopRequireDefault(_img3);

var _img5 = require('../img/img2.jpg');

var _img6 = _interopRequireDefault(_img5);

var _itJS = require('../img/itJS.jpg');

var _itJS2 = _interopRequireDefault(_itJS);

var _LIMM = require('../img/LIMM.jpg');

var _LIMM2 = _interopRequireDefault(_LIMM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//////////////////

$(document).ready(function () {
  $('.fa').click(function () {
    $('.home').toggleClass('menu-active');
  });
});

//Image imports//


$(document).ready(function () {
  $('.fa').click(function () {
    $('.resume').toggleClass('menu-active');
  });
});

$(document).ready(function () {
  $('.fa').click(function () {
    $('.contact').toggleClass('menu-active');
  });
});

$(document).ready(function () {
  $('.fa').click(function () {
    $('.work').toggleClass('menu-active');
  });
});

$(document).ready(function () {
  $('.fa').click(function () {
    $('i').toggleClass('fa-bars fa-times');
  });
});
},{"../scss/main.scss":38,"../img/img3.jpg":39,"../img/img1.jpg":40,"../img/img2.jpg":41,"../img/itJS.jpg":42,"../img/LIMM.jpg":43}]},{},[15])
//# sourceMappingURL=/js.4ccc46c0.map
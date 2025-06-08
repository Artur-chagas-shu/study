"use strict";

var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return sum / numbers.length;
};
console.log("A media dos numeros \xE9 ".concat(average(2, 6, 3, 7, 4)));
var ponderadeAvarege = function ponderadeAvarege() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  var sum = numbers.reduce(function (accum, _ref) {
    var n = _ref.n,
      p = _ref.p;
    return accum + n * (p !== null && p !== void 0 ? p : 1);
  }, 0);
  var ponds = numbers.reduce(function (accum, _ref2) {
    var p = _ref2.p;
    return accum + (p !== null && p !== void 0 ? p : 1);
  }, 0);
  return sum / ponds;
};
console.log("A media ponderada \xE9 ".concat(ponderadeAvarege({
  n: 7,
  p: 2
}, {
  n: 9,
  p: 5
}, {
  n: 3,
  p: 1
})));
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var sorted = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(sorted.length / 2);
  var secondMiddle = middle - 1;
  if (sorted.length % 2 === 0) {
    return (sorted[middle] + sorted[secondMiddle]) / 2;
  } else {
    return sorted[middle];
  }
};
console.log("A mediana dos numeros \xE9 ".concat(median(2, 4, 5, 7, 42, 99)));
console.log("A mediana dos numeros \xE9 ".concat(median(15, 14, 8, 7, 3)));
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));
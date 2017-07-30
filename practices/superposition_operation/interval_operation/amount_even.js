'use strict';
let _ = require('lodash');
function amount_even(collection) {
  return _(collection)
    .remove(n => n % 2 === 0)
    .sum();
}

module.exports = amount_even;

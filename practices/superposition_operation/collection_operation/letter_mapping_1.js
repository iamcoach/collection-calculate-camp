'use strict';
let _ = require('lodash');

function even_to_letter(collection) {
  return _(collection)
    .remove(n => n % 2 === 0)
    .map(n => String.fromCharCode(n + 96))
    .value();
}

module.exports = even_to_letter;

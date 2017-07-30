'use strict';
let _=require('lodash');
var is_exist_element = function (collection, element) {
  return _
    .chain(collection)
    .filter(function(n){
        return collection.indexOf(n)%2===0;
      }
    )
    .includes(element)
    .value();
};
module.exports = is_exist_element;

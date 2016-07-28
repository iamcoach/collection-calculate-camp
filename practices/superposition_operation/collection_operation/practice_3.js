'use strict';
let _=require('lodash');
function hybrid_operation_to_uneven(collection) {
  return _.chain(collection)
    .filter((element)=> {
      if (element % 2 !== 0) {
        return element;
      }
    })
    .map((element)=> {
      return element * 3 + 5;
    })
    .sum((element)=>element)
    .value();
}

module.exports = hybrid_operation_to_uneven;


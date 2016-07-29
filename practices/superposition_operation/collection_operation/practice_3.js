'use strict';
let _ = require('lodash');
function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return _(collection)
    .filter(x=>x%2 == 1)
    .map(x=>x*3+5)
    .reduce((sum,n)=>{return sum+n})
}

module.exports = hybrid_operation_to_uneven;


'use strict';
let _=require('lodash');
function hybrid_operation_to_uneven(collection) {
 return _(collection)
     .filter(x=>x % 2 === 1)
     .map(x=>x * 3 + 5)
     .sum();
 //.reduce((sum,x)=>{return sum+x});
}

module.exports = hybrid_operation_to_uneven;


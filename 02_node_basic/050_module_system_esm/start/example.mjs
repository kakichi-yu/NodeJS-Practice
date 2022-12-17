// const { plus } = require('./calc');
// import minusFn, { plus } from "./calc.mjs";
// const result = plus(1, 2);
// console.log(minusFn(2,1));
// console.log(result);

import minusFn, * as calc from "./calc.mjs"; //一括
console.log(calc);
console.log(calc.plus(2,6));
import cloneDeep from "lodash/cloneDeep.js";
// import _ from "lodash"; // ./node_modules/lodash
// target Pathがない場合は、Packageを探しに行く※NodeJS上のみ
const original = { prop: { nested: "value" } };
// オブジェクトの複製 lodash.js

const cloned = cloneDeep(original);

cloned.prop.nested = "new value"
console.log(original.prop.nested, cloned.prop.nested)
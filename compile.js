"use strict";

require("core-js/modules/esnext.array.unique-by.js");
var data = [{
  id: 1,
  uid: 10000
}, {
  id: 2,
  uid: 10000
}, {
  id: 3,
  uid: 10001
}];
var final_data = data.uniqueBy(function (it) {
  return it.uid;
}); // => [{ id: 1, uid: 10000 }, { id: 3, uid: 10001 }]
console.log(final_data);

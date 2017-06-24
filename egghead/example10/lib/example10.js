'use strict';

var _addition = require('./addition');

var addition = _interopRequireWildcard(_addition);

var _user = require('./user');

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(_user.users);
console.log(_.find(_user.users, { age: 36 }));

console.log("2 + 3 = ", (0, _addition.sumTwo)(2, 3));

console.log("2 + 3 + 4 = ", (0, _addition.sumThree)(2, 3, 4));
console.log();

console.log("2 + 3 = ", addition.sumTwo(2, 3));

console.log("2 + 3 + 4 = ", addition.sumThree(2, 3, 4));
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/22
 * Time: 下午7:53
 */
exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

//# sourceMappingURL=Counter2-compiled.js.map
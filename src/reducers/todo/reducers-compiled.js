'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _action = require('../../actions/todo/action');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * Created by: Luojinghui/luojinghui424@gmail.com
                                                                                                                                                                                                     * Date: 16/9/23
                                                                                                                                                                                                     * Time: 下午1:16
                                                                                                                                                                                                     */


var show_all = _action.VisibilityFilters.show_all;


function visibilityFilter() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? show_all : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _action.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _action.ADD_TODO:
      return [].concat(_toConsumableArray(state), [{
        text: action.text,
        completed: false,
        id: Math.random()
      }]);
    case _action.COMPLETE_TODO:
      return [].concat(_toConsumableArray(state.slice(0, action.index)), [Object.assign({}, state[action.index], { completed: true })], _toConsumableArray(state.slice(action.index + 1)));
    default:
      return state;
  }
}

var todoApp = (0, _redux.combineReducers)({
  visibilityFilter: visibilityFilter,
  todos: todos
});

exports.default = todoApp;

//# sourceMappingURL=reducers-compiled.js.map
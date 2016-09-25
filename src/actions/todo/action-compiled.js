'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.completeTodo = completeTodo;
exports.setVisibilityFilter = setVisibilityFilter;
/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/23
 * Time: 下午12:47
 */
/**
 * action 类型
 */
var ADD_TODO = exports.ADD_TODO = 'add_todo';
var COMPLETE_TODO = exports.COMPLETE_TODO = 'complete_todo';
var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'set_visibility_filter';

/**
 * 其他常量
 */
var VisibilityFilters = exports.VisibilityFilters = {
  show_all: 'show_all',
  show_completed: 'show_completed',
  show_active: 'show_active'
};

/**
 * action创建函数
 */
function addTodo(text) {
  return { type: ADD_TODO, text: text };
}

function completeTodo(index) {
  return { type: COMPLETE_TODO, index: index };
}

function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter: filter };
}

//# sourceMappingURL=action-compiled.js.map
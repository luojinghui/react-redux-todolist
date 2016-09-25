'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _action = require('../../actions/todo/action');

var _AddTodo = require('./AddTodo');

var _AddTodo2 = _interopRequireDefault(_AddTodo);

var _TodoList = require('./TodoList');

var _TodoList2 = _interopRequireDefault(_TodoList);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by: Luojinghui/luojinghui424@gmail.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 16/9/22
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 下午8:28
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Todo = function (_Component) {
  _inherits(Todo, _Component);

  function Todo() {
    _classCallCheck(this, Todo);

    return _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).apply(this, arguments));
  }

  _createClass(Todo, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var dispatch = _props.dispatch;
      var visibleTodos = _props.visibleTodos;
      var visibilityFilter = _props.visibilityFilter;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AddTodo2.default, {
          onAddClick: function onAddClick(text) {
            return dispatch((0, _action.addTodo)(text));
          }
        }),
        _react2.default.createElement(_TodoList2.default, {
          todos: visibleTodos,
          onTodoClick: function onTodoClick(index) {
            return dispatch((0, _action.completeTodo)(index));
          }
        }),
        _react2.default.createElement(_Footer2.default, {
          filter: visibilityFilter,
          onFilterChange: function onFilterChange(nextFilter) {
            return dispatch((0, _action.setVisibilityFilter)(nextFilter));
          }
        })
      );
    }
  }]);

  return Todo;
}(_react.Component);

Todo.PropTypes = {
  visibleTodos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    text: _react.PropTypes.string.isRequired,
    completed: _react.PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: _react.PropTypes.oneOf(['show_all', 'show_completed', 'show_active']).isRequired
};

function selectTodos(todos, filter) {
  switch (filter) {
    case _action.VisibilityFilters.show_all:
      return todos;
    case _action.VisibilityFilters.show_completed:
      return todos.filter(function (todo) {
        return todo.completed;
      });
    case _action.VisibilityFilters.show_active:
      return todos.filter(function (todo) {
        return !todo.completed;
      });
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilitFilter
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
exports.default = (0, _reactRedux.connect)(select)(Todo);

// todos = { [
// {
//   text: 'use Redux',
//   completed: true
// },
// {
//   text: 'learn to connect it to react',
//     completed: false
// },
// {
//   text: 'test value',
//     completed: false
// }
// ] }

//# sourceMappingURL=Todo-compiled.js.map
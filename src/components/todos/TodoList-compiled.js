'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TodoLi = require('./TodoLi');

var _TodoLi2 = _interopRequireDefault(_TodoLi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by: Luojinghui/luojinghui424@gmail.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 16/9/23
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 上午10:49
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TodoList = function (_Component) {
  _inherits(TodoList, _Component);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
  }

  _createClass(TodoList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'ol',
        null,
        this.props.todos.map(function (todo, index) {
          return _react2.default.createElement(_TodoLi2.default, _extends({}, todo, {
            key: index,
            onClick: function onClick() {
              return _this2.props.onTodoClick(index);
            }
          }));
        })
      );
    }
  }]);

  return TodoList;
}(_react.Component);

TodoList.propTypes = {
  onTodoClick: _react.PropTypes.func.isRequired,
  todos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    text: _react.PropTypes.string.isRequired,
    completed: _react.PropTypes.bool.isRequired
  }).isRequired).isRequired
};
TodoList.defaultProps = {};

exports.default = TodoList;

//# sourceMappingURL=TodoList-compiled.js.map
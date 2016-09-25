'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by: Luojinghui/luojinghui424@gmail.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 16/9/22
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 下午8:43
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AddTodo = function (_Component) {
  _inherits(AddTodo, _Component);

  function AddTodo(props) {
    _classCallCheck(this, AddTodo);

    var _this = _possibleConstructorReturn(this, (AddTodo.__proto__ || Object.getPrototypeOf(AddTodo)).call(this, props));

    _this.handleClickAdd = _this.handleClickAdd.bind(_this);
    return _this;
  }

  _createClass(AddTodo, [{
    key: 'handleClickAdd',
    value: function handleClickAdd(e) {
      var todoNode = this.refs.todoValue;
      var todoValue = todoNode.value.trim();

      if (todoValue === '') {
        todoNode.focus();
        return;
      } else {
        this.props.onAddClick(todoValue);
        todoNode.value = '';
      }

      e.stopPropagation();
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', { type: 'text', ref: 'todoValue' }),
        _react2.default.createElement(
          'button',
          { onClick: function onClick(e) {
              return _this2.handleClickAdd(e);
            } },
          'add'
        )
      );
    }
  }]);

  return AddTodo;
}(_react.Component);

AddTodo.propTypes = {
  onAddClick: _react.PropTypes.func.isRequired
};
AddTodo.defaultProps = {};

exports.default = AddTodo;

//# sourceMappingURL=AddTodo-compiled.js.map
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 下午7:56
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleOddAdd = _this.handleOddAdd.bind(_this);
    _this.handleSyncAdd = _this.handleSyncAdd.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleOddAdd',
    value: function handleOddAdd() {
      if (this.props.value % 2 !== 0) {
        this.props.onIncrement();
      }
    }
  }, {
    key: 'handleSyncAdd',
    value: function handleSyncAdd() {
      setTimeout(function () {
        this.props.onIncrement();
      }.bind(this), 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var value = _props.value;
      var onIncrement = _props.onIncrement;
      var onDecrement = _props.onDecrement;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'click: ',
          ' ' + value + '  次'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: onIncrement },
            ' + '
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: onDecrement },
            ' - '
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: this.handleOddAdd },
            ' odd add '
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: this.handleSyncAdd },
            ' sync add '
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

App.defaultProps = {
  value: _react.PropTypes.number.isRequired,
  OnIncrement: _react.PropTypes.func.isRequired,
  OnDecrement: _react.PropTypes.func.isRequired
};

//# sourceMappingURL=App2-compiled.js.map
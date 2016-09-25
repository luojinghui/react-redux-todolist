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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 16/9/21
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 下午6:29
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


require('styles/App.css');

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleIfOdd = _this.handleIfOdd.bind(_this);
    _this.timeOutAdd = _this.timeOutAdd.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleIfOdd',
    value: function handleIfOdd() {
      if (this.props.value % 2 !== 0) {
        this.props.OnIncrement();
      }
    }
  }, {
    key: 'timeOutAdd',
    value: function timeOutAdd() {
      setTimeout(function () {
        this.props.OnIncrement();
      }.bind(this), 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var value = _props.value;
      var OnIncrement = _props.OnIncrement;
      var OnDecrement = _props.OnDecrement;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          '点击了: ',
          value,
          ' 次'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: OnIncrement },
            '+'
          ),
          _react2.default.createElement(
            'button',
            { onClick: OnDecrement },
            '-'
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.handleIfOdd },
            'increment if odd'
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.timeOutAdd },
            'increment async 1000'
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;


App.propTypes = {
  value: _react.PropTypes.number.isRequired,
  OnIncrement: _react.PropTypes.func.isRequired,
  OnDecrement: _react.PropTypes.func.isRequired
};
App.defaultProps = {};

//# sourceMappingURL=App-compiled.js.map
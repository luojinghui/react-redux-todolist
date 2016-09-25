"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by: Luojinghui/luojinghui424@gmail.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 16/9/23
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 上午11:22
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.renderFilter = _this.renderFilter.bind(_this);
    return _this;
  }

  _createClass(Footer, [{
    key: "renderFilter",
    value: function renderFilter(filter, name) {
      var _this2 = this;

      if (filter === this.props.filter) {
        return _react2.default.createElement(
          "span",
          { className: "filter" },
          name
        );
      }

      return _react2.default.createElement(
        "a",
        { href: "#",
          onClick: function onClick(e) {
            e.preventDefault();
            _this2.props.onFilterChange(filter);
          }
        },
        name
      );
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          null,
          "switch:",
          '    '
        ),
        this.renderFilter('show_all', 'all'),
        this.renderFilter('show_completed', 'completed'),
        this.renderFilter('show_active', 'active')
      );
    }
  }]);

  return Footer;
}(_react.Component);

Footer.propTypes = {
  onFilterChange: _react.PropTypes.func.isRequired,
  filter: _react.PropTypes.oneOf(['show_all', 'show_completed', 'show_active']).isRequired
};
Footer.defaultProps = {};

exports.default = Footer;

//# sourceMappingURL=Footer-compiled.js.map
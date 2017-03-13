'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberInput = function (_React$Component) {
  _inherits(NumberInput, _React$Component);

  function NumberInput(props) {
    _classCallCheck(this, NumberInput);

    var _this = _possibleConstructorReturn(this, (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call(this, props));

    _this.defaultProps = {
      defaultStyle: true
    };

    _this.changeNumber = _this.changeNumber.bind(_this);
    _this.generalTimeNumberValue = _this.generalTimeNumberValue.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(NumberInput, [{
    key: 'fireKey',
    value: function fireKey(el, key) {
      var e = null;
      try {
        e = new Event("change");
        e.altKey = false;
        e.ctrlKey = true;
        e.shiftKey = false;
        e.metaKey = false;
      } catch (ex) {
        e = document.createEvent("HTMLEvents");
        e.initEvent("change", false, true);
      }

      el.dispatchEvent(e);
      this.onChange(e);
    }
  }, {
    key: 'changeNumber',
    value: function changeNumber(direction, inputType) {
      var _props = this.props,
          step = _props.step,
          max = _props.max,
          min = _props.min,
          isCycle = _props.isCycle;

      step = step || 1;
      if (max == null) {
        max = Number.MAX_VALUE;
      }
      if (min == null) {
        min = -1 * Number.MAX_VALUE;
      }

      if (max < min) {
        max = min;
      }

      var dctNumber = 1;
      if (direction === 'down') {
        dctNumber = -1;
      }

      var newValue = this.txtInput.value * 1 + step * dctNumber;
      if (newValue < min && !!isCycle && max != null) {
        newValue = max;
      }
      if (newValue > max) {
        if (!!isCycle && min != null) {
          newValue = min;
        } else {
          newValue = max;
        }
      }
      if (newValue <= max && newValue >= min) {
        if (inputType === 'time') {
          this.txtInput.value = this.generalTimeNumberValue(newValue);
        } else {
          this.txtInput.value = newValue;
        }
        this.fireKey(this.txtInput);
      }
    }
  }, {
    key: 'generalTimeNumberValue',
    value: function generalTimeNumberValue(newValue) {
      if (newValue < 10) {
        return '0' + newValue;
      }
      return newValue;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(evt) {
      var _props2 = this.props,
          inputType = _props2.type,
          min = _props2.min,
          max = _props2.max;

      var value = evt.target.value;

      if (min != null) {
        if (!isNaN(value)) {
          if (parseFloat(value) < min) {
            if (inputType === 'time') {
              evt.target.value = this.generalTimeNumberValue(min);
            } else {
              evt.target.value = min;
            }
          }
        }
      }
      if (max != null) {
        if (!isNaN(value)) {
          if (parseFloat(value) > max) {
            if (parseFloat(value) > max) {
              if (inputType === 'time') {
                evt.target.value = this.generalTimeNumberValue(max);
              } else {
                evt.target.value = max;
              }
            }
          }
        }
      }
      if (this.props.onChange) {
        this.props.onChange(evt);
      }

      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          value = _props3.value,
          inputType = _props3.type,
          extendClassName = _props3.className,
          prefixCls = _props3.prefixCls,
          defaultStyle = _props3.defaultStyle;

      if (!!defaultStyle) {
        require('../assets/numberInput.scss');
      }
      var usedInputType = inputType ? inputType : "number";
      var usedPrefixCls = prefixCls ? prefixCls : 'fy';
      var className = (0, _classnames2.default)(usedPrefixCls + '_numberInput', extendClassName);
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement('div', {
          className: usedPrefixCls + '_minuteIcon',
          onClick: function onClick(evt) {
            return _this2.changeNumber("up", usedInputType);
          } }),
        _react2.default.createElement('input', { type: 'text', value: value, onChange: this.handleChange }),
        _react2.default.createElement('div', {
          className: usedPrefixCls + '_plusIcon',
          onClick: function onClick(evt) {
            return _this2.changeNumber("down", usedInputType);
          } })
      );
    }
  }]);

  return NumberInput;
}(_react2.default.Component);

NumberInput.propTypes = {
  defaultStyle: _react2.default.PropTypes.bool
};
exports.default = NumberInput;
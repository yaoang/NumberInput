import React from 'react';
import classnames from 'classnames'

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.changeNumber = ::this.changeNumber;
    this.generalTimeNumberValue = ::this.generalTimeNumberValue;
    this.handleChange = ::this.handleChange;
  }

  static propTypes = {
    defaultStyle: React.PropTypes.bool,
  }

  defaultProps = {
    defaultStyle: true,
  }

  fireKey(el, key) {
		let e = null;
		try {
			e = new Event("change");
			e.altKey=false;
			e.ctrlKey=true;
			e.shiftKey=false;
			e.metaKey=false;
		} catch(ex) {
			e = document.createEvent("HTMLEvents");
			e.initEvent("change", false, true);
		}

		el.dispatchEvent(e);
		this.onChange(e);
	}

  changeNumber(direction, inputType) {
		let {step, max, min, isCycle} = this.props;
		step = step || 1;
		if(max==null){
			max = Number.MAX_VALUE;
		}
		if(min == null){
			min = -1 * Number.MAX_VALUE;
		}
		
		if(max < min) {
			max = min;
		}

		let dctNumber = 1;
		if(direction === 'down') {
			dctNumber = -1;
		}

		let newValue = (this.txtInput.value * 1) + (step * dctNumber);
		if(newValue < min && !!isCycle && (max != null)){
			newValue = max;
		}
		if(newValue > max) {
			if (!!isCycle && (min != null)) {
				newValue = min;
			} else {
				newValue = max;
			}
		}
		if(newValue <= max && newValue >= min) {
			if(inputType === 'time') {
				this.txtInput.value = this.generalTimeNumberValue(newValue);
			} else {
				this.txtInput.value = newValue;
			}
			this.fireKey(this.txtInput);
		}
	}

  generalTimeNumberValue(newValue) {
		if (newValue < 10) {
			return `0${newValue}`
		}
		return newValue
	}

  handleChange(evt) {
    const {type: inputType, min, max} = this.props;
    const value = evt.target.value;

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

  render() {
    const {
      value,
      type: inputType,
      className: extendClassName,
      prefixCls,
      defaultStyle} = this.props;
    if(!!defaultStyle) {
      require('../assets/numberInput.scss');
    }
    const usedInputType = inputType ? inputType : "number";
    const usedPrefixCls = prefixCls ? prefixCls : 'fy';
    const className = classnames(`${usedPrefixCls}_numberInput`, extendClassName);
    return (
      <div className={className}>
        <div 
          className={`${usedPrefixCls}_minuteIcon`} 
          onClick={evt => this.changeNumber("up", usedInputType)} />
        <input type='text' value={value} onChange={this.handleChange} />
        <div 
          className={`${usedPrefixCls}_plusIcon`} 
          onClick={evt => this.changeNumber("down", usedInputType)} />
      </div>
    );
  }
}

export default NumberInput;

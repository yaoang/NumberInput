import React from 'react';
import classnames from 'classnames'

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    defaultStyle: React.PropTypes.bool,
  }

  defaultProps = {
    defaultStyle: true,
  }

  render() {
    const {value, className: extendClassName, prefixCls, defaultStyle} = this.props;
    if(!!defaultStyle) {
      require('../assets/numberInput.scss');
    }
    const usedPrefixCls = prefixCls ? prefixCls : 'fy';
    const className = classnames(`${usedPrefixCls}_numberInput`, extendClassName);
    return (
      <div className={className}>
        <div className={`${usedPrefixCls}_minuteIcon`} />
        <input type='text' value={value}/>
        <div className={`${usedPrefixCls}_plusIcon`} />
      </div>
    );
  }
}

export default NumberInput;

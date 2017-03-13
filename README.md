# NumberInput  
> **Author:** _yaoang_


A mobile number input component for react project  

## How to use  
First, you must install this component  
```
npm install --save inputnumber
```  
secondly import in your page  
```javascript
import NumberInput from 'numberinput'
```
and then use in your page
```HTML
<NumberInput 
    value={value} 
    onChange={this.handleChange}
    className={yourClassName}
    prefixCls={yourPrefixCls}
    defaultStyle={true}
    min={0}
    max={100} />
```
> Parameters
>+ **className**: default value is '${prefixCls}_numberInput'  
>+ **prefixCls**: default value is 'fy'
>+ **defaultStyle**: use the default style file given by author, default value is true  
```javascript
handleChange(evt) {
    /* Your change event here */
    const value = evt.target.value;
}
```

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
    isCycle={false}
    type="number"
    min={0}
    max={100}
    step={1} />
```
> Parameters
>+ **className**: default value is '_**${prefixCls}\_numberInput**_'    
>+ **prefixCls**: default value is '_**fy**_'  
>+ **defaultStyle**: use the default style file given by author, default value is '_**true**_'  
>+ **isCycle**: when touch the top or the bottom, it will start from the opposite, default value is '_**false**_'  
>+ **type**: values in {_"**number**", "**time**"_}, default value is '_**number**_'

```javascript
handleChange(evt) {
    /* Your change event here */
    const value = evt.target.value;
}
```

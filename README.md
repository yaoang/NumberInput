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
    min={0}
    max={100} />
```
```javascript
handleChange(evt) {
    /* Your change event here */
    const value = evt.target.value;
}
```

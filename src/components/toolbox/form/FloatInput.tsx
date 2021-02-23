import React, {useRef, useEffect, useState} from 'react';

const FloatInput = ({onChange, prefix, suffix}: {onChange: (val: number) => void, prefix?: string, suffix?: string}) => {

    const [value, setValue] = useState<string>("");
    const inputRef = useRef(null);
    const [focused, setFocused] = useState<boolean>(false);
  
    useEffect(() => {
      onChange(getValue());
    }, [value]);
  
    const getValue = (): number => {
      let val = "";
      for (let i = 0; i < value.length; ++i) {
        if (value[i] == ',') continue;
        val += value[i];
      }
      return parseFloat(val);
    }
  
    const getSuffix = () => {
      let p = -1;
      if ((p = value.indexOf('.')) != -1) {
        return Array.from(new Array(Math.max(4 - (value.length - p + 1), 0)), _ => '0').join('');
      }
      else if (value.length == 0) return '0.00';
      return '.00';
    }
  
    const sanitizeVal = (val: string): string => {
      let new_val = "";
  
      let decimal_found = false;
      for (let i = 0; i < val.length; ++i) {
        if (val[i] >= '0' && val[i] <= '9')
          new_val += val[i];
        else if (!decimal_found && val[i] == '.') {
          new_val += val[i];
          decimal_found = true;
        }
      }
  
      // truncate excess values
      if (decimal_found) {
        new_val = new_val.substr(0, Math.min(new_val.indexOf('.') + 3, new_val.length));
      }
  
      return new_val;
    }
  
    const addCommas = (val: string) => {
  
      let first_decimal = val.indexOf('.');
  
      let new_val = "";
      if (first_decimal != -1) {
        new_val = val.substr(first_decimal);
      }
  
      let k = 0;
  
      let start = first_decimal == -1 ? val.length - 1 : first_decimal - 1;
      for (let i = start; i >=0; --i) {
        if (i != start && k == 0) {
          new_val = "," + new_val;
        }
        new_val = val[i] + new_val;
  
        k = (k + 1) % 3;
      }
  
      return new_val;
    }
  
    const handleInput = (e: any) => {
  
      let val = addCommas( sanitizeVal (e.target.value) );
  
      setValue(val);
    }
  
    const getTextWidth = (val: string) => {
      let d = document.createElement("span");
      d.setAttribute('class', 'text-input_');
      d.innerText=val;
  
      document.getElementsByTagName("body")[0].appendChild(d);
      let w = d.getBoundingClientRect().width;
      document.getElementsByTagName("body")[0].removeChild(d);
  
      return w;
    }
  
    return (<div className="text-input-field" style={{position: 'relative'}}>
      <span className={`prefix_ ${focused ? 'focused'  : ''}`}
        onClick={() => {
          if (inputRef && inputRef.current) (inputRef.current as any).focus();
        }}
      >{prefix}</span>
      <input ref={inputRef} 
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleInput}
        value={value}
        className="field" />
      <div className="suffix_" 
        onClick={() => {
          if (inputRef && inputRef.current) (inputRef.current as any).focus();
        }}
        style={{
        position: 'absolute',
        left: `${getTextWidth(value) + (prefix == undefined ? 8 : 30)}px`
      }}>
        {getSuffix()}{suffix != undefined && suffix}
      </div>
    </div>);
}

export default FloatInput;
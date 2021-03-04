import React, {useState, useEffect} from 'react';

const NumberPicker = ({onChange, minVal, maxVal}: 
    {onChange: (value: number) => void, minVal?: number, maxVal?: number}) => {

    const getClampedValue = (val: number): number => Math.min(
        Math.max(
            val,
            minVal == undefined ? Number.MIN_VALUE : minVal
        ),
    maxVal == undefined ? Number.MAX_VALUE : maxVal);

    //========== STATE ==========
    const [value, setValue] = useState<number>(getClampedValue(0));
  
    //========== EFFECTS ==========
    useEffect(() => {
      onChange(value);
    }, [value]);
  
    return (<div className="number-input-2">
        <div className="inc-dec-btn left no-select"
          onClick={() => setValue(getClampedValue(value - 1))}
        >-</div>
        <div className="number-input-area">
          <input value={value} onChange={() => {}} />
        </div>
        <div className="inc-dec-btn right no-select"
          onClick={() => setValue(getClampedValue(value + 1))}
        >+</div>
      </div>)
}

export default NumberPicker;
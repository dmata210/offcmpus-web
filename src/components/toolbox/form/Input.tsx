import React, {useRef, useState, useEffect} from 'react'
import {motion, useSpring, useTransform} from 'framer-motion'
import {HiOutlineExclamation} from 'react-icons/hi';

export const InputValidatorFlags = { VALIDATOR_WARNING: 1, VALIDATOR_ERROR: 2};
type InputValidatorConfigFlag = number;

type InputValidatorInfo = {
  // the function that validates whether or nor the
  // input value is valid or not.
  validator: (input_value: string) => boolean,

  // the error message that is recieved if the input
  // fails this validation test
  errorMsg: string,

  // flag to configure the requirement of the validator
  flag?: InputValidatorConfigFlag // default flag = VALIDATOR_ERROR
}

interface InputInterface {
  label: string
  type?: string
  onChange?: (arg0: string) => void
  onValidate?: (valid: boolean) => void
  icon?: any
  validators?: InputValidatorInfo[]
  inputFilters?: ((arg0: string) => (string | null))[]
  initial?: string
  autoFocus?: boolean
}

/**
 * useInput hook -> [inputStateData, inputJSXView]
 * @desc Create an input with the state data returned separately
 * from the JSX view.
 */
export const useInput = 
  ({label, initial, type, autoFocus, icon, validators, inputFilters}: InputInterface) => {

  //====================== REFS ======================
  const inputRef = useRef<HTMLInputElement>(null);
  
  //====================== STATE ======================
  const focusSpring = useSpring(0, {stiffness: 120, damping: 20})
  const [setInitial, setSetInitial] = useState<boolean>(true)
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState<string>("");
  const [errorInfo, setErrorInfo] = useState<{msg: String, warning: boolean} | null>(null);

  //====================== EFFECTS ======================
  useEffect(() => {

    // set initial value on load
    if (initial) {
      setValue(initial)
    }

  }, [])

  useEffect(() => {

    if (inputRef.current) {

      // set the initial
      if (initial && setInitial && initial != "") {
        inputRef.current.value = initial
        setFocused(true)
        setSetInitial(false)
      }

      // set autoFocus
      if (autoFocus) {
        inputRef.current.focus()
        setFocused(true)
      }
    }
  }, [inputRef])

  useEffect(() => {
    if (focused) {
      if (inputRef.current != null) inputRef.current.focus ()
      focusSpring.set(1)
    }
    else focusSpring.set(0)
  }, [focused]);

  //====================== FUNCTIONS ======================
  const focusInput = () => {
    setFocused(true)
    if (inputRef.current != null) {
      inputRef.current.focus ()
    }
  }

  const handleBlur = () => {
    if (value.length === 0) setFocused(false)
  }

  const getType = () => {
    return type && ["text", "password"].includes(type) ? type : "text"
  }

  const handleChange = (e: any) => {
    if (inputFilters) {
      let result_: string | null = e.target.value
      let i = 0;
      while (result_ != null && i < inputFilters.length) {
        result_ = inputFilters[i](result_)
        ++i;
      }

      if (result_ == null) {
        e.target.value = value
      }
      else {
        setValue(e.target.value)
        processValidators(e.target.value);
      }
    }
    else {
      setValue(e.target.value);
      processValidators(e.target.value);
    }
  }

  /**
   * @desc Process the updated value of the input. 
   * If there are validators attached on this input, determine
   * whether or not the value passes all the validation test.
   * 
   * Error validators have higher precedence over warning validators.
   * The error that is applied is the validator that fails with the
   * highest precedence. All erros have equal precedence and all
   * warnings have equal precedence. In these cases, choose any with the
   * highest precedence. 
   */
  const processValidators = (input: string): boolean => {
    if (value.length == 0 || validators == undefined) return true;

    let selected: InputValidatorInfo | null = null;
    validators.forEach((validatorInfo: InputValidatorInfo) => {

      // if the value passes the validation test, go to next validator
      if (validatorInfo.validator(input)) return;

      // validator failed: set the selected validator info
      if (selected == null || 
        ( (validatorInfo.flag == InputValidatorFlags.VALIDATOR_ERROR || validatorInfo.flag == undefined)
            && selected.flag == InputValidatorFlags.VALIDATOR_WARNING))
        selected = validatorInfo;
    });

    // set the error to show
    if (selected != null) {
      setErrorInfo({
        msg: (selected as InputValidatorInfo).errorMsg,
        warning: (selected as InputValidatorInfo).flag == InputValidatorFlags.VALIDATOR_WARNING
      });
      return false;
    }
    
    // if it passes all the validors, then no error should be shown
    else {
      setErrorInfo(null);
      return true;
    }
  }

  const getErrorClass = () => {
    if (errorInfo == null) return '';
    if (errorInfo.warning) return 'invalid warning';
    return 'invalid error';
  }

  //====================== INPUT STATE INFO ======================
  const __inputState = {
    value, valid: errorInfo == null
  };

  //====================== RENDER ======================
  const __renderView = (<React.Fragment>
      <div className={`input-field ${getErrorClass()}`} onClick={focusInput}>
      <div 
        
        className={`label-area ${icon ? 'icon' : ''} ${focused ? 'focused': ''}`}
        onClick={focusInput}>{label}</div>
      {icon && <div className={`icon-area ${focused ? 'focused' : ''}`}>{icon}</div>}
      <div className={`input-area ${icon ? 'icon' : ''}`}>
        <input 
          onFocus={() => {setFocused(true)}} 
          onBlur={handleBlur}
          ref={inputRef} 
          spellCheck={false} 
          onChange={handleChange}
          type={getType()}
        />
      </div>
    </div>
    {errorInfo != null && <div className={`input-field-error-msg ${getErrorClass()}`}>
      <span className="error-icon">{errorInfo.warning ? <HiOutlineExclamation/> : '!'}</span>
      {errorInfo.msg}
    </div>}
  </React.Fragment>);

  return [__inputState, __renderView];
}

const Input = ({label, initial, type, autoFocus, onChange, onValidate, icon, validators, inputFilters}: InputInterface) => {

  //====================== REFS ======================
  const inputRef = useRef<HTMLInputElement>(null);
  
  //====================== STATE ======================
  const focusSpring = useSpring(0, {stiffness: 120, damping: 20})
  const [setInitial, setSetInitial] = useState<boolean>(true)
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState<string>("");
  const [errorInfo, setErrorInfo] = useState<{msg: String, warning: boolean} | null>(null);

  //====================== EFFECTS ======================
  useEffect(() => {

    // set initial value on load
    if (initial) {
      setValue(initial)
    }

  }, [])

  useEffect(() => {

    if (inputRef.current) {

      // set the initial
      if (initial && setInitial && initial != "") {
        inputRef.current.value = initial
        setFocused(true)
        setSetInitial(false)
      }

      // set autoFocus
      if (autoFocus) {
        inputRef.current.focus()
        setFocused(true)
      }
    }
  }, [inputRef])

  useEffect(() => {
    if (onChange) onChange(value)
    let valid: boolean = processValidators();

    // TODO send onValidate if validators are set
    // onValidate
    if (value.length > 0 && onValidate != undefined) {
      onValidate(valid);
    }

  }, [value, onChange]);

  useEffect(() => {
    if (focused) {
      if (inputRef.current != null) inputRef.current.focus ()
      focusSpring.set(1)
    }
    else focusSpring.set(0)
  }, [focused]);

  //====================== FUNCTIONS ======================
  const focusInput = () => {
    setFocused(true)
    if (inputRef.current != null) {
      inputRef.current.focus ()
    }
  }

  const handleBlur = () => {
    if (value.length === 0) setFocused(false)
  }

  const getType = () => {
    return type && ["text", "password"].includes(type) ? type : "text"
  }

  const handleChange = (e: any) => {
    if (inputFilters) {
      let result_: string | null = e.target.value
      let i = 0;
      while (result_ != null && i < inputFilters.length) {
        result_ = inputFilters[i](result_)
        ++i;
      }

      if (result_ == null) e.target.value = value
      else setValue(e.target.value)
    }
    else setValue(e.target.value)
  }

  /**
   * @desc Process the updated value of the input. 
   * If there are validators attached on this input, determine
   * whether or not the value passes all the validation test.
   * 
   * Error validators have higher precedence over warning validators.
   * The error that is applied is the validator that fails with the
   * highest precedence. All erros have equal precedence and all
   * warnings have equal precedence. In these cases, choose any with the
   * highest precedence. 
   */
  const processValidators = (): boolean => {
    if (value.length == 0 || validators == undefined) return true;

    let selected: InputValidatorInfo | null = null;
    validators.forEach((validatorInfo: InputValidatorInfo) => {

      // if the value passes the validation test, go to next validator
      if (validatorInfo.validator(value)) return;

      // validator failed: set the selected validator info
      if (selected == null || 
        ( (validatorInfo.flag == InputValidatorFlags.VALIDATOR_ERROR || validatorInfo.flag == undefined)
            && selected.flag == InputValidatorFlags.VALIDATOR_WARNING))
        selected = validatorInfo;
    });

    // set the error to show
    if (selected != null) {
      setErrorInfo({
        msg: (selected as InputValidatorInfo).errorMsg,
        warning: (selected as InputValidatorInfo).flag == InputValidatorFlags.VALIDATOR_WARNING
      });
      return false;
    }
    
    // if it passes all the validors, then no error should be shown
    else {
      setErrorInfo(null);
      return true;
    }
  }

  const getErrorClass = () => {
    if (errorInfo == null) return '';
    if (errorInfo.warning) return 'invalid warning';
    return 'invalid error';
  }

  //====================== RENDER ======================
  return (<React.Fragment>
      <div className={`input-field ${getErrorClass()}`} onClick={focusInput}>
      <div 
        
        className={`label-area ${icon ? 'icon' : ''} ${focused ? 'focused': ''}`}
        onClick={focusInput}>{label}</div>
      {icon && <div className={`icon-area ${focused ? 'focused' : ''}`}>{icon}</div>}
      <div className={`input-area ${icon ? 'icon' : ''}`}>
        <input 
          onFocus={() => {setFocused(true)}} 
          onBlur={handleBlur}
          ref={inputRef} 
          spellCheck={false} 
          onChange={handleChange}
          type={getType()}
        />
      </div>
    </div>
    {errorInfo != null && <div className={`input-field-error-msg ${getErrorClass()}`}>
      <span className="error-icon">{errorInfo.warning ? <HiOutlineExclamation/> : '!'}</span>
      {errorInfo.msg}
    </div>}
  </React.Fragment>)
}

export default Input

// Custom Input Filters -> Applying filters will restrict input to only these values (not the same as validators)
export const numbersOnly = (val: string): string | null => {
  const _g = "0123456789"
  for (let i = 0; i < val.length; ++i) {
    if (val.charAt(i) == ' ' || _g.includes( `${val.charAt(i)}` )) continue;
    else return null;
  }
  return val;
}

export const alnumOnly = (val: string): string | null => {
  if (val == "") return val;
  if (val.replaceAll(' ', '').match(/^[A-Za-z0-9]+$/i)) return val;
  return null;
}

export const noSpaces = (val: string): string | null => {
  if (val.includes(' ')) return null;
  return val;
}

export const maxLen = (max_len: number): (val:string) => string | null => {
  return (val: string): string | null => {
    if (val.length > max_len) return null;
    return val;
  }
}

export const $or = (fn_1: (arg0: string) => (string | null), fn_2: (arg0: string) => (string | null) )
: (arg0: string) => (string | null) => {
  return (new_val: string) => {
    if (fn_1(new_val) != null) return new_val;
    if (fn_2(new_val) != null) return new_val;
    return null;
  }
}

export const $and = (fn_1: (arg0: string) => (string | null), fn_2: (arg0: string) => (string | null) )
: (arg0: string) => (string | null) => {
  return (new_val: string) => {
    if (fn_1(new_val) == null) return null;
    if (fn_2(new_val) == null) return null;
    return new_val;
  }
}

// Custom validators
export const Validators = {
  numbersOnly: (inputValue: string): boolean => (new RegExp(/^[0-9]+$/)).test(inputValue),
  minLen: (min_len: number): ( (inputValue: string) => boolean ) => ((inputValue: string) => inputValue.length >= min_len),
  email: (inputValue: string): boolean => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputValue)
};
import React, {useState, useEffect, useRef, createRef, useLayoutEffect} from 'react'
// @ts-ignore
import {Form, FormSelect , FormCheckbox, FormTextarea, FormInput, FormGroup} from 'shards-react'

interface RadioInputConfig {
    type: 'radio'
    text: string
    options: string[]
}

interface InputFieldConfig {
    type: 'input'
    inputType: 'text' | 'password' | 'email'
    label: { placeholder?: boolean, text: string }
}

interface CheckboxInputConfig {
    type: 'checkbox'
    text: string
    options: string[]
    limit?: number // max # of options that can be selected
}

interface TextareaInputConfig {
    type: 'textarea'
    text: string
}

interface SelectInputConfig {
    type: 'select'
    text: string
    options: string[]
}

type FormInputConfig = ((InputFieldConfig | RadioInputConfig | TextareaInputConfig | SelectInputConfig) & {
    // a function that, when given the value of the input, return a 
    // boolean representing if the value is a valid form input or not
    validator?: (value: string) => boolean
}) | (CheckboxInputConfig & {
    validator?: (value: string[]) => boolean
})

interface FormControlHookConfig {
    formTitle?: string
    config: {[key: string]: FormInputConfig}
}

/**
 * useFormControl Hook
 * @desc Generates a form control object that
 * can fetch the values of form input, keep track of
 * the form's validity, and provide a JSX output to
 * show the form to users.
 */
export const useFormControl = ({formTitle, config}: FormControlHookConfig) => {

    // Generate state variables for each form input in the config
    const [formInputRefs, setFormInputRefs] = useState<{[key: string]: any}>({})
    const [formInputStates, setFormInputStates] = useState<{[key: string]: any}>({})
    const formId = Math.floor(Math.random() * 200000).toFixed(0)

    // config effector
    useLayoutEffect(() => {
        // update form inputs each time the config changes...
        let config_keys = Object.keys(config);
        let newFormInputRefs: {[key: string]: any} = {}
        let newformInputStates: {[key: string]: any} = {}

        for (let i = 0; i < config_keys.length; ++i) {
            if (Object.prototype.hasOwnProperty.call( formInputRefs, config_keys[i] )) {
                newFormInputRefs[config_keys[i]] = formInputRefs[config_keys[i]];
                newformInputStates[config_keys[i]] = formInputStates[config_keys[i]];
            }
            else {
                // if (config[config_keys[i]].type == 'radio') 
                //     newFormInputRefs[config_keys[i]] = null;
                newFormInputRefs[config_keys[i]] = createRef();
                newformInputStates[config_keys[i]] = null;
            }
        }
        setFormInputRefs(newFormInputRefs);
        setFormInputStates(newformInputStates);

    }, []);

    useEffect(() => {
        console.log(`Form Input Refs Changed.`, formInputRefs)
        // Setup callbacks for each input's refs.
        let keys = Object.keys(formInputRefs)
        for (let i = 0; i < keys.length; ++i) {

            // skip setting onchange event for radio ref
            if (config[keys[i]].type == 'radio' 
            || config[keys[i]].type == 'checkbox'
            || config[keys[i]].type == 'textarea') continue;

            let ref_ = formInputRefs[keys[i]].current;
            if (!ref_) console.log(`Ref for key ${keys[i]} is not set.`)
            else {
                let id = ref_.getAttribute('id')
                id = id.substring(1, id.indexOf('_'));

                // attach an onchange function to the ref
                ref_.addEventListener('change', (e: any) => {
                    setFormInputStates(getInputStates());
                });
            }
        }
    }, [formInputRefs])

    const getInputStates = (): {[key: string]: any} => {
        let keys = Object.keys(config);
        let states: {[key: string]: any} = {}
        for (let i = 0; i < keys.length; ++i) {
            if (config[keys[i]].type == 'radio' || config[keys[i]].type == 'checkbox'
                || config[keys[i]].type == 'textarea') {
                states[keys[i]] = formInputRefs[keys[i]].current;
                continue;
            }

            if (formInputRefs[keys[i]].current == null) states[keys[i]] = null;
            
            if (config[keys[i]].type == 'input' || config[keys[i]].type == 'select') 
                states[keys[i]] = formInputRefs[keys[i]].current.value;
        }
        return states;
    }

    // input generator
    const generateInputJSX = (field_key: string): JSX.Element => {
        const input: FormInputConfig = config[field_key];

        // calculate the validity of this input
        let validity = null
        if (input.validator != undefined) {
            if (!Object.prototype.hasOwnProperty.call(formInputStates, field_key)) {
                validity = false;
                console.error(`No state data found for key => ${field_key}`);
            }
            else if (formInputStates[field_key] != null) 
                validity = input.validator(formInputStates[field_key])
        }

        switch (input.type) {
            case 'select':
                return (<FormGroup>
                    <label htmlFor={`#${field_key}_${formId}`}>{input.text}</label>
                    <FormSelect 
                        id={`#${field_key}_${formId}`}
                        innerRef={formInputRefs[field_key]}
                        >
                        {input.options.map((option: string, i: number) =>
                            <option key={i} value={option}>{option}</option>
                        )}
                    </FormSelect>
                </FormGroup>)
            case 'textarea':
                return (<FormGroup>
                    <label htmlFor={`#${field_key}_${formId}`}>{input.text}</label>
                    <FormTextarea 
                        onChange={(e: any) => {
                            formInputRefs[field_key].current = e.target.value;
                            let newState = {...formInputStates}
                            newState[field_key] = formInputRefs[field_key].current;
                            setFormInputStates(newState);
                        }}
                    />
                </FormGroup>);
            case 'input':
                const validProp: {[key: string]: boolean} = {};
                if (validity != null) {validProp['valid'] = validity; validProp['invalid'] = !validity;}
                return (<FormGroup>
                    {input.label.placeholder != true && 
                    <label htmlFor={`#${field_key}_${formId}`}>{input.label.text}</label>}
                    <FormInput id={`#${field_key}_${formId}`}
                        type={input.inputType}
                        {...validProp}
                        innerRef={formInputRefs[field_key]}
                        placeholder={input.label.placeholder == true ? input.label.text : undefined} />
                </FormGroup>)
            case 'radio':
                return(<FormGroup>
                    <label htmlFor={`#${field_key}_${formId}`}>{input.text}</label>
                    <div className="radio-group_">
                        {input.options.map((option: string, i: number) => 
                        <RadioBubble 
                            key={i}
                            selected={formInputStates[field_key] == option}
                            text={option}
                            onClick={() => {
                                let newState = {...formInputStates};
                                newState[field_key] = option;
                                formInputRefs[field_key].current = option;
                                setFormInputStates(newState);
                            }}
                        />)}
                    </div>
                </FormGroup>)
            case 'checkbox':
                return(<FormGroup>
                    <label htmlFor={`#${field_key}_${formId}`}>{input.text} {input.limit != undefined && `(choose up to ${input.limit})`}</label>
                    {input.options.map((option: string, i: number) => 
                        <div key={i}>
                            <FormCheckbox 
                                checked={formInputStates[field_key] != null 
                                    && formInputStates[field_key].has(option)}
                                onChange={() => {
                                    // check if limit reached
                                    if (input.limit != undefined
                                        && formInputStates[field_key] != null 
                                        && !formInputStates[field_key].has(option)
                                        && formInputStates[field_key].size == input.limit) return;

                                    if (formInputStates[field_key] != null 
                                    && formInputStates[field_key].has(option)) {
                                        // remove option from array
                                        let newState = {...formInputStates};
                                        formInputRefs[field_key].current.delete(option);
                                        newState[field_key] = formInputRefs[field_key].current;
                                        setFormInputStates(newState);
                                    }
                                    else {
                                        // add to array..
                                        let newState = {...formInputStates};
                                        if (formInputRefs[field_key].current == null)
                                            formInputRefs[field_key].current = new Set();
                                        
                                        formInputRefs[field_key].current.add(option);
                                        newState[field_key] = formInputRefs[field_key].current;
                                        setFormInputStates(newState);
                                    }
                                }}
                            >{option}</FormCheckbox>
                        </div>
                    )}
                </FormGroup>)
        }
        
        // default return ..
        return (<div />);
    }

    const getFormView = () => {
        return (<div className={`form-control_hk`}>
            {formTitle != undefined && <div className="form-title">{formTitle}</div>}
            
            
            <Form>
                {/* Generate the view for each of the form inputs */}
                {Object.keys(config).map((config_key: string, i: number) => {
                    let input_el = generateInputJSX(config_key);
                    return React.cloneElement(input_el, {key: i});
                })}
            </Form>

        </div>)
    }

    return [formInputStates, getFormView ()]
}

// Provided Validators
export const noSpace = (value: string): boolean => value.indexOf(' ') == -1;
export const alphaNumeric = (value: string): boolean => value.match(/^[0-9a-z]+$/) != null
export const validateEmail = (email: string): boolean => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
export const maxLen = (maxLen_: number): ((value: string) => boolean) => ((val: string) => val.length <= maxLen_)

// logic gates
export const $and = (fnA: (value: string) => boolean, fnB: (value: string) => boolean):  
    ((value: string) => boolean) => (value: string): boolean => fnA(value) && fnB(value)
    
export const $or = (fnA: (value: string) => boolean, fnB: (value: string) => boolean):  
((value: string) => boolean) => (value: string): boolean => fnA(value) || fnB(value)

// Custom Radio Bubbles
const RadioBubble = ({text, selected, onClick}: {text: string, selected: boolean, onClick: Function}) => {

    return (<div className={`form-control-radio ${selected ? `active` : ``}`} onClick={() => onClick()}>{text}</div>)
}
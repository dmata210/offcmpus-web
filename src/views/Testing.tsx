import React, {useRef, useEffect, useState} from 'react'
import {useSpring, motion, useTransform} from 'framer-motion'
import {RiBookOpenLine} from 'react-icons/ri'
import Input, {Validators, InputValidatorFlags, alnumOnly, noSpaces, $and, numbersOnly} from '../components/toolbox/form/Input'
import NumberPicker from '../components/toolbox/form/NumberPicker'
import Button from '../components/toolbox/form/Button'


const {
  numbersOnly: numbersOnlyValidator,
  minLen: minLenValidator
} = Validators;

const Testing = () => {

  return (<div style={{
    width: `300px`,
    height: `300px`,
    position: 'absolute',
    left: `50%`, top: `50%`,
    transform: `translateX(-50%) translateY(-50%)`
  }}>

    {/* <NumberPicker
      onChange={(val: number) => {}}
    /> */}
    <div style={{width: `100px`}}>
      <Button 
        text="Sample"
        bold={true}
        transformDisabled={true}
        textColor="white"
        background="#E0777D"
      />
    </div>

  </div>)
}

export default Testing
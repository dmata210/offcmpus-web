import React, {useRef, useEffect, useState} from 'react'
import {useSpring, motion, useTransform} from 'framer-motion'
import {RiBookOpenLine} from 'react-icons/ri'
import Input, {Validators, InputValidatorFlags, alnumOnly, noSpaces, $and, numbersOnly} from '../components/toolbox/form/Input'
import NumberPicker from '../components/toolbox/form/NumberPicker'

import FloatInput from '../components/toolbox/form/FloatInput'

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

    <NumberPicker
      onChange={(val: number) => {}}
    />
  </div>)
}

export default Testing
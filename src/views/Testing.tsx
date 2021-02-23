import React, {useRef, useEffect, useState} from 'react'
import {useSpring, motion, useTransform} from 'framer-motion'
import {RiBookOpenLine} from 'react-icons/ri'
import Input, {alnumOnly, noSpaces, $and, numbersOnly} from '../components/toolbox/form/Input'

import FloatInput from '../components/toolbox/form/FloatInput'

const Testing = () => {

  return (<div style={{
    width: `300px`,
    height: `300px`,
    position: 'absolute',
    left: `50%`, top: `50%`,
    transform: `translateX(-50%) translateY(-50%)`
  }}>
    <FloatInput prefix="#" onChange={(i: number) => {
    }} />
  </div>)
}

export default Testing
import React, {useRef, useEffect, useState} from 'react'
import {useSpring, motion, useTransform} from 'framer-motion'
import {RiBookOpenLine} from 'react-icons/ri'
import Input, {alnumOnly, noSpaces, $and, numbersOnly} from '../components/toolbox/form/Input'

const Testing = () => {

  return (<div style={{
    width: `300px`,
    height: `300px`,
    position: 'absolute',
    left: `50%`, top: `50%`,
    transform: `translateX(-50%) translateY(-50%)`
  }}>
  </div>)
}

export default Testing
import React from 'react'
import Button from './button/button'
import Display from './display/display'
import './calculator.css'
import { useDispatch, useSelector } from 'react-redux'
import { CAL_VALUE, DEL_VALUE, VALUE } from '../app/reducer/displaySlice'
import { ADD_CAL } from '../app/reducer/historySlice'

export default function Calculator() {
  const display = useSelector(store => store.display.display)
  console.log('render-display')
  const dispatch = useDispatch()
  const handleDisplay = (value) => {
    const action1 = CAL_VALUE(value)
    const action2 = DEL_VALUE()
    if (value !== 'C') {
      if ((display.slice(-1) === '+' ||
        display.slice(-1) === '-' ||
        display.slice(-1) === '*' ||
        display.slice(-1) === '/')
        && (value === '*' || value === '/')) {
      }
      else dispatch(action1)
    }
    else dispatch(action2)
  }
  const handlEqual = () => {
    const action1 = VALUE(display)
    const action2 = ADD_CAL(`${display}=${eval(display)}`)
    dispatch(action1)
    dispatch(action2)
  }
  return (
    <div className="calculator">
      <Display />
      <Button handleDisplay={handleDisplay} handlEqual={handlEqual} />
    </div>
  )
}
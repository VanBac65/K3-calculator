import React from 'react'
import { useSelector } from 'react-redux'
import './display.css'

export default function Display() {
    const display = useSelector(store => store.display)
    return (
        <div className="input" id="input">{display}</div>
    )
}
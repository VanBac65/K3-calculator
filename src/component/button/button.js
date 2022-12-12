import React from 'react'
import './button.css'

export default function Button({ handleDisplay, handlEqual }) {
    return (
        <div className="buttons">
            <div className="operators">
                {
                    ['+', '-', '*', '/'].map((item) => (
                        <div key={item} onClick={() => handleDisplay(item)}>{item}</div>
                    ))
                }
            </div>
            <div className='bottom'>
                <div className='numbers'>
                    {['C', '.', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                        <div key={item} className='number_button' onClick={() => handleDisplay(`${item}`)}>{item}</div>
                    ))}
                </div>
                <div className="equal" onClick={() => handlEqual()}>=</div>
            </div>
        </div>
    )
}
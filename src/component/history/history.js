import React from 'react'
import { useSelector } from 'react-redux'
import './history.css'

export default function History() {
    const history = useSelector(store => store.history)
    return (
        <div className='history'>
            {
                history.map((el, index) => {
                    return (
                        <div key={index}>
                            {el}
                        </div>
                    )
                })
            }
        </div>
    )
}
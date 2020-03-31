import React from 'react'
import './Button.css'
const Button = props => {
console.log(props);

    return (
        <button
            onClick={props.onClick}
            className='Button'
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button

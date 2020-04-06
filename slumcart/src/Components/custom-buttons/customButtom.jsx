import React from 'react'
import './customButton.scss'

export const Custombuttom = ({ children, ...otherProps }) => {
    return (
        <button className="custom-button" {...otherProps}>
            {children}
        </button>
    )
}

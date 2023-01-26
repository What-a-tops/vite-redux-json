import React from 'react'

const Button = ({onClick, color, isHidden, children}) => {
    return (
        <button 
        className={`${color}-600 ${isHidden} w-full block text-white py-2 px-2 mt-2 rounded hover:${color}-700`}
        onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
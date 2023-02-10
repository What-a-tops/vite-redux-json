import React from 'react'

const TextField = ({type, label, inputProps, onChange, value, pattern}) => {
return (
    <div>
        <div className='flex flex-col'>
        <label className='mt-5 text-gray text-sm font-light'>{label} (<span className='text-red-400'>*</span>)</label>
        </div>
        <input
            className=' py-2 px-3 p-3 w-full font-light shadow-sm rounded mb- border'
            type={type}
            {...inputProps}
            onChange={onChange}
            value={value}
            pattern={pattern}
            required
        />
    </div>
    )
}

export default TextField
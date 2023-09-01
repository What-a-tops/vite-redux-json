import React from 'react'

const TextField = ({type, label, inputProps, onChange, value, pattern = ""}) => {
return (
    <div>
        <div className='flex flex-col'>
        <label className='mt-2 text-gray text-sm font-light'>{label} (<span className='text-red-400'>*</span>)</label>
        </div>
        <input
            className=' py-2 px-3 p-3 w-full font-light text-sm shadow-sm border border-gray-400 focus:border-blue-500 outline-none rounded'
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
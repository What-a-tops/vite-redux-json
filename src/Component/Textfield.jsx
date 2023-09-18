import React from 'react'

const TextField = ({type, label, inputProps, onChange, value}) => {
return (
    <div>
        <div className='flex flex-col'>
            <label className='mt-2 text-gray text-sm font-light'>{label} <b className='text-red-400 text-sm'>*</b></label>
        </div>
        <input
            className='mt-2 py-2 px-3 p-3 w-full font-light text-sm shadow-sm border border-gray-400 focus:border-blue-500 outline-none rounded'
            type={type}
            onChange={onChange}
            value={value}
            {...inputProps}
        />
    </div>
    )
}

export default TextField
import React from 'react'

const TextField = ({label, inputProps, onChange, value}) => {
return (
    <div>
        <div className='flex flex-col'>
        <label className='mt-5 text-gray text-sm font-light'>{label} (<span className='text-red-400'>*</span>)</label>
        </div>
        <input
            className=' py-2 px-3 p-3 w-full font-light shadow-sm rounded mb- border'
            {...inputProps}
            onChange={onChange}
            value={value}
        />
    </div>
    )
}

export default TextField
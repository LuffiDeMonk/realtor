import React from 'react'

export default function CardPrice() {
    return (
        <div className="flex items-end gap-7">
            <p className='text-gray-600 line-through'>800,000</p>
            <h1 className='text-lg'>$4,000<span className='text-gray-300'>/<span className='text-sm'>mo</span></span></h1>
        </div>
    )
}

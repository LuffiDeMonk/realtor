import { BedDouble, Bath, Grid3x3 } from 'lucide-react'
import React from 'react'

export default function PropertySpecs() {
    return (
        <div className='my-5 flex items-center gap-3 text-xs sm:text-base'>
            <div className='text-gray-600 flex gap-1 items-center'>
                <BedDouble size={22} />
                <p>3</p>
            </div>
            <div className='text-gray-600 flex gap-1 items-center'>
                <Bath size={22} />
                <p>3</p>
            </div>
            <div className='text-gray-600 flex gap-1 items-center'>
                <Grid3x3 size={22} />
                <p>1,843 sqft</p>
            </div>

        </div>
    )
}

import { BedDouble, Bath, Grid3x3 } from 'lucide-react'
import React from 'react'

export default function PropertySpecs({
    beds,
    baths,
    area
}: {
    beds: string,
    baths: string,
    area: string
}) {
    return (
        <div className='my-5 flex items-center gap-3 text-xs sm:text-base'>
            <div className='text-gray-600 flex gap-1 items-center'>
                <BedDouble size={22} />
                <p>{beds}</p>
            </div>
            <div className='text-gray-600 flex gap-1 items-center'>
                <Bath size={22} />
                <p>{baths}</p>
            </div>
            <div className='text-gray-600 flex gap-1 items-center'>
                <Grid3x3 size={22} />
                <p>{`${area} sqft`}</p>
            </div>

        </div>
    )
}

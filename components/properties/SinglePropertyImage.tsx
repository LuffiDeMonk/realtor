import Image from 'next/image'
import React from 'react'

export default function SinglePropertyImage() {
    return (
        <div className="h-[35rem] w-full relative">
            <Image src='/banner.jpg' fill priority alt='Single property' className='object-cover' />
        </div>
    )
}

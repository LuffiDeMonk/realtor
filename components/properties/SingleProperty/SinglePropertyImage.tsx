import Image from 'next/image'
import React from 'react'

export default function SinglePropertyImage({ image }: { image: string }) {
    return (
        <div className="h-[35rem] w-full relative mb-10">
            <Image src={image ? image : '/banner.jpg'} fill priority alt='Single property' className='object-cover' />
        </div>
    )
}

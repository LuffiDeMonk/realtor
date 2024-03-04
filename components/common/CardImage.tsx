import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function CardImage({ image }: { image: string }) {
    return (
        <div className='h-80 md:h-64 lg:h-56 overflow-hidden relative'>
            <Image priority src={image ? image : '/banner.jpg'} fill alt='Default' className='object-cover group-hover:scale-105 transition-transform duration-500' />
        </div>
    )
}

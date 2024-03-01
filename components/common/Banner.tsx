import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'

const HomeBanner = () => {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-12 max-w-4xl w-full bg-transparent">
            <h1 className='text-3xl md:text-5xl lg:text-6xl text-center leading-tight text-white'>The Simplest <br /> Way to Find Property</h1>
            <p className='text-sm md:text-lg text-center text-white my-10'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts
            </p>
            <div className="flex items-center justify-center p-2">
                <Input
                    placeholder='Search'
                    className='max-w-lg lg:max-w-2xl rounded-full p-6 bg-white' />
            </div>
        </div>
    )
}

export default function Banner({ children }: { children?: React.ReactNode }) {
    return (
        <div className='h-screen relative'>
            <Image src='/banner.jpg' alt='Banner Image' fill className='object-cover bg-fixed -z-20' />
            {children ?
                children
                : <HomeBanner />}
        </div>
    )
}

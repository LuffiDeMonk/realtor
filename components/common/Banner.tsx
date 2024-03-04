import Image from 'next/image'
import React, { Suspense } from 'react'
import { Input } from '../ui/input'
import TextAnimationContainer, { Text } from '../animation/TextAnimation'

const HomeBanner = () => {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-12 max-w-4xl w-full bg-transparent">
            <TextAnimationContainer>
                <Text>
                    <h1 className='text-3xl md:text-5xl lg:text-6xl text-center leading-tight text-white'>The Simplest <br /> Way to Find Property</h1>
                </Text>
                <Text>
                    <p className='text-sm md:text-lg text-center text-white my-10'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts
                    </p>
                </Text>
                <Text>
                    <div className="flex items-center justify-center p-2">
                        <Input
                            placeholder='Search'
                            className='max-w-lg lg:max-w-2xl rounded-full p-6 bg-white text-base placeholder:text-base' />
                    </div>
                </Text>
            </TextAnimationContainer>
        </div>
    )
}

export default function Banner({ children }: { children?: React.ReactNode }) {
    return (
        <div className='h-screen relative bg-black bg-opacity-20'>
            <Image src='/banner.jpg' alt='Banner Image' fill className='object-cover bg-fixed -z-20' />
            {children ?
                <Suspense>
                    {children}
                </Suspense>
                : <HomeBanner />}
        </div>
    )
}

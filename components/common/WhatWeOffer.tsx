import React from 'react'
import Container from './Container'
import Image from 'next/image'
import CustomSubHeading from './CustomSubHeading'
import CustomHeading from './CustomHeading'
import CardAnimation from '../animation/CardAnimation'
import { WhatWeDo } from '@/constants/WhatWeDo'
import TextAnimationContainer from '../animation/TextAnimation'
import TitleAnimation from './BaseAnimation'

export default function WhatWeOffer() {
    return (
        <Container className='h-[180vh] md:h-[130vh] relative'>
            <Image src='/banner.jpg' alt='What we offer' fill className='absolute object-cover' />
            <div className="w-full lg:w-1/2 py-[6em] px-[2em] absolute inset-0 md:top-0 md:left-0 h-full bg-opacity-30 lg:bg-opacity-100 bg-black text-white flex items-center justify-evenly flex-col">
                <TitleAnimation
                    subtitle='Work Flow'
                    title='How It Works'
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 md:gap-y-10">
                    {
                        WhatWeDo.map((item, idx) => (
                            <CardAnimation index={idx} key={idx}>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="size-20 rounded-full bg-pink-400 text-3xl flex items-center justify-center">{item.id}</div>
                                    <h1 className='text-2xl text-center'>{item.title}</h1>
                                    <p className='text-base text-center'>{item.description}</p>
                                </div>
                            </CardAnimation>
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

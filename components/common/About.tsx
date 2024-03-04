'use client'

import React from 'react'
import Container from './Container'
import Image from 'next/image'
import CardAnimation from '../animation/CardAnimation'
import CountUp from 'react-countup'
import { AboutCounter } from '@/constants/AboutCounter'

export default function About() {
    return (
        <Container className='space-y-6'>
            <div className='flex flex-col gap-2 lg:flex-row items-center'>
                <div className='relative w-full lg:w-1/2 h-[80vh] lg:-z-10'>
                    <Image src='/banner.jpg' fill className='absolute object-cover' alt='About Us' />
                </div>
                <CardAnimation index={1} className='lg:-ml-32 lg:shadow-lg w-full lg:basis-[55%] bg-white lg:px-8 lg:py-12 space-y-5'>
                    <h1 className='text-[40px] font-semibold'>We Put People First.</h1>
                    <p className='text-base text-gray-500 leading-relaxed'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <p className='text-base text-gray-500 leading-relaxed'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word and and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                </CardAnimation>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-0.5">
                {
                    AboutCounter.map((item, idx) => (
                        <div className='flex gap-2 items-center' key={item.id}>
                            <CountUp
                                end={item.count}
                                duration={5}
                                className='text-[50px] font-semibold'
                            />
                            <p className='text-lg text-gray-400 leading-tight'>{item.title.split(' ')[0]}<br />{item.title.split(' ')[1]}</p>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}

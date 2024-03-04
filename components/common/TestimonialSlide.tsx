import Image from 'next/image'
import React from 'react'
import CardAnimation from '../animation/CardAnimation'

export default function TestimonialSlide({ index }: { index: number }) {
    return (
        <CardAnimation index={index} className='mb-16 mx-2'>
            <div className='space-y-4 p-3'>
                <p className='text-base text-gray-500 tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos magni aut nisi dignissimos eos repellat minima recusandae libero molestiae.</p>
                <div className="flex items-center gap-4">
                    <div className='relative size-16 rounded-full overflow-hidden'>
                        <Image
                            src='/banner.jpg'
                            alt="Testimonial Client"
                            fill
                            className='object-cover absolute'
                        />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>John Doe</h1>
                        <p className='text-sm text-gray-400'>Marketing Manager</p>
                    </div>
                </div>
            </div>
        </CardAnimation>
    )
}

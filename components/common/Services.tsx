import React from 'react'
import Container from './Container'
import CustomSubHeading from './CustomSubHeading'
import CustomHeading from './CustomHeading'
import { Services as DUMMY_DATA } from '@/constants/Services'
import CardAnimation from '../animation/CardAnimation'

export default function Services() {
    return (
        <Container className='my-12'>
            <CustomSubHeading
                title='our services'
            />
            <CustomHeading
                title='The smartest way to buy a home'
                className='my-5'
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-20">
                {
                    DUMMY_DATA.map((item, idx) => (
                        <CardAnimation key={item.id} index={idx}>
                            <div className='flex flex-col gap-2 items-center'>
                                <div className="text-pink-300 mb-6">
                                    {item.icon}
                                </div>
                                <h1 className='text-2xl text-center'>{item.title}</h1>
                                <p className='text-center text-base text-gray-800'>{item.description}</p>
                            </div>
                        </CardAnimation>
                    ))
                }
            </div>
        </Container>
    )
}

'use client'

import React, { useState } from 'react'
import Slider, { Settings } from 'react-slick'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from '@/lib/utils';
import SinglePropertyImage from './SinglePropertyImage';

interface Props {
    photos:
    {
        id: number,
        externalID: string,
        title: string,
        url: string,
    }[],
}


export default function CustomSlider({ photos }: Props) {
    const [active, setActive] = useState(1)
    const settings: Settings = {
        dots: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        customPaging: (i: number) => {
            return (
                <div
                    className={`size-2 hidden lg:flex items-center rounded-full transition-all hover:bg-pink-400 ${active === i ? 'bg-pink-400' : 'bg-gray-300'}`}
                />
            )
        },
        afterChange: (index: number) => setActive(index)
    }
    return (
        <Slider {...settings} className='mb-6 mx-4'>
            {
                photos.map((item, idx) => (

                    <SinglePropertyImage key={item.externalID} image={item.url} />
                )
                )
            }
        </Slider>
    )
}

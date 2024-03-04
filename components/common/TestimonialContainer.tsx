'use client'

import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from './Container';


export default function TestimonialContainer({ children }: { children: React.ReactNode }) {
    const [active, setActive] = React.useState(0)

    const settings = {
        customPaging: (i: number) => {
            return (
                <div
                    className={`size-3 flex items-center rounded-full transition-all hover:bg-pink-400 ${active === i ? 'bg-pink-400' : 'bg-gray-300'}`}
                />
            )
        },
        dots: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        afterChange: (index: number) => setActive(index)
    };
    return (
        <Container>
            <Slider {...settings} className='mx-3'>
                {children}
            </Slider>
        </Container>
    );
}

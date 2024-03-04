import React from 'react'
import TestimonialContainer from './TestimonialContainer'
import TestimonialSlide from './TestimonialSlide'

export default function TestimonialWrapper() {
    return (
        <TestimonialContainer>
            {
                Array(5).fill('1').map((_, idx) => (
                    <TestimonialSlide index={idx} key={idx} />
                ))
            }
        </TestimonialContainer>
    )
}

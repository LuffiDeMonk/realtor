import React from 'react'

import CardContainer from './PropertyCardContainer'
import PropertyCard from './PropertyCard'
import PropertyTitle from './PropertyTitle'

export default function OurAgents() {
    return (
        <CardContainer className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                Array(4).fill('a').map((_, idx) => (
                    <PropertyCard className='group' index={idx} key={idx}>
                        <PropertyTitle />
                    </PropertyCard>
                ))
            }
        </CardContainer>
    )
}

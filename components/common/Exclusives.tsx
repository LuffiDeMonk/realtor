import React from 'react'
import Container from './Container'
import PropertyCard from './PropertyCard'
import CardPrice from './CardPrice'
import PropertySpecs from './PropertySpecs'
import PropertyTitle from './PropertyTitle'
import CardContainer from './PropertyCardContainer'
import CardContainerAnimation from '../animation/CardContainerAnimation'

export default async function Exclusives() {
    return (
        <CardContainer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {Array(3).fill('0').map((_, idx) => {
                return (
                    <PropertyCard index={idx} key={idx}>
                        <CardPrice />
                        <PropertySpecs />
                        <PropertyTitle />
                    </PropertyCard>
                )
            })}
        </CardContainer>

    )
}

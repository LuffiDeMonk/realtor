import Banner from '@/components/common/Banner'
import BreadCrumb from '@/components/common/BreadCrumb'
import PropertyCard from '@/components/common/PropertyCard'
import CardContainer from '@/components/common/PropertyCardContainer'
import PropertyTitle from '@/components/common/PropertyTitle'
import React from 'react'

export default function Agent() {
    return (
        <>
            <Banner>
                <BreadCrumb />
            </Banner>
            <CardContainer className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    Array(6).fill('a').map((_, idx) => (
                        <PropertyCard index={idx} key={idx} className='group'>
                            <PropertyTitle />
                        </PropertyCard>
                    ))
                }

            </CardContainer>
        </>
    )
}

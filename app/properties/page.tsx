import Banner from '@/components/common/Banner'
import BreadCrumb from '@/components/common/BreadCrumb'
import CardPrice from '@/components/common/CardPrice'
import PropertyCard from '@/components/common/PropertyCard'
import CardContainer from '@/components/common/PropertyCardContainer'
import PropertySpecs from '@/components/common/PropertySpecs'
import PropertyTitle from '@/components/common/PropertyTitle'
import PropertyFilter from '@/components/properties/PropertyFilter'
import React from 'react'

type Props = {
    searchParams?: {
        purpose?: string,
        category?: string,
        sort?: string
    }
}

export default function Properties({ searchParams }: Props) {

    const purpose = searchParams?.purpose || ''
    const category = searchParams?.category || ''
    const sort = searchParams?.sort || ''

    return (
        <>
            <Banner>
                <BreadCrumb />
            </Banner>
            <PropertyFilter />
            <CardContainer>
                {
                    Array(9).fill('a').map((_, idx) => (
                        <PropertyCard index={idx} key={idx}>
                            <CardPrice />
                            <PropertySpecs />
                            <PropertyTitle />
                        </PropertyCard>
                    ))
                }
            </CardContainer>
        </>
    )
}

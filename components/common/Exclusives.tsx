import React from 'react'
import PropertyCard from './PropertyCard'
import CardPrice from './CardPrice'
import PropertySpecs from './PropertySpecs'
import PropertyTitle from './PropertyTitle'
import CardContainer from './PropertyCardContainer'
import { getPropertyData } from '@/lib/fetchData/getPropertyData'

export default async function Exclusives() {
    const fetchProperty: Promise<PropertyDetails> = getPropertyData({ hitsPerPage: 3, page: 1 })
    const PropertyData = await fetchProperty
    return (
        <CardContainer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {PropertyData.hits.map((property, idx) => {
                return (
                    <PropertyCard cardImage={property.coverPhoto.url} index={idx} key={property.id}>
                        <CardPrice price={property.price.toString()} />
                        <PropertySpecs
                            area={property.area.toFixed(2).toString()}
                            baths={property.baths.toString()}
                            beds={property.rooms.toString()}
                        />
                        <PropertyTitle id={property.externalID} title={property.title.toLowerCase()} />
                    </PropertyCard>
                )
            })}
        </CardContainer>

    )
}

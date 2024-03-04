import React from 'react'
import CardContainer from '../common/PropertyCardContainer'
import PropertyCard from '../common/PropertyCard'
import CardPrice from '../common/CardPrice'
import PropertySpecs from '../common/PropertySpecs'
import PropertyTitle from '../common/PropertyTitle'
import { getPropertyData } from '@/lib/fetchData/getPropertyData'

type Props = {
    purpose?: string,
    category?: string,
    sort?: string
}

export default async function PropertyCardWrapper({ purpose, category, sort }: Props) {

    const getProperties: Promise<PropertyDetails> = getPropertyData({
        hitsPerPage: 5,
        page: 1,
        purpose,
        category,
        sort
    })
    const Properties = await getProperties
    return (
        <CardContainer>
            {
                Properties.hits.map((item, idx) => (
                    <PropertyCard index={idx} key={idx} cardImage={item.coverPhoto.url}>
                        <CardPrice
                            price={item.price.toString()}
                        />
                        <PropertySpecs
                            area={item.area.toFixed(2).toString()}
                            baths={item.baths.toString()}
                            beds={item.rooms.toString()}
                        />
                        <PropertyTitle
                            id={item.externalID}
                            title={item.title.toLowerCase()}
                        />
                    </PropertyCard>
                ))
            }
        </CardContainer>
    )
}

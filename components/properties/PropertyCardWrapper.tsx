import React from 'react'
import CardContainer from '../common/PropertyCardContainer'
import PropertyCard from '../common/PropertyCard'
import CardPrice from '../common/CardPrice'
import PropertySpecs from '../common/PropertySpecs'
import PropertyTitle from '../common/PropertyTitle'
import { getPropertyData } from '@/lib/fetchData/getPropertyData'
import Container from '../common/Container'
import { FileSearch } from 'lucide-react'
import PaginationContainer from './Pagination'

type Props = {
    purpose?: string,
    category?: string,
    sort?: string,
    page?: string
}

export default async function PropertyCardWrapper({ purpose, category, sort, page }: Props) {

    const getProperties: Promise<PropertyDetails> = getPropertyData({
        hitsPerPage: 6,
        page,
        purpose,
        category,
        sort,
    })
    const Properties = await getProperties


    if (Properties.hits.length === 0) {
        return (
            <Container className='h-[30rem] my-0 bg-pink-50 rounded-lg flex flex-col gap-6 items-center justify-center'>
                <div className='text-gray-300'>
                    <FileSearch size={80} />
                </div>
                <div>
                    <h1 className='text-4xl font-semibold text-center text-gray-300'>Well, this is awkward.</h1>
                    <p className="text-sm text-center text-gray-300">No results were found for your search filter. Please try different filter</p>
                </div>
            </Container>
        )
    }
    return (
        <>
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
            <PaginationContainer
                currentPage={Properties.page}
                totalPages={Properties.nbPages}
            />
        </>
    )
}

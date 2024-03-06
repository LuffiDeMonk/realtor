import Banner from '@/components/common/Banner'
import BreadCrumb from '@/components/common/BreadCrumb'
import Container from '@/components/common/Container'
import FeatureContainer from '@/components/properties/FeatureContainer'
import CustomSlider from '@/components/properties/SingleProperty/CustomSlider'
import PropertyTabDetails from '@/components/properties/SingleProperty/PropertyTabDetails'
import PropertyTabs from '@/components/properties/SingleProperty/PropertyTabs'
import { GetSingleProperty } from '@/lib/fetchData/getSingleProperty'
import React from 'react'

export default async function Single({ params }: { params: { slug: string } }) {
    const getSingleProperty: Promise<PropertyCardDetails> = GetSingleProperty(params.slug!)
    const PropertyDetails = await getSingleProperty
    return (
        <>
            <Banner>
                <BreadCrumb />
            </Banner>
            <Container>
                <CustomSlider photos={PropertyDetails.photos} />
                <div className="my-16 flex items-center gap-4 flex-col">
                    {/* <p className='text-xl text-gray-500 text-center'>{PropertyDetails.location.map(item => `${item.name} / `)}</p> */}
                    <h1 className='text-2xl lg:text-4xl text-center capitalize'>{PropertyDetails.title.toLowerCase()}</h1>
                </div>
                <PropertyTabs>
                    <FeatureContainer
                        value='account'
                        area={PropertyDetails.area}
                        owner={PropertyDetails.contactName}
                        bathRooms={PropertyDetails.baths}
                        bedRooms={PropertyDetails.rooms}
                        phoneNumber={PropertyDetails.phoneNumber.mobile}
                        completionStatus={PropertyDetails.completionStatus}
                        indyScore={PropertyDetails.indyScore}
                        cityLevelScore={PropertyDetails.cityLevelScore}
                        randBoostScore={PropertyDetails.randBoostScore}
                    />
                    <PropertyTabDetails
                        value='password'
                        details={PropertyDetails.description}
                        lat={PropertyDetails.geography.lat}
                        lng={PropertyDetails.geography.lng}
                    />
                </PropertyTabs>
            </Container>
        </>
    )
}

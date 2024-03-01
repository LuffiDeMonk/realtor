import Banner from '@/components/common/Banner'
import BreadCrumb from '@/components/common/BreadCrumb'
import Container from '@/components/common/Container'
import FeatureContainer from '@/components/properties/FeatureContainer'
import PropertyTabDetails from '@/components/properties/PropertyTabDetails'
import PropertyTabs from '@/components/properties/PropertyTabs'
import SinglePropertyImage from '@/components/properties/SinglePropertyImage'
import React from 'react'

export default function Single() {
    return (
        <>
            <Banner>
                <BreadCrumb />
            </Banner>
            <Container>
                <SinglePropertyImage />
                <div className="my-10 flex items-center gap-4 flex-col">
                    <p className='text-xl text-gray-500'>Oakland</p>
                    <h1 className='text-2xl lg:text-4xl'>The Blue Sky Home</h1>
                </div>
                <PropertyTabs>
                    <FeatureContainer value='account' />
                    <PropertyTabDetails value='password' />
                </PropertyTabs>
            </Container>
        </>
    )
}

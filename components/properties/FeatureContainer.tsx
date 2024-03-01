import React from 'react'
import Container from '../common/Container'
import PropertyFeatureCard from './PropertyFeatureCard'
import { TabsContent } from '../ui/tabs'

export default function FeatureContainer({ value }: { value: string }) {
    return (
        <TabsContent value={value}>
            <Container className='my-0 grid gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start lg:place-items-center'>
                <PropertyFeatureCard
                    title='Bed rooms'
                    value='2'
                />
                <PropertyFeatureCard
                    title='Bath rooms'
                    value='1'
                />
                <PropertyFeatureCard
                    title='Lot Area'
                    value='1250 sq. ft'
                />
                <PropertyFeatureCard
                    title='Lot Area'
                    value='2'
                />
            </Container >
        </TabsContent>
    )
}

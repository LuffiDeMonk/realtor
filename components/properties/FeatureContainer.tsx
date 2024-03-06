import React from 'react'
import Container from '../common/Container'
import PropertyFeatureCard from './SingleProperty/PropertyFeatureCard'
import { TabsContent } from '../ui/tabs'

export default function FeatureContainer({ value, bedRooms, bathRooms, area, phoneNumber, completionStatus, owner, indyScore, cityLevelScore, randBoostScore }: { value: string, bedRooms: number, bathRooms: number, area: number, phoneNumber: string, completionStatus: string, owner: string, indyScore: number, cityLevelScore: number, randBoostScore: number }) {
    return (
        <TabsContent value={value}>
            <Container className='my-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start lg:place-items-center'>
                <ul>
                    <PropertyFeatureCard
                        title='Bed rooms'
                        value={bedRooms.toString()}
                    />
                    <PropertyFeatureCard
                        title='Bath rooms'
                        value={bathRooms.toString()}
                    />
                    <PropertyFeatureCard
                        title='Lot Area'
                        // value='1250 sq. ft'
                        value={`${area.toFixed(2).toString()} sq. ft`}
                    />
                </ul>
                <ul>
                    <PropertyFeatureCard
                        title='Owner'
                        value={owner}
                    />
                    <PropertyFeatureCard
                        title='Contact Information'
                        value={phoneNumber}
                    />
                    <PropertyFeatureCard
                        title='Completion Status'
                        value={completionStatus}
                    />
                </ul>
                <ul>
                    <PropertyFeatureCard
                        title='Indy Score'
                        value={indyScore.toString()}
                    />
                    <PropertyFeatureCard
                        title='City Level Score'
                        value={cityLevelScore.toString()}
                    />
                    <PropertyFeatureCard
                        title='Rand Boost Score'
                        value={randBoostScore.toString()}
                    />
                </ul>

            </Container >
        </TabsContent>
    )
}

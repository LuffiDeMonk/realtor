import React from 'react'

import CardContainer from './PropertyCardContainer'
import PropertyCard from './PropertyCard'
import PropertyTitle from './PropertyTitle'
import { GetAgentDetails } from '@/lib/fetchData/getAgentDetails'

export default async function OurAgents() {
    const AgentDetails: Promise<AgentDetails> = GetAgentDetails({})
    const data = await AgentDetails
    return (
        <CardContainer className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                data.agents.map((agent, idx) => (
                    <PropertyCard className='group' index={idx} key={idx} cardImage={agent.photo.href}>
                        <PropertyTitle
                            id={''}
                            title={agent.person_name}
                        />
                    </PropertyCard>
                ))
            }
        </CardContainer>
    )
}

import React from 'react'
import { TabsContent } from '../../ui/tabs'
import Container from '../../common/Container'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./CustomMap'), {
    ssr: false, loading() {
        return (<>Loading....</>)
    },
})

export default async function PropertyTabDetails({ value, details, lat, lng }: { value: string, details: string, lat: number, lng: number }) {
    return (
        <TabsContent value={value} className='w-full'>
            <Container className='my-0 p-4'>

                {details.includes('<') || details.includes('>') ? <div className='text-gray-400 text-base leading-relaxed' dangerouslySetInnerHTML={{ __html: details }} /> : <p className='text-gray-400 text-base leading-relaxed'>{details}</p>}
            </Container>
            <Container className='relative -z-10 my-0'>
                <Map lat={lat} lng={lng} />
            </Container>
        </TabsContent>
    )
}

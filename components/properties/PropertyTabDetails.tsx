import React from 'react'
import { TabsContent } from '../ui/tabs'
import Container from '../common/Container'

export default function PropertyTabDetails({ value }: { value: string }) {
    return (
        <TabsContent value={value} className='w-full'>
            <Container className='my-0 p-4'>
                <p className='text-gray-400 text-base leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugiat veritatis quas aliquam dicta illo eveniet officia nesciunt nulla magni, dolorum asperiores tempore dignissimos facilis tenetur sint enim hic eos reiciendis eius est quaerat ex? Adipisci minus dicta doloremque praesentium quas est veritatis.</p>
            </Container>
        </TabsContent>
    )
}

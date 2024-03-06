import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '../../ui/tabs'
import { Separator } from '../../ui/separator'

export default function PropertyTabs({ children }: { children: React.ReactNode }) {
    return (
        <Tabs defaultValue="account" className='w-full'>
            <TabsList className='flex items-center gap-5 bg-transparent'>
                <TabsTrigger value="account" className='text-sm lg:text-base text-gray-600'>Features</TabsTrigger>
                <TabsTrigger value="password" className='text-sm lg:text-base text-gray-600'>Description</TabsTrigger>
            </TabsList>
            <Separator className='my-10 bg-gray-100 h-0.5 w-full' />
            {children}
        </Tabs>
    )
}

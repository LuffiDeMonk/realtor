import Navbar from '@/components/common/Navbar'
import React from 'react'

export default function Template({
    children
}: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

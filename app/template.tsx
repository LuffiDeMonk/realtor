import Navbar from '@/components/common/Navbar'
import React, { Suspense } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Suspense>
                <Navbar />
            </Suspense>
            {children}
        </>
    )
}

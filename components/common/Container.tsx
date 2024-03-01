import React from 'react'
import { cn } from '@/lib/utils'

export default function Container({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <div className={cn('max-w-7xl mx-auto px-4 my-20', className)}>{children}</div>
    )
}

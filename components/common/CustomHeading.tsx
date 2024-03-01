import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    title: string,
    className?: string
}

export default function CustomHeading({ title, className }: Props) {
    return (
        <h1 className={cn('text-2xl md:text-3xl lg:text-5xl text-center font-semibold my-5', className)}>{title}</h1>
    )
}

'use client'

import React from 'react'
import { Navlinks as Links } from '@/constants/Navlinks'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
    className?: string
}

export default function Navlinks({ className }: Props) {
    const path = usePathname()
    return (
        <div className={cn('items-center gap-12', className)}>
            {
                Links.map(item => (
                    <React.Fragment key={item.id}>
                        <Link
                            href={item.path}
                            className={`text-md ${path === item.path ? 'text-pink-500' : 'text-black'}`}
                        >
                            {item.name}
                        </Link>
                    </React.Fragment>
                ))
            }
        </div>
    )
}

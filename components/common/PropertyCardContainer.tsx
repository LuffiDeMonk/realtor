import React from 'react'
import Container from './Container'
import { cn } from '@/lib/utils'

export default function CardContainer({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <Container className={cn('grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20', className)}>
            {children}
        </Container>
    )
}

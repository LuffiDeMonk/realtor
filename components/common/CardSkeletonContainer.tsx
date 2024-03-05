import React from 'react'
import CardContainer from './PropertyCardContainer'
import { Skeleton } from '../ui/skeleton'
import CardAnimation from '../animation/CardAnimation'
import { cn } from '@/lib/utils'

export default function CardSkeletonContainer({ skeletonCount, containerStyles, cardStyles }: { skeletonCount: number, containerStyles?: string, cardStyles?: string }) {
    return (
        <CardContainer className={containerStyles}>
            {
                Array(skeletonCount).fill('1').map((_, idx) => (
                    <div key={idx}>
                        <Skeleton className={cn('h-80', cardStyles)} />
                    </div>
                ))
            }
        </CardContainer>
    )
}

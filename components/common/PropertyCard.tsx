import React from 'react'
import CardImage from './CardImage'
import CardInfo from './CardInfo'
import CardPrice from './CardPrice'
import PropertyTitle from './PropertyTitle'
import PropertySpecs from './PropertySpecs'
import { cn } from '@/lib/utils'
import CardAnimation from '../animation/CardAnimation'

export default function PropertyCard({ children, className, index }: { children: React.ReactNode, className?: string, index: any }) {
    return (
        <CardAnimation index={index}>
            <div className={cn('', className)}>
                {/* card image container */}
                <CardImage />
                <CardInfo>
                    {children}
                </CardInfo>
            </div>
        </CardAnimation>
    )
}

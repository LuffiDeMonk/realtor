'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'


export default function CardAnimation({ children, index, className }: { children: React.ReactNode, index: number, className?: string }) {
    const cardRef = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(cardRef, { once: true })
    return (
        <motion.div
            className={cn(className)}
            ref={cardRef}
            initial={{
                opacity: 0,
                y: 50
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true
            }}
            transition={{
                type: 'tween',
                duration: 0.3,
                delay: index * 0.1
            }}
        >
            {children}
        </motion.div>
    )
}

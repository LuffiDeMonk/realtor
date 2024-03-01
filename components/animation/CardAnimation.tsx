'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'


export default function CardAnimation({ children, index }: { children: React.ReactNode, index: number }) {
    const cardRef = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(cardRef, { once: true })
    return (
        <motion.div
            ref={cardRef}
            initial={{
                opacity: 0,
                y: 50
            }}
            animate={isInView && {
                opacity: 1,
                y: 0
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

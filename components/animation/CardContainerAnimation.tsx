'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function CardContainerAnimation({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1,
                transition: {
                    staggerChildren: 1,
                    when: 'afterChildren'
                }
            }}

        >
            {children}
        </motion.div>
    )
}

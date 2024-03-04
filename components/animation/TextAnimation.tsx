'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const TextAnimation = {
    hidden: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            staggerChildren: 0.1,
            type: 'Tween'
        }
    }
}

export const Text = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <motion.div
            variants={TextAnimation}
            className={cn(className)}
        >{children}</motion.div>
    )
}

export default function TextAnimationContainer({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <motion.div
            initial='hidden'
            whileInView='animate'
            viewport={{
                once: true
            }}
            variants={TextAnimation}
            className={cn(className)}
        >
            {children}
        </motion.div>
    )
}

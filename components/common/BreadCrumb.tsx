'use client'

import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import TextAnimationContainer, { Text } from '../animation/TextAnimation'



export default function BreadCrumb() {
    const path = usePathname()
    const pathnames = path.split('/').filter(item => item).slice(0, 1)

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 space-y-6 text-white">
            <TextAnimationContainer className="flex items-center justify-center gap-2">
                <Text>
                    <Link href='/' className='text-2xl '>Home</Link>
                </Text>
                {pathnames.length > 0 && <Separator orientation='vertical' className='w-0.5 h-5 bg-gray-600' />}
                {
                    pathnames.map((item, idx) => {
                        let href = `/${item}`
                        return (
                            <React.Fragment key={idx}>
                                <Text>

                                    {
                                        pathnames.length === idx + 1 ? <p className='capitalize text-2xl '>{item}</p> : <Link href={href} className='capitalize text-2xl '>{item}</Link>
                                    }
                                </Text>

                                {pathnames.length !== idx + 1 && <Separator orientation='vertical' className='w-0.5 h-5 bg-gray-600' />}
                            </React.Fragment>
                        )
                    })
                }
            </TextAnimationContainer>
            <TextAnimationContainer>
                <Text>
                    <h1 className='text-5xl font-semibold text-center capitalize'>{path.split('/').filter(item => item)}</h1>
                </Text>
            </TextAnimationContainer>
        </div>
    )
}

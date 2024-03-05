'use client'

import React, { Suspense, useEffect, useRef, useState } from 'react'
import Container from './Container'
import Navlinks from './Navlinks'
import MobileNavigation from './MobileNavigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Navbar() {
    const [scroll, setScroll] = useState(false)
    const handleScroll = () => {
        if (window) {
            if (window.scrollY > 60) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scroll])
    return (
        <nav className={cn('fixed w-full top-0 z-50 transition-all duration-300', `${scroll ? "bg-white shadow-sm" : ""}`)}>
            <Container className='my-0 px-5 py-8 bg-transparent flex items-center justify-between'>
                <Link href='/' className='text-2xl font-bold select-none'>Uptown</Link>
                <Navlinks className='hidden lg:flex' />
                <MobileNavigation />
            </Container>
        </nav>
    )
}

'use client'

import React from 'react'
import Container from '../common/Container'
import { Button } from '../ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ currentPage, totalPages }: { currentPage: number, totalPages: number }) {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    let pageArray = []
    const handleClick = (idx: number) => {
        const params = new URLSearchParams(searchParams)
        let page = idx + 1
        params.set('page', page.toString())
        replace(`${pathname}?${params}`, { scroll: false })
    }
    const handlePrev = () => {
        const params = new URLSearchParams(searchParams)
        let prevPage = currentPage - 1
        params.set('page', prevPage.toString())
        replace(`${pathname}?${params}`, { scroll: false })
    }
    const handleNext = () => {
        const params = new URLSearchParams(searchParams)
        let prevPage = currentPage + 1
        params.set('page', prevPage.toString())
        replace(`${pathname}?${params}`, { scroll: false })
    }

    for (let i = currentPage - 3; i < currentPage + 3; i++) {
        if (i < 1) continue
        if (i > totalPages) break
        pageArray.push(i)
    }
    return (
        <Container className='flex items-center justify-center gap-2'>
            {currentPage > 1 && <Button size='icon' onClick={handlePrev}>
                <ChevronLeft />
            </Button>}
            {
                pageArray.map((index, idx) => {
                    if (index >= currentPage) {
                        return (
                            <Button onClick={() => handleClick(idx)} key={idx} variant={index === currentPage ? 'default' : 'secondary'} className='rounded-full size-10'>{idx + 1}</Button>
                        )
                    }
                })
            }
            <Button size='icon' onClick={handleNext}>
                <ChevronRight />
            </Button>
        </Container>
    )
}

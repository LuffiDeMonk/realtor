'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { AlignCenter } from 'lucide-react'
import { Navlinks } from '@/constants/Navlinks'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function MobileNavigation() {
    const search = useSearchParams()
    return (
        <section className='lg:hidden'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button size='icon' variant='ghost'>
                        <AlignCenter size={20} />
                    </Button>
                </SheetTrigger>
                <SheetContent side='right'>
                    <div className="p-4 mt-12 flex flex-col gap-10">
                        {
                            Navlinks.map(item => (
                                <Link key={item.id} href={item.path} className='text-xl'>{item.name}</Link>
                            ))
                        }
                        <Link
                            className='text-xl'
                            href={{
                                pathname: '/properties',
                                search: search.toString()
                            }}>Properties</Link>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

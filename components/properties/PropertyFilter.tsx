'use client'

import React from 'react'
import Container from '../common/Container'
import { Form } from '../ui/form'
import { useForm } from 'react-hook-form'
import { CategorySelect, PurposeSelect, PriceSelect } from '@/constants/Select_Values'
import FilterSelect from './FilterSelect'
import { Button } from '../ui/button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const FormType = z.object({
    purpose: z.string().optional(),
    category: z.string().optional(),
    sort: z.string().optional()
})

export default function PropertyFilter() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const methods = useForm<z.infer<typeof FormType>>({
        resolver: zodResolver(FormType),
        defaultValues: {
            purpose: searchParams.get('purpose') || '',
            category: searchParams.get('category') || '',
            sort: searchParams.get('sort') || ''
        }
    })
    const onSubmit = (data: z.infer<typeof FormType>) => {
        const params = new URLSearchParams(searchParams)
        const entries = Object.entries(data)
        if (entries) {
            entries.forEach(entry => entry[1] !== undefined ? params.set(entry[0], entry[1]) : params.delete(entry[0]))
            replace(`${pathname}?${params.toString()}`, { scroll: false })
        }
    }
    return (
        <Container className='my-10 space-y-6'>
            <h1 className='text-xl font-semibold'>Search Filters</h1>
            <Form {...methods}>
                <form className='flex flex-col lg:flex-row lg:items-center justify-between gap-4' onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className='flex flex-col lg:flex-row lg:items-center gap-4'>
                        <FilterSelect
                            name='purpose'
                            selectValues={PurposeSelect}
                            control={methods.control}
                            title='Select your purpose'
                        />
                        <FilterSelect
                            name='category'
                            selectValues={CategorySelect}
                            control={methods.control}
                            title='Select a category'
                        />
                        <FilterSelect
                            name='sort'
                            selectValues={PriceSelect}
                            control={methods.control}
                            title='Sort by price'
                        />
                    </div>
                    <div className='flex flex-col lg:flex-row gap-3'>
                        <Button>Search</Button>
                        <Button
                            variant='secondary'
                            onClick={() => {
                                methods.reset({
                                    category: '',
                                    purpose: '',
                                    sort: ''
                                })
                            }}
                        >
                            Clear Search
                        </Button>
                    </div>
                </form>
            </Form>
        </Container>
    )
}

import Link from 'next/link'
import React from 'react'

export default function PropertyTitle({ title, id }: { title: string, id: string }) {
    return (
        <div className="flex flex-col gap-2">
            <Link href={`/properties/${id}`} className='text-lg font-semibold line-clamp-2 capitalize'>{title}</Link>
            <p className='text-gray-400 text-lg'>Oakland</p>
        </div>
    )
}

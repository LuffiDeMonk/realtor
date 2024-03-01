import React from 'react'
import CardPrice from './CardPrice'
import PropertyTitle from './PropertyTitle'

export default function CardInfo({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white -mt-12 relative w-[85%] p-6 ml-6 shadow-sm group-hover:shadow-lg">
            {children}
        </div>
    )
}

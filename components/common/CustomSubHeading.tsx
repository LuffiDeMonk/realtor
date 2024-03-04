import React from 'react'
import { Text } from '../animation/TextAnimation'

export default function CustomSubHeading({ title }: { title: string }) {
    return (
        <h1 className="text-center uppercase text-[10px] text-pink-500 tracking-widest overflow-hidden before:bg-pink-500 before:content=[''] before:inline-block before:h-0.5 before:relative before:align-middle before:w-12 before:right-2 before:-ml-1/2 after:bg-pink-500 after:content=[''] after:inline-block after:h-0.5 after:relative after:align-middle after:w-12 after:left-2 after:-mr-1/2">{title}</h1>
    )
}

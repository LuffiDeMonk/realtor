import { Check } from 'lucide-react'
import React from 'react'

export default function PropertyFeatureCard({ title, value }: { title: string, value: string }) {
    return (
        <li className="flex items-center gap-2 text-gray-400">
            <Check size={15} />
            <p>{title}: {value}</p>
        </li>
    )
}

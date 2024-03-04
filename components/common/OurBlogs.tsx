import React from 'react'
import CardContainer from './PropertyCardContainer'
import CardImage from './CardImage'
import CardAnimation from '../animation/CardAnimation'
import { GetBlogPost } from '@/lib/fetchData/getBlogPost'

export default async function OurBlogs() {
    const getBlogs: Promise<BlogResult> = GetBlogPost()
    const data = await getBlogs
    return (
        <CardContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.posts.map((item, idx) => (
                <CardAnimation key={idx} index={idx}>
                    <div className='space-y-2'>
                        <h1 className='text-lg md:line-clamp-1 cursor-pointer transition-colors hover:text-pink-400'>{item.title}</h1>
                        <p className='text-gray-300 text-xs'>24 July, 2019</p>
                        <CardImage image='/banner.jpg' />
                        <p className='text-gray-400 line-clamp-3'>{item.body}</p>
                    </div>
                </CardAnimation>
            ))}
        </CardContainer>
    )
}

import Banner from "@/components/common/Banner"
import BreadCrumb from "@/components/common/BreadCrumb"
import CardSkeletonContainer from "@/components/common/CardSkeletonContainer"
import PropertyCardWrapper from "@/components/properties/PropertyCardWrapper"
import PropertyFilter from "@/components/properties/PropertyFilter"
import { Suspense } from "react"


type Props = {
    searchParams?: {
        purpose?: string,
        category?: string,
        sort?: string
    }
}

export default function Properties({ searchParams }: Props) {
    const purpose = searchParams?.purpose || ''
    const category = searchParams?.category || ''
    const sort = searchParams?.sort || ''

    return (
        <>
            <Banner>
                <BreadCrumb />
            </Banner>
            <Suspense>
                <PropertyFilter />
            </Suspense>
            <Suspense fallback={<CardSkeletonContainer skeletonCount={6} />} key={purpose + category + sort}>
                <PropertyCardWrapper
                    purpose={purpose}
                    category={category}
                    sort={sort}
                />
            </Suspense>
        </>
    )
}

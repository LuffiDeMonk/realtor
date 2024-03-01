interface PropertyDetails {
    hits: [
        {
            id: number,
            price: number,
            product: string,
            location: [
                {
                    id: number,
                    name: string,
                }
            ],
            rooms: number,
            baths: number,
            area: number,
            coverPhoto: {
                url: string
            }
        }
    ],
    nbHits: number,
    page: number,
    exhaustiveNbHits: boolean
}
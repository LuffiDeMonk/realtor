interface PropertyDetails {
    hits: PropertyCardDetails[],
    nbHits: number,
    page: number,
    exhaustiveNbHits: boolean,
    nbPages: number
}

interface PropertyCardDetails {
    id: number,
    externalID: string,
    price: number,
    product: string,
    title: string,
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

interface AgentDetails {
    matching_rows: number,
    agents: AgentCardDetails[]
}

interface AgentCardDetails {
    person_name: string,
    recently_sold: {
        count: number
    },
    photo: {
        href: string
    }
}

interface BlogResult {
    posts: Blog[]
}

interface Blog {
    title: string,
    body: string,
    id: string,
    reactions: string,
}
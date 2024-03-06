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
    geography: {
        lat: number,
        lng: number
    },
    rooms: number,
    baths: number,
    area: number,
    description: string,
    coverPhoto: {
        url: string
    },
    photos:
    {
        id: number,
        externalID: string,
        title: string,
        url: string,
    }[],
    phoneNumber: {
        mobile: string,
        phone: string,
    },
    contactName: string,
    cityLevelScore: number,
    completionStatus: string,
    randBoostScore: number,
    indyScore: number
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
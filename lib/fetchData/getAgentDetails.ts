type Props = {
    page?: string,
    limit?: string,
    types?: string,
    sort?: string
}

export async function GetAgentDetails({ limit, page, sort, types }: Props) {
    const response = await fetch(`https://realtor.p.rapidapi.com/agents/list?postal_code=11234${page ? `&offset=${page}` : '&offset=0'}${limit ? `&limit=${limit}` : '&limit=4'}${types ? `&types=${types}` : "&types=agent"}${sort ? `&sort=${sort}` : '&sort=recent_activity_high'}`,
        {
            headers: {
                'X-RapidAPI-Key': "46ef4c2a7cmsh99e0a9d844ebf28p12cfaejsn906750f28cf8",
                'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
            },
            next: {
                revalidate: 3600
            }
        })
    if (!response.ok) {
        throw new Error('Error while fetching agent information')
    }
    return response.json()
}
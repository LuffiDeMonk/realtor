export const getPropertyData = async ({ hitsPerPage, page }: { hitsPerPage?: number, page?: string }) => {
    const response = await fetch(`https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&hitsPerPage=${hitsPerPage}&page=${page}`, {
        headers: {
            'X-RapidAPI-Key': "46ef4c2a7cmsh99e0a9d844ebf28p12cfaejsn906750f28cf8",
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        },
        next: {
            revalidate: 3600
        }

    })
    if (!response.ok) {
        throw new Error('Error while fetching data')
    }
    return response.json()
}

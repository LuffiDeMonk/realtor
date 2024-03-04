export async function GetBlogPost() {
    const response = await fetch(`https://dummyjson.com/posts?limit=4&skip=0`)
    if (!response.ok) {
        throw new Error('Error while fetching blogs')
    }
    return response.json()
}
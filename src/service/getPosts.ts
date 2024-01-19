
export const getAllPosts = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        return response.json()
    }
    catch (error) {
        console.error(error)
    }
}

export const getPostsBySearch = async (search: string) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
        return response.json()
    }
    catch (error) {
        console.error(error)
    }
}

export const getPostBeId = async (id: number) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response.json()
    }
    catch (error) {
        console.error(error)
    }
}
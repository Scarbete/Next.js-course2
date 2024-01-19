'use client'
import { FormEventHandler, useState } from 'react'
import { usePosts } from '@/store'



const PostsSearch = () => {
    const [ search, setSearch ] = useState<string>('')
    const { getPostsBySearch } = usePosts()

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        await getPostsBySearch(search)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={'search'}
            />
            <button>Search</button>
        </form>
    )
}

export default PostsSearch
'use client'
import Link from 'next/link'
import { usePosts } from '@/store'
import { useEffect } from 'react'



const Posts = () => {
    const { posts, loading, getAllPosts } = usePosts()

    useEffect(() => {
        getAllPosts()
    }, [getAllPosts])

    return loading ? <h2>LOADING...</h2> : (
        <ul>
            {posts && posts.map((item: any) =>
                <li key={item?.id}>
                    <Link href={`/posts/${item?.id}`}>
                        Title: {item?.title}
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default Posts
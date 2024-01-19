import Posts from '@/components/Posts'
import PostsSearch from '@/components/PostsSearch'



const PostsPage = () => {

    return (
        <main className={''}>
            <div className={'container'}>
                <div>
                    <h2>PostsPage</h2>
                    <PostsSearch />
                    <br/>
                    <Posts/>
                </div>
            </div>
        </main>
    )
}

export default PostsPage
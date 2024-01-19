import { getPostBeId } from "@/service/getPosts"

interface Props {
    params: {
        id: number
    }
}

const PostsPage = async (props: Props) => {
    const { params } = props
    const post = await getPostBeId(params.id)

    return (
        <main className={''}>
            <div className={'container'}>
                <div>
                    <h2>PostsPage {params.id}</h2>
                    <br/>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            </div>
        </main>
    )
}

export default PostsPage
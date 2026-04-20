import PostCard, { Post } from '@/components/PostCard';


const PostPage = async() => {
     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
const posts: Post[] = await res.json()
    return (
        <div>
            <h2 className="text-2xl font-bold">All post</h2>
     <div className="grid grid-cols-4 gap-7">
      {posts.map((post)=> <PostCard key={post.id} post = {post}/>)}
     </div> 
        </div>
    );
};

export default PostPage
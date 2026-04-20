
export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

interface PostCard{
    post : Post
}

const PostCard = ({post}:PostCard) => {
    return (
        <div className="card bg-base-100 w-96 shadow-md rounded-lg border border-gray-50">
  <div className="card-body">
    <h2 className="card-title"> {post.title.slice(0, 20)} </h2>
    <p> {post.body} </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default PostCard;
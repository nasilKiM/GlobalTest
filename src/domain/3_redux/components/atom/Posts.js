import Post from "./Post/Post";

const AllPosts = ({ posts, handleDeletePost, handleAddCom }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          handleDeletePost={handleDeletePost}
          handleAddCom={handleAddCom}
        />
      ))}
    </div>
  );
};
export default AllPosts;

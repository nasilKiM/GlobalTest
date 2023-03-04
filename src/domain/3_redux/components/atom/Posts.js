import Post from "./Post/Post";

const AllPosts = ({ posts, handleDeletePost, handleAddCom, handleDeleteCom }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          handleDeletePost={handleDeletePost}
          handleAddCom={handleAddCom}
          handleDeleteCom={handleDeleteCom}
        />
      ))}
    </div>
  );
};
export default AllPosts;

import Comment from "../Comment/Comment";
import CommentForm from "../Comment/Form";
import UserCard from "../UserCard/Card";
import { useDispatch } from "react-redux";

const Post = ({ post, handleDeletePost, handleAddCom, handleDeleteCom }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid #999",
      }}
    >
      <h2>--PostTitle--</h2>
      <h2>{post.title}</h2>
      <UserCard user={post.User} />
      <h2>--PostContent--</h2>
      <p>{post.content}</p>
      <CommentForm post={post} handleAddCom={handleAddCom} />
      <div
        style={{
          display: "table",
          borderCollapse: "collapse",
          border: "1px solid #000",
        }}
      >
        {post.Comments &&
          post.Comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              postId={post.id}
              handleDeleteCom={handleDeleteCom}
            />
          ))}
      </div>
      {post.myPost && (
        <button
          onClick={() => {
            handleDeletePost(post.id);
          }}
          type="button"
        >
          삭제
        </button>
      )}
    </div>
  );
};
export default Post;

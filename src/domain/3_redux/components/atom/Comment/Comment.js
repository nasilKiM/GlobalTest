const Comment = ({ comment, postId, handleDeleteCom }) => (
  <div
    style={{
      border: "1px solid #000",
    }}
  >
    <h6>{comment.User.nickName}</h6>
    <p>{comment.content}</p>
    {comment.myComment && (
      <button onClick={() => handleDeleteCom(postId, comment.id)} type="button">
        삭제
      </button>
    )}
  </div>
);
export default Comment;

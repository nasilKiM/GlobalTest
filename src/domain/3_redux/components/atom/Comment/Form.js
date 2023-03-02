const CommentForm = ({ post, handleAddCom }) => {
  const onComSubmit = (e) => {
    e.preventDefault();
    const comId = post.id;
    const comNickName = e.target.name.value;
    const comContent = e.target.content.value;
    handleAddCom(comId, comNickName, comContent);
  };

  return (
    <form onSubmit={onComSubmit}>
      <label>
        <input type="text" name="name" placeholder="이름" />
      </label>
      <label>
        <input type="text" name="content" placeholder="내용" />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default CommentForm;

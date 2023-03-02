import { useDispatch, useSelector } from "react-redux";
import NavigateButton from "../../../../components/NavigateButton";
import { ADD_COM, ADD_POST, DELETE_POST } from "../../../../store/4_redux";
import PostForm from "../atom/Post/Form";
import AllPosts from "../atom/Posts";

/* 
      문제 3

      1) 이전에 주어졌던 토이프로젝트에 데이터입니다.
         이제는 우리는 여태까지의 문제풀이를 통해 state와 조금 익숙해지는 시간을 가졌습니다.
         그렇다면 이제 조금 더 복잡한 데이터를 다뤄보도록 하겠습니다.

      2) src/__mock__/mockPosts.js에 있는 데이터를 이용하여
         아래의 AllPosts 컴포넌트를 구현해주세요.
         구현 기능에는 게시글 추가, 게시글 삭제, 게시글 수정이 있습니다.

      3) 마찬가지로 각 게시글의 수정, 삭제 버튼를 통해
         게시글을 수정 및 삭제할 수 있습니다

      4) 단 이 상태의 변화는 모두 redux를 통해 관리합니다.

          redux 관련 설정은 admin/src/store.js에 구현해주시면 됩니다.
          단, 개발자모드, 릴리즈모드에 따라서 redux devtools와 logger를 사용할 수 있도록 해주세요.

          관련 비즈니스 로직은
          src/store/4_redux.js에 구현해주세요.
*/

const ReduxQ1Page = () => {
  // redux selector (state에 원하는 데이터 전체) => state의 post만 꺼내서 쓰겠다.
  const Posts = useSelector((state) => state.posts);
  const Comments = useSelector((state) => state.comments);

  console.log(Posts, Comments);

  const dispatch = useDispatch();

  // post 생성
  const onSubmit = (title, content) => {
    console.log("submit");
    dispatch(ADD_POST({ title, content }));
    //   dispatch({
    //     type: "ADD_POST",
    //     payload: { title, content },
    //   });
  };
  // post 삭제
  const handleDeletePost = (id) => {
    dispatch(DELETE_POST(id));
  };

  // comment 생성
  const handleAddCom = (id, nickName, content) => {
    dispatch(ADD_COM({ id, nickName, content }));
  };

  return (
    <div>
      <PostForm onSubmit={onSubmit} />
      <AllPosts posts={Posts} handleDeletePost={handleDeletePost} handleAddCom={handleAddCom} />
      <NavigateButton isLastPage />
    </div>
  );
};
export default ReduxQ1Page;

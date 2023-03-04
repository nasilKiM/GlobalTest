// 필수 Redux 라이브러리 import하기
import { MockPosts } from "../__mock__/mockPosts";
import { faker } from "@faker-js/faker";
import { createAction } from "../utils/createAction";

// initial state 정의
const initialState = MockPosts(10);

//action타입들 정의 (redux의 선택기능 : 오타방지를 위함)
export const ADD_POST = createAction("ADD_POST");
export const DELETE_POST = createAction("DELETE_POST");
export const EDIT_POST = createAction("EDIT_POST");
export const ADD_COM_ID = createAction("ADD_COM_ID");
export const ADD_COM = createAction("ADD_COM");
export const DELETE_COM = createAction("DELETE_COM");
export const EDIT_COM = createAction("EDIT_COM");

// reducer함수
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [
        ...state,
        {
          Comments: [],
          Post_img: faker.image.imageUrl(),
          User: {
            id: "test",
            nickName: "test",
            profileImg: faker.image.image(),
          },
          title: action.payload.title,
          content: action.payload.content,
          createdAt: new Date(),
          myPost: true,
        },
      ];
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);
    case "EDIT_POST":
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            ...action.payload.post,
          };
        } else {
          return post;
        }
      });
    case "ADD_COM":
      const addComments = [...state];
      const addedPost = addComments.find((post) => post.id === action.payload.id);
      addedPost.Comments = [
        ...addedPost.Comments,
        {
          User: {
            id: "테스트 아이디",
            nickName: "테스트닉네임",
            profileImg: faker.image.image(),
          },
          content: action.payload.content,
          createdAt: new Date(),
          myComment: true,
        },
      ];
      return addComments;
    case "DELETE_COM":
      const DeleteComments = [...state];
      const whichPost = DeleteComments.find((post) => post.id === action.payload.postId);
      whichPost.Comments = whichPost.Comments.filter(
        (comment) => comment.id !== action.payload.commentId
      );
      return DeleteComments;
    case "EDIT_COM":
    default:
      return state;
  }
};

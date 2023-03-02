/* redux의 rootReducer를 정의하세요 */
// reducer들을 통합?하는 곳

import { postsReducer } from "./4_redux";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({ posts: postsReducer });
// {}안에 posts라고 이름을 줬기때문에 selector안에 posts라고 데이터 줌
// reducer가 여러개 있으면 {}안에 users, comments,,, 등 다 등록할 수 있다.

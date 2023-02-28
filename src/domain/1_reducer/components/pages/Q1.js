import React, { useState, useReducer } from "react";
import NavigateButton from "../../../../components/NavigateButton";
import reducer from "../../../../store/1_reducer";
import Q1Form from "../atom/Form";
import ReducerQ1List from "../atom/List";

// state 데이터의 수정방법을 미리 정의하는 함수. state초기값과 데이터 수정방법 넣기
// function reducer(state= 초기값, action)
// switch말고 if문으로도 가능

/*
function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return [...state, { id: state.length + 1, ...action.payload.item }];
    }
    case "DELETE": {
      return state.filter((v) => v.id !== action.payload.id);
    }
    default:
      return state;
  }
}
*/

const ReducerQ1Page = () => {
  /* 
      문제 1)
      로직 분리하기
    
      재료 추가 로직 분리하기

      1) 재료 추가 로직 작성하기
      2) 재료 삭제 로직 작성하기

      3) 위 로직을 현재 컴포넌트가 아닌 비즈니스 로직을 분리하여
          src/store/1_reducer.js에 구현해보세요
    */

  const [ingredients, dispatch] = useReducer(reducer, [
    { id: 1, name: "피자 도우", price: 1000 },
    { id: 2, name: "토마토 소스", price: 500 },
    { id: 3, name: "치즈", price: 1000 },
    { id: 4, name: "피망", price: 500 },
    { id: 5, name: "양파", price: 500 },
  ]);
  console.log(ingredients);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("=====>" + e.target.price.value);
    console.log("=====>" + e.target.name.value);
    dispatch({
      type: "ADD",
      payload: {
        item: { name: e.target.name.value, price: Number(e.target.price.value) },
      },
    });
  };

  const deleteIngredients = (id) => () => {
    dispatch({
      type: "DELETE",
      payload: { id: Number(id) },
    });
  };

  return (
    <>
      <h2>문제 1</h2>
      <table>
        <thead>
          <tr>
            <th>재료</th>
            <th>가격</th>
          </tr>
        </thead>
        <ReducerQ1List ingredients={ingredients} deleteIngredients={deleteIngredients} />
      </table>
      <Q1Form onSubmit={onSubmit} />
      <NavigateButton isFistPage to={"/2_context/q1"} />
    </>
  );
};
export default ReducerQ1Page;

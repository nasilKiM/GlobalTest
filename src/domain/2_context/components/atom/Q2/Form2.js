import { useContext } from "react";
import { ListContext } from "../../pages/Q2";

const ContextQ2Form2 = () => {
  const { dispatch } = useContext(ListContext);

  return (
    <div>
      <h1>Q2Form2</h1>
      <button
        onClick={() => {
          dispatch({
            type: "isEdit",
          });
        }}
      >
        STATUS 추가
      </button>
    </div>
  );
};
export default ContextQ2Form2;

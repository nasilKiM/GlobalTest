import { useContext } from "react";
import { ListContext } from "../../pages/Q2";

const ContextQ2Form3 = () => {
  const { dispatch } = useContext(ListContext);

  return (
    <div>
      <h1>Q2Form3</h1>
      <button
        onClick={() => {
          dispatch({
            type: "RESET",
          });
        }}
      >
        RESET
      </button>
    </div>
  );
};
export default ContextQ2Form3;

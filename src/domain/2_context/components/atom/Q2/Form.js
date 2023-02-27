import { useContext, useRef, useState } from "react";
import { ListContext } from "../../pages/Q2";
import ContextQ2Form2 from "./Form2";

const ContextQ2Form = () => {
  const { userList, dispatch } = useContext(ListContext);
  const [name, setName] = useState("");
  const nicknameRef = useRef();

  return (
    <div>
      <h1>Q2Form</h1>
      {JSON.stringify(userList)}
      <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="nick-name" ref={nicknameRef} />
      <button
        onClick={() => {
          dispatch({
            type: "ADD",
            payload: {
              item: {
                name,
                nickname: nicknameRef.current.value,
              },
            },
          });
        }}
      >
        추가
      </button>

      <ContextQ2Form2 />
    </div>
  );
};
export default ContextQ2Form;

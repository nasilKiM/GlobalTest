import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import { Provider } from "react-redux";
import { store } from "./adapters/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;

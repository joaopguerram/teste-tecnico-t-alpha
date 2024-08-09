import { ToastContainer } from "react-toastify";
import "./App.css";
import { RouterMain } from "./routes/RouterMain";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <RouterMain />
      <ToastContainer />
    </>
  );
}

export default App;

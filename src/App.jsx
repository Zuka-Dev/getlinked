import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="bg-black">
      <BrowserRouter>
        <Layout />{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;

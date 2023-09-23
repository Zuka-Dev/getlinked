import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Register from "./Register";
import Confirm from "./Confirm";

const Layout = () => {
  return (
    // <">
    <div className="flex flex-col bg-[#1e1e1e]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </div>
  );
};

export default Layout;

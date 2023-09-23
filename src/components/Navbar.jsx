import { Link } from "react-router-dom";
import Button from "./Button";
import menu from "../assets/Menu.png";
import close from "../assets/close.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pt-[28px] bg-transparent sm:pt-12 pb-[20px] sm:pb-[30px] sm:px-[128px] px-5 bg-black flex items-center justify-between lg:justify-around border border-t-0 border-r-0 border-l-0 border-slate-600 border-b-slate-600 ">
      <Link to="/">
        <p className="text-base sm:text-4xl font1 font-bold text-white">
          get<span className="text-ppurple">linked</span>
        </p>
      </Link>

      <div className="sm:hidden lg:flex justify-end gap-[121px] items-center flex-1 hidden">
        <ul className="flex gap-[56px] text-white text-base font2 ">
          <a href="/#timeline">
            <li className="hover:text-ppurple">Timeline</li>
          </a>
          <a href="/#overview">
            <li className="hover:text-ppurple">Overview</li>
          </a>
          <a href="/#faqs">
            <li className="hover:text-ppurple">FAQs</li>
          </a>
          <Link to="/contact">
            <li className="hover:text-ppurple">Contact</li>
          </Link>
        </ul>
        <Link to="/register">
          {" "}
          <Button title="Register" />
        </Link>
      </div>
      <img
        src={menu}
        alt="menu"
        className={`block sm:block lg:hidden justify-end `}
        onClick={() => setIsOpen(true)}
      />
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        }  flex-col gap-2 font2  absolute top-3 right-0 p-3 bg-black  z-20 `}
      >
        {" "}
        <div
          className=" rounded p-2 border-2 border1 w-fit self-end"
          onClick={() => setIsOpen(false)}
        >
          <img src={close} alt="close" />
        </div>
        <a href="#timeline">
          <p className="hover:text-ppurple text-white pr-8">Timeline</p>
        </a>
        <a href="#overview">
          <p className="hover:text-ppurple text-white pr-8">Overview</p>
        </a>
        <a href="#faqs">
          <p className="hover:text-ppurple text-white pr-8">FAQs</p>
        </a>
        <Link to="/contact">
          <p className="hover:text-ppurple text-white pr-8">Contact</p>
        </Link>
        <Link to="/register">
          <Button title="Register" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import ig from "../assets/ig.png";
import fb from "../assets/fb.png";
import ld from "../assets/ld.png";
import x from "../assets/x.png";
import "../styles/Button.css";

// import starw from "../assets/bg/starw.png"

import Navbar from "../components/Navbar";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  const button = {
    borderRadius: "4px",
    background:
      "linear-gradient(270deg, #903aff 0%,#d434fe 56.42%,#ff26b9 99.99%,#fe34b9 100%)",
    backgroundSize: "cover",
  };
  const base_Url = "https://backend.getlinked.ai";
  const [sent, setSent] = useState(null);
  const handleSubmit = async (e) => {
    const values = {
      email: e.target.email.value,
      phone_number: e.target.phone_number.value,
      first_name: e.target.first_name.value,
      message: e.target.message.value,
    };
    console.log(values);
    e.preventDefault();
    await axios(`${base_Url}/hackathon/contact-form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    })
      .then((res) => {
        if (res.status === 201) {
          console.log(res);
          setSent(true);

          // After 3 seconds (3000 milliseconds), reset displayMessage to false
          setTimeout(() => {
            setSent(null);
          }, 3000);
        } else {
          console.log("error");
          setSent(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setSent(false);
      });
    e.target.email.value = "";
    e.target.phone_number.value = "";
    e.target.first_name.value = "";
    e.target.message.value = "";
  };

  return (
    <div className="relative bg-[#1e1e1e]">
      <div className="rounded-[50%] bg-[#9839ff] blur-4 w-[100px] h-[100px] lg:w-[500px] border-0 left-[200px] lg:left-[200px] top-[100px] lg:h-[500px] absolute"></div>
      <div className="rounded-[50%] bg-[#9839ff] blur-4 w-[100px] h-[100px] lg:w-[500px] border-0 lg:left-[1000px] lg:top-[500px] lg:h-[500px] absolute"></div>
      <div className="z-10 backdrop-blur-3xl bg-[#1e1e1ed3]">
        <div className="w-full hidden lg:block  ">
          {" "}
          <Navbar />
        </div>
        <div className="w-full flex lg:hidden justify-start pl-7 py-3 z-10">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <circle
                cx="11.5"
                cy="11.5"
                r="11"
                stroke="url(#paint0_linear_177_298)"
              />
              <path
                d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667"
                stroke="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_177_298"
                  x1="11.5"
                  y1="0"
                  x2="11.5"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#FF26B9" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
        </div>

        <div className="flex bg-transparent h-screen border-white justify-around px-7 lg:px-[128px] py-4 lg:py-0  items-center">
          <div className="lg:flex flex-col gap-3 text-white text-base font2 hidden w-[40%]">
            <p className="font1 text-3xl text-ppurple font-[800]">
              Get in touch
            </p>
            <p>
              Contact <br /> Information
            </p>
            <p>
              27,Alara Street <br /> Yaba 100012 <br />
              Lagos State
            </p>
            <p>Call Us : 07067981819</p>
            <p>
              we are open from Monday-Friday <br />
              08:00am - 05:00pm
            </p>
            <p className="text-ppurple">Share on</p>
            <div className="flex gap-3 items-center">
              <img src={ig} alt="ig" />
              <img src={x} alt="x" />
              <img src={fb} alt="fb" />
              <img src={ld} alt="ld" />
            </div>
          </div>
          <div className="flex flex-col gap-10 font2 w-full lg:w-[40%]">
            <p className="font1 text-xl text-ppurple">
              Questions or need assistance?
              <br />
              Let us know about it!
            </p>
            {sent === null ? (
              ""
            ) : sent ? (
              <p className="text-green text-sm lg:text-base font-bold">
                Message Sent
              </p>
            ) : (
              <p className="text-red text-sm lg:text-base font-bold">
                Message not sent
              </p>
            )}
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex flex-col gap-6 lg:gap-10 font2"
            >
              <input
                type="text"
                name="first_name"
                id=""
                className="border border-white w-full py-2 px-4 bg-transparent text-white placeholder:text-base placeholder:text-white"
                placeholder="FIrst Name"
              />
              <input
                type="email"
                name="email"
                id=""
                placeholder="Mail"
                className="border border-white w-full py-2 px-4 bg-transparent text-white placeholder:text-base placeholder:text-white"
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="w-full border border-white py-2 px-4 bg-transparent text-white placeholder:text-base placeholder:text-white"
                placeholder="Message"
              ></textarea>
              <input
                type="submit"
                value="Submit "
                className="button py-2 px-6 text-white text-sm sm:text-base font2 w-fit self-center"
                style={button}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

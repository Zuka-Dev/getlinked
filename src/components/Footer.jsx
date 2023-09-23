import ig from "../assets/ig.png";
import fb from "../assets/fb.png";
import ld from "../assets/ld.png";
import x from "../assets/x.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
const Footer = () => {
  return (
    <div className="flex flex-col bg-black py-10 font2 gap-3 items-center">
      <div className="flex flex-col sm:flex-row pl-14 sm:px-20 lg:px-54 justify-center gap-54 sm:gap-5 max-w-screen">
        <div className="flex flex-col w-fit sm:w-[290px] lg:w-[600px]">
          <p className="text-xl sm:text-2xl lg:text-4xl  font1 font-bold text-white w-fit mb-4">
            get<span className="text-ppurple">linked</span>
          </p>
          <p className=" text-white  text-xs lg:text-sm text-[400] w-[90%] mb-3 sm:w-[70%]">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <p className="self-baseline text-xs text-white mt-auto">
            Terms of Use{" "}
            <span className="font-[400] text-xl text-ppurple">|</span> Privacy
            Policy
          </p>
        </div>
        <div className="flex flex-col text-xs gap-[11px]">
          <p className="text-[14px] text-ppurple font-[500]">Useful Links</p>
          <p className="text-white">Overview</p>
          <p className="text-white">Timeline</p>
          <p className="text-white">FAQs</p>
          <p className="text-white">Register</p>
          <p className="text-ppurple font-[500] flex items-center gap-3">
            Follow Us <img src={ig} alt="ig" />
            <img src={x} alt="x" />
            <img src={fb} alt="fb" />
            <img src={ld} alt="ld" />
          </p>
        </div>
        <div className="flex flex-col text-xs gap-[11px] items-center">
          <p className="text-[14px] text-ppurple font-[500]">Contact Us</p>
          <p className="text-white flex items-center gap-2 ">
            <img src={phone} alt="phone" />
            +234 6707653444
          </p>
          <p className="text-white flex items-start gap-2 w-[50%]">
            <img src={location} alt="locate" />
            27,Alara Street Yaba 100012 Lagos State
          </p>
        </div>
      </div>
      <p className="text-white text-center text-[12px] font-[400] ">
        All rights reserved. © getlinked Ltd.
      </p>
    </div>
  );
};

export default Footer;

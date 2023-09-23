import { Link } from "react-router-dom";
import confirm1 from "../assets/confirm1.png";
import confirm2 from "../assets/confirm2.png";

const Confirm = () => {
  const button = {
    borderRadius: "4px",
    background:
      "linear-gradient(270deg, #903aff 0%,#d434fe 56.42%,#ff26b9 99.99%,#fe34b9 100%)",
    backgroundSize: "cover",
  };
  return (
    <div className="flex justify-center items-center  h-full">
      <div className="flex flex-col gap-4 py-[73px] px-8 h-fit border border-ppurple bg-black items-center text-center">
        <div className=" flex justify-center ">
          <img
            src={confirm1}
            alt=""
            className="  z-10 w-[150px] sm:w-[250px] "
          />
          <img
            src={confirm2}
            alt=""
            className=" w-[150px] sm:w-[250px]  z-20 ml-[-85px] lg:ml-[-145px]"
          />
        </div>
        <p className="text-white text-base  lg:text-3xl font-semibold font2 mb-4 leading-[40px]">
          Congratulations <br />
          you have successfully Registered!
        </p>
        <p className="text-white text-xs lg:text-sm font2 mb-4">
          Yes, it was easy and you did it! check your mail box for next step
        </p>
        <Link to={"/register"} className="w-full">
          <button className="w-full text-base text-white p-3" style={button}>
            Back
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Confirm;

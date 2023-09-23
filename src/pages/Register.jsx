import Navbar from "../components/Navbar";
import register from "../assets/register.png";
import girl from "../assets/girl.png";
import boy from "../assets/boy.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const base_Url = "https://backend.getlinked.ai";
  const [accept, setAccept] = useState(false);
  const [category, setCategory] = useState([]);
  console.log(accept);
  const fetchCategories = () => {
    axios
      .get(`${base_Url}/hackathon/categories-list`)
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  };
  const [created, setCreated] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    const values = {
      email: e.target.email.value,
      phone_number: e.target.phone_number.value,
      team_name: e.target.team_name.value,
      group_size: parseInt(e.target.group_size.value),
      project_topic: e.target.project_topic.value,
      category: parseInt(e.target.category.value),
      privacy_poclicy_accepted: accept,
    };
    console.log(values);
    e.preventDefault();
    await axios(`${base_Url}/hackathon/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    })
      .then((res) => {
        if (res.status === 201) {
          setCreated(true);
          console.log(res);
        } else {
          setCreated(false);
        }
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        setCreated(false);
      });
    e.target.email.value = "";
    e.target.phone_number.value = "";
    e.target.team_name.value = "";
    e.target.group_size.value = "";
    e.target.project_topic.value = "";
    e.target.category.value = "";
    setAccept(false);
  };
  if (created) {
    navigate("/confirm");
  }
  const button = {
    borderRadius: "4px",
    background:
      "linear-gradient(270deg, #903aff 0%,#d434fe 56.42%,#ff26b9 99.99%,#fe34b9 100%)",
    backgroundSize: "cover",
  };
  return (
    <div className="relative bg-[#1e1e1e] min-h-screen">
      <div className="rounded-[50%] bg-[#9839ff] blur-4 w-[100px] h-[100px] lg:w-[500px] border-0 left-[200px] lg:left-[200px] top-[100px] lg:h-[500px] absolute"></div>
      <div className="rounded-[50%] bg-[#9839ff] blur-4 w-[100px] h-[100px] lg:w-[500px] border-0 lg:left-[1000px] lg:top-[320px] lg:h-[500px] absolute"></div>
      <div className="z-10 backdrop-blur-3xl bg-[#1e1e1ed3]  ">
        <div className="w-full  hidden lg:block">
          <Navbar register={true} />
        </div>
        <p className="w-full flex lg:hidden justify-start pl-8 pt-6 font1 text-ppurple text-base font-[800]">
          Register
        </p>
        <div className="flex flex-col lg:flex-row bg-transparent h-full justify-around px-7 lg:px-[128px] pt-[30px] lg:py-0  mb-4 items-center  ">
          <img src={register} alt="" />
          <div className="flex flex-col gap-6 font2 w-full lg:w-[60%] font2">
            <p className="font1 text-3xl text-ppurple hidden lg:block pt-4">
              Register
            </p>
            {!created && (
              <p className="text-red text-sm lg:text-base font-bold font2">
                Could not Register user
              </p>
            )}
            <p className="text-white text-sm flex items-center">
              Be part of this movement!{" "}
              <span className="px-3 border border-b-1 border-l-0 border-r-0 border-b-ppurple border-t-0 border-dotted text-sm flex justify-center">
                {" "}
                <img src={girl} alt="" />
                <img src={boy} alt="" />
              </span>
            </p>
            <p className="text-2xl text-white ">CREATE YOUR ACCOUNT</p>
            <form
              className="w-full h-full flex flex-col gap-6 lg:gap-10 font2"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-between gap-4 ">
                <div className="flex flex-col gap-2  w-[50%]">
                  <label htmlFor="teamName" className="text-white text-sm">
                    Team&apos;s Name
                  </label>
                  <input
                    type="text"
                    name="team_name"
                    id=""
                    className="rounded-[4px] border border-white w-full py-2 px-4 bg-transparent text-white placeholder:text-xs lg:placeholder:text-base placeholder:text-slate"
                    placeholder="Enter the name of your group"
                  />
                </div>
                <div className="flex flex-col gap-2 w-[50%]">
                  <label htmlFor="phone" className="text-white text-sm">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    id=""
                    className="rounded-[4px] border border-white w-full py-2 px-4 bg-transparent text-white placeholder:text-xs lg:placeholder:text-base placeholder:text-slate"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-4">
                <div className="flex flex-col gap-2  w-[50%]">
                  <label htmlFor="teamName" className="text-white text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id=""
                    className="rounded-[4px] border border-white w-full py-2 px-4 bg-transparent text-white placeholder:text-xs lg:placeholder:text-base placeholder:text-slate"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="flex flex-col gap-2  w-[50%]">
                  <label htmlFor="projectTopic" className="text-white text-sm">
                    Project Topic
                  </label>
                  <input
                    type="tel"
                    name="project_topic"
                    id=""
                    className="rounded-[4px] border border-white w-full py-2 px-4 bg-transparent text-white placeholder:text-xs lg:placeholder:text-base placeholder:text-slate"
                    placeholder="What is your group project topic"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-4">
                <div className="flex flex-col gap-2  w-[50%]">
                  <label htmlFor="teamName" className="text-white text-sm">
                    Category
                  </label>
                  <select
                    type="number"
                    name="category"
                    id=""
                    className="rounded-[4px] border border-white w-full py-2 px-4 bg-transparent text-white text-xs lg:text-base placeholder:text-xs lg:placeholder:text-base placeholder:text-white"
                    placeholder="Select Category"
                  >
                    <option value="">Select</option>
                    {category.map((each) => (
                      <option value={each.id} key={each.id}>
                        {each.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2  w-[50%]">
                  <label htmlFor="projectTopic" className="text-white text-sm">
                    Group Size
                  </label>
                  <input
                    type="number"
                    name="group_size"
                    id=""
                    className="rounded-[4px] border border-white w-full py-2 px-4 bg-transparent text-white placeholder:text-xs lg:placeholder:text-base placeholder:text-white"
                    placeholder="Select"
                  />
                </div>
              </div>

              <p className="text-[#FF26B9] text-[9px] lg:text-sm italic">
                Please review your registration details before submitting
              </p>
              <p className="flex items-center gap-3 font-bold text-white text-[10px] lg:text-sm">
                <input
                  type="checkbox"
                  name="privacy_poclicy_accepted"
                  id=""
                  onChange={() => setAccept(!accept)}
                  className="bg-transparent border border-white"
                />
                I agreed with the event terms and conditions and privacy policy
              </p>
              <input
                type="submit"
                value="Register"
                className="button py-4 px-6 text-white text-sm sm:text-base font2 w-full self-center"
                style={button}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

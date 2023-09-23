import Button from "../components/Button";
import Navbar from "../components/Navbar";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import chain from "../assets/chain.png";
import fire from "../assets/fire.png";
import sec3 from "../assets/sec3.png";
import sec4 from "../assets/sec4.png";
import trophy from "../assets/trophy.png";
import one from "../assets/1st.png";
import two from "../assets/2nd.png";
import three from "../assets/3rd.png";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import Paybox from "../assets/Paybox.png";
import Vuzual from "../assets/Vuzual Plus.png";
import privacy from "../assets/privacy.png";
import tick from "../assets/tick.png";
import placeholder from "../assets/placeholder.png";
import "react-lazy-load-image-component/src/effects/blur.css";

import { LazyLoadImage } from "react-lazy-load-image-component";

// bg
import { bulb, innov, star, starg, starp,judge } from "../assets/bg";

//bg
import { sectionData } from "../components/Section/data";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="relative bg-[#121212]">
      <div className="rounded-[50%] bg-[#9839ff] blur-4 w-[100px] h-[100px] lg:w-[500px] border-0 left-[200px] lg:left-[300px] top-[100px] lg:h-[500px] absolute"></div>
      <div className="rounded-[50%] bg-[#9839ff] blur-4 w-[100px] h-[100px] lg:w-[500px] border-0 lg:left-[300px] lg:top-[1800px] lg:h-[500px] absolute"></div>
      <div className="rounded-[50%] bg-[#9839ff] blur-4 w-[100px] h-[100px] lg:w-[500px] border-0 lg:left-[1100px] lg:top-[1800px] lg:h-[500px] absolute"></div>
      <div className="rounded-[50%] bg-[#9839ff] blur-4 w-[100px] h-[100px] lg:w-[500px] border-0 lg:left-[100px] top-[2700px] lg:h-[500px] absolute"></div>
      <div className="rounded-[50%] bg-[#9839ff] blur-4 w-[100px] h-[100px] lg:w-[500px] border-0 lg:left-[1150px] top-[2900px] lg:h-[500px] absolute"></div>
      <div className="rounded-[50%] bg-[#9839ff] blur-4 w-[100px] h-[100px] lg:w-[500px] border-0 left-[100px] top-[6100px] lg:h-[500px] absolute"></div>
      <div className="rounded-[50%] bg-[#9839ff] blur-4 w-[100px] h-[100px] lg:w-[500px] border-0 lg:left-[1100px] top-[6300px] lg:h-[500px] absolute"></div>
      <div className="rounded-[50%] bg-[#9839ff] blur-4 w-[100px] h-[100px] lg:w-[500px] border-0 left-[100px] top-[6700px] lg:h-[500px] absolute"></div>
      <div className="rounded-[50%] bg-[#9839ff] blur-4 w-[100px] h-[100px] lg:w-[500px] border-0 lg:left-[300px] top-[7800px] lg:h-[500px] absolute"></div>
      <div className="flex flex-col bg-[#1e1e1ed3]  h-fit  gap-[62px]  border-0 z-10 backdrop-blur-3xl m-0  ">
        <Navbar />

        {/* first section */}
        <div
          className="flex flex-col  lg:flex-row pt-5 items-center justify-center sm:px-[128px] px-7 h-fit lg:mb-[185px] "
          id="#overview"
        >
          <p className="text-base font-bold text-white italic font2 flex mb-10 lg:hidden text-center">
            Igniting a Revolution in HR Innovation
          </p>
          <div className="flex flex-col text-white gap-7 items-center lg:items-start">
            <p className="text-3xl sm:text-3xl lg:text-7xl font-[700] font1 text-center lg:text-left">
              getlinked Tech{" "}
              <p className="flex items-center gap-1 justify-center">
                Hackathon
                <span className="text-ppurple"> 1.0</span>
                <img src={chain} alt="" className="w-[32px] sm:w-[86px]" />
                <img src={fire} alt="" className="w-[32px] sm:w-[86px]" />
              </p>
            </p>
            <p className="text-xs sm:text-sm leading-5 lg:leading-normal lg:text-xl font2 w-[80%]">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Link to="/register">
              <Button title="Register" />
            </Link>
            <p className="text-6xl font3 mt-3">
              00<sub className="text-sm">H</sub> 00
              <sub className="text-sm">M</sub> 00
              <sub className="text-sm">S</sub>
            </p>
          </div>
          <div className="flex flex-col gap-3 iteems-center">
            <p className="text-4xl font-bold text-white italic font2 hidden lg:flex">
              Igniting a Revolution in HR Innovation
            </p>
            <div className="relative">
              <img
                src={hero2}
                alt="hero"
                className="z-20 absolute bg-blend-hard-light "
              />

              <img
                src={hero1}
                alt="hero"
                className="bg-blend-luminousity tinter"
              />
            </div>
          </div>
        </div>
        {/* end of first section */}

        {/* second section */}
        {sectionData.map((datum, index) => (
          <Section
            title={datum.title}
            body={datum.body}
            reversed={datum.reversed}
            subtitle={datum.subtitle}
            img={datum.img}
            key={index}
          />
        ))}
        {/* // end of second section */}

        {/* // third section */}

        <div className="flex flex-col gap-8 mb-6 lg:flex-row justify-center lg:gap-[109px] items-center px-10 lg:px-[128px] lg:mb-[195px]">
        <LazyLoadImage
            src={sec3}
            alt="hero"
            className=""
            PlaceholderSrc={placeholder}
            effect="blur"
          />
          <div className="flex lg:w-[535px] flex-col gap-1 justify-center lg:justify-start  text-center lg:text-left">
            <p className="font1 text-xl lg:text-3xl font-[800] text-white  ">
              Judging Criteria
            </p>
            <p className="font1 text-xl lg:text-3xl font-[800] text-ppurple mb-4">
              Key Attributes
            </p>
            <div className="text-white text-xs lg:text-base  font2 flex flex-col gap-[22px] items-center lg:items-start justify-center">
              <p>
                <span className="text-[#FF26B9] text-[13px] lg:text-base">
                  Innovation and Creativity:{" "}
                </span>{" "}
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </p>
              <p>
                <span className="text-[#FF26B9] text-[13px] lg:text-base">
                  Functionality:
                </span>{" "}
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </p>
              <p>
                <span className="text-[#FF26B9] text-[13px] lg:text-base">
                  Impact and Relevance:{" "}
                </span>
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>
              <p>
                <span className="text-[#FF26B9] text-[13px] lg:text-base">
                  Technical Complexity:
                </span>{" "}
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </p>
              <p className="mb-4">
                <span className="text-[#FF26B9] text-[13px] lg:text-base ">
                  Adherence to Hackathon Rules:
                </span>
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </p>
              <Button title="Read More" />
            </div>
          </div>
        </div>
        {/* // end of third section */}

        {/* // fourth section */}
        <div
          className="flex flex-col gap-8 mb-6 lg:flex-row justify-center lg:gap-[109px] items-center px-10 lg:px-[128px] lg:mb-[185px]"
          id="faqs"
        >
          <div className="flex lg:w-[535px] flex-col gap-1 justify-center lg:justify-start  text-center lg:text-left">
            <p className="font1 text-xl lg:text-3xl font-[800] text-white  ">
              Frequently Asked{" "}
            </p>
            <p className="font1 text-xl lg:text-3xl font-[800] text-ppurple mb-4">
              Questions{" "}
            </p>
            <p className="font2 text-white text-xs leading-[27.5px] lg:leading-normal lg:text-sm mb-4">
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </p>
            <div className="text-white font2 flex flex-col gap-[22px] text-xs lg:text-sm text-left items-center lg:items-start">
              <p className="border-2 border-t-0 border-l-0 border-r-0 border-b-2 border-b-ppurple p-3 flex justify-between w-full">
                Can I work on a project I started before the hackathon?{"  "}
                <span className="text-ppurple text-xl">+</span>
              </p>
              <p className="border-2 border-t-0 border-l-0 border-r-0 border-b-2 border-b-ppurple p-3 flex justify-between w-full">
                What happens if I need help during the hackathon?{" "}
                <span className="text-ppurple text-xl">+</span>
              </p>
              <p className="border-2 border-t-0 border-l-0 border-r-0 border-b-2 border-b-ppurple p-3 flex justify-between w-full">
                What happens if I don&apos;t have an idea for a project?{" "}
                <span className="text-ppurple text-xl">+</span>
              </p>
              <p className="border-2 border-t-0 border-l-0 border-r-0 border-b-2 border-b-ppurple p-3 flex justify-between w-full">
                Can I join a team or do I have to come with one?{" "}
                <span className="text-ppurple text-xl">+</span>
              </p>
              <p className="border-2 border-t-0 border-l-0 border-r-0 border-b-2 border-b-ppurple p-3 flex justify-between w-full">
                What happens after the hackathon ends{" "}
                <span className="text-ppurple text-xl">+</span>
              </p>
              <p className="border-2 border-t-0 border-l-0 border-r-0 border-b-2 border-b-ppurple p-3 flex justify-between w-full mb-2">
                Can I work on a project I started before the hackathon?{" "}
                <span className="text-ppurple text-xl">+</span>
              </p>
              <Button title="Read More" />
            </div>
          </div>
          <LazyLoadImage
            src={sec4}
            alt="hero"
            className=""
            PlaceholderSrc={placeholder}
            effect="blur"
          />
        </div>
        {/* // end of fourth section */}

        {/* // fifth section */}
        <Timeline />
        {/* // end of fifth section */}

        {/* //6th section */}
        <div className="flex flex-col sm:px-[128px] px-7  lg:mb-[185px]">
          <div className="flex lg:w-[535px] flex-col gap-1 lg:justify-start text-center lg:text-left w-full self-end mb-3">
            <p className="font1 text-xl lg:text-3xl font-[800] text-white  ">
              Prices and
            </p>
            <p className="font1 text-xl lg:text-3xl font-[800] text-ppurple mb-4">
              Rewards
            </p>
            <p className="text-white font2 text-sm ">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
          <div className="flex justify-between flex-col lg:flex-row items-center gap-5">
            <LazyLoadImage
              src={trophy}
              alt="trophy"
              className="mb-20 lg:mb-0 "
              PlaceholderSrc={placeholder}
              effect="blur"
            />
            <div className="flex gap-3">
              <div className="flex flex-col items-center border border-ppurple rounded-[8px] gap-2 w-[40%] pb-4 justify-between">
                <img src={two} alt="" className="-mt-10 lg:-mt-16" />
                <div className="flex flex-col gap-4 items-center">
                  <p className="text-white font-bold text-sm lg:text-3xl font2">
                    2nd
                  </p>
                  <p className="font-bold text-white font2 text-sm lg:text-2xl ">
                    Runner
                  </p>
                  <p className="text-ppurple font-bold text-sm lg:text-3xl font2">
                    N300,000
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center border border-ppurple rounded-[8px] gap-2 w-[40%] pb-4 justify-between ">
                <img src={one} alt="" className="-mt-16 lg:-mt-24" />

                <div className="flex flex-col gap-4 items-center ">
                  <p className="text-white font-bold text-sm lg:text-3xl font2">
                    1st
                  </p>
                  <p className="font-bold text-white font2 text-sm lg:text-2xl ">
                    Runner
                  </p>
                  <p className="text-pblue font-bold text-sm lg:text-3xl font2 ">
                    N400,000
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center border border-ppurple rounded-[8px] gap-2 w-[40%] pb-4 justify-between">
                <img src={three} alt="" className="-mt-10 lg:-mt-16" />
                <div className="flex flex-col gap-4 items-center">
                  <p className="text-white font-bold text-sm lg:text-3xl font2">
                    3rd
                  </p>
                  <p className="font-bold text-white font2 text-sm lg:text-2xl ">
                    Runner
                  </p>
                  <p className="text-ppurple font-bold text-sm lg:text-3xl font2">
                    N150,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //end of 6th section */}

        {/* // 7th section */}

        <div className="flex flex-col sm:px-[128px] px-7 items-center lg:mb-[295px]">
          <p className="font1 text-xl lg:text-3xl font-[800] text-white  mb-2">
            Partners and Sponsors{" "}
          </p>
          <p className="font2 text-white text-xs leading-[27.5px] lg:leading-normal lg:text-sm mb-4 text-center ">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>

          <div className="border border-ppurple p-12 rounded grid grid-cols-3 gap-3  ">
            <div className=" p-3 flex items-center justify-center border border-white border-b-0 border-t-0 border-l-0 border-r-0 border-b-ppurple">
              <img src={partner1} alt="" className="" />
            </div>
            <div className=" p-3 flex items-center justify-center border border-white border-b-0 border-t-0 border-l-4 border-r-0 border-l-ppurple">
              <img src={partner2} alt="" className="" />
            </div>

            <div className=" p-3 flex items-center justify-center border border-white border-b-0 border-t-0 border-l-4 border-r-0 border-l-ppurple">
              <img src={partner3} alt="" className="" />
            </div>

            <div className=" p-3 flex items-center justify-center border border-white border-b-0 border-t-4 border-l-0 border-r-0 border-t-ppurple">
              <img src={partner4} alt="" className="" />
            </div>

            <div className=" p-3 flex items-center justify-center border border-white border-b-0 border-t-4 border-l-4 border-r-0 border-t-ppurple border-l-ppurple">
              <img src={Paybox} alt="" className="" />
            </div>

            <div className=" p-3 flex items-center justify-center border border-white border-b-0 border-t-4 border-l-4 border-r-0 border-t-ppurple border-l-ppurple">
              <img src={Vuzual} alt="" className="" />
            </div>
          </div>
        </div>
        {/* // end of 7th section */}

        {/* // final section */}
        <div className="flex flex-col sm:px-[128px] px-7 lg:mb-[250px] ">
          <div className="flex lg:w-[535px] flex-col gap-1 lg:justify-start text-center lg:text-left w-full ">
            <p className="font1 text-xl lg:text-3xl font-[800] text-white  ">
              Privacy Policy and
            </p>
            <p className="font1 text-xl lg:text-3xl font-[800] text-ppurple ">
              Terms
            </p>
            <p className="font2 text-xs sm:text-sm text-[#FFFFFFBF] mb-4">
              Last updated on September 12, 2023
            </p>
            <p className="text-white font2 text-xs sm:text-sm ">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant{" "}
            </p>
          </div>
          <div className="flex justify-between flex-col lg:flex-row items-start font2 ">
            <div className="flex flex-col items-center border border-ppurple rounded-[8px] mt-10 p-14 w-full lg:w-[45%] font2 text-xs lg:text-sm leading-[25px]">
              <p className="font2 text-white text-xs lg:text-sm leading-[25px] mb-2 lg:leading-[30px]">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <p className=" text-ppurple mb-2 font-bold self-start">
                Licensing Policy
              </p>
              <p className=" font-bold text-white self-start mb-2">
                Here are terms of our Standard License:
              </p>
              <div className="flex gap-4 items-center text-white  mb-4">
                <img src={tick} alt="" />
                <p className="leading-[30px]">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex gap-4 items-center text-white  mb-4">
                <img src={tick} alt="" />
                <p className="leading-[30px]">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>

              <Button title="Read More" />
            </div>
            <LazyLoadImage
              src={privacy}
              alt="privacy"
              className="mb-20 lg:mb-0"
              PlaceholderSrc={placeholder}
              effect="blur"
            />
          </div>
        </div>
        <Footer />
        <>
          <img
            src={star}
            alt=""
            className="absolute top-[210px] left-[130px] lg:top-[200px] lg:left-[150px] lg:right- right- w-[10px] lg:w-[26px]"
          />
          <img
            src={star}
            alt=""
            className="absolute top-[210px] left-[130px] lg:top-[500px] lg:left-[450px] lg:right- right- w-[10px] lg:w-[26px]"
          />
          <img
            src={star}
            alt=""
            className="absolute top-[210px] left-[130px] lg:top-[800px] lg:left-[750px] lg:right- right- w-[10px] lg:w-[26px]"
          />
          <img
            src={star}
            alt=""
            className="absolute top-[910px] left-[330px] lg:top-[1300px] lg:left-[1350px] lg:right- right- w-[10px] lg:w-[26px]"
          />
          <img
            src={star}
            alt=""
            className="absolute top-[550px] left-[160px] lg:top-[1600px] lg:left-[150px] lg:right- right- w-[10px] lg:w-[26px]"
          />
          <img
            src={starp}
            alt=""
            className="absolute top-[310px] left-[50px] lg:top-[2000px] lg:left-[350px] lg:right- right- w-[10px] lg:w-[26px]"
          />
          <img
            src={innov}
            alt=""
            className="absolute top-[180px] left- lg:top-[250px] lg:left- lg:right-[110px] right-[30px] w-[100px] lg:w-[253px]"
          />
          <img
            src={bulb}
            alt=""
            className="absolute top-[205px] left-[270px] lg:top-[290px] lg:left-[590px] lgright- right- w-[18px] lg:w-[53px]"
          />
          <img
            src={starg}
            alt=""
            className="absolute top-[384px] left-[299px] w-[6px] lg:w-[26px] lg:top-[764px] lg:left-[571px] lgright- right-"
          />
          <img
            src={starp}
            alt=""
            className="absolute top-[963px] left-[71px] lgtop- lgleft- lg:right- right-"
          />
          <img
            src={judge}
            alt=""
            className="absolute top- left- lg:top-[2500px] lg:left-[270px] lgright- right- hidden lg:block -z-10"
          />
          <img
            src=""
            alt=""
            className="absolute top- left- lgtop- lgleft- lgright- right-"
          />
        </>
      </div>
    </div>
  );
};

export default Home;

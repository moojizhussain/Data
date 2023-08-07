import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800  " >
      <div className="max-w-screen-xxl m-auto flex flex-col items-center justify-center h-full  px-4 md:flex-row ">
        <div className="flex flex-col justify-center  ">
          <h1 className="text-4xl sm:text-7xl font-bold text-white ">I am a Front End Developer</h1>
          <p className="max-w-md text-gray-500 py-5 ">
            {" "}
            I have 1 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind....
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                </span>
            </button>
          </div>
        </div>
        <div>
            <img className="rounded-2xl mx-auto  w-2/3 md:w-full mt-[-40px]"  src={HeroImage} alt="" />
        </div>
      
      </div>
    </div>
  );
};

export default Home;

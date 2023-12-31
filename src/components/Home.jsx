import React from "react";
import Typed from "react-typed";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#E57C23]">
          <Typed
            className="text-[#E57C23]"
            strings={["Hi!", "Hey!", "Hello!"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          My name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Jake Dusing
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Game Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a video game developer specializing in building games in Unreal
          Engine. As of now I'm focused on working in UE5 with C++ but also have
          experience in Unity and C#.
        </p>
        <div>
          <Link to="games" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E57C23] hover:border-[#E57C23]">
              View Games
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

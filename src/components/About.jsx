import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#E57C23]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Jake, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm a life long gamer. I'm committed to keep learning and use my
              knowledge and experience to find a position where my skills can be
              used to bring joy to those who play the games I help create.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

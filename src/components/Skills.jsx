import React from "react";
import CSharp from "../assets/csharp.png";
import Unity from "../assets/unity.png";
import Unreal from "../assets/unreal.png";
import Cpp from "../assets/cpp.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#E57C23]">
            Skills
          </p>
          <p className="py-4">
            These are the technologies that I've worked with.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 gap-8 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Unreal} alt="Javascript icon" />
            <p className="my-4">Unreal Engine</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Cpp} alt="React icon" />
            <p className="my-4">C++</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSharp} alt="HTML icon" />
            <p className="my-4">C#</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Unity} alt="CSS icon" />
            <p className="my-4">Unity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

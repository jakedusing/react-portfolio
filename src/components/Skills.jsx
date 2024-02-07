import React from "react";
import LiteYoutubeEmbed from "react-lite-youtube-embed";
import CSharp from "../assets/csharp.png";
import Unity from "../assets/unity.png";
import Unreal from "../assets/unreal.png";
import Cpp from "../assets/cpp.png";
import EB1 from "../assets/EB1.JPG";
import EB2 from "../assets/EB2.JPG";
import EB3 from "../assets/EB3.JPG";
import EB4 from "../assets/EB4.JPG";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-100% bg-[#0a192f] text-gray-300">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-[#E57C23]">
            Enigma Blade
          </p>
          <p className="py-4 pb-5">
            Enigma Blade is an open world RPG style game with sword fighting
            combat. The game was made from scratch using assets from Valley of
            the Acient, other various assets from the Unreal Marketplace, and
            characters and animations from Mixamo.
          </p>
        </div>

        {/* Container for sections*/}
        <div className="w-full grid grid-cols-2 gap-8 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-full mx-auto" src={EB1} alt="Javascript icon" />
            {/*  <p className="my-4">Unreal Engine</p> */}
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-full h-full mx-auto" src={EB2} alt="React icon" />
            {/*  <p className="my-4">Unreal Engine</p> */}
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-full mx-auto" src={EB3} alt="HTML icon" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-full mx-auto" src={EB4} alt="CSS icon" />
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/iMeu5v09feM?si=y8PWiEu95ergFFH9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* END SECTION */}
      </div>
    </div>
  );
};

export default Skills;

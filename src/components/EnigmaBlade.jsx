import React from "react";
import { FaItchIo, FaGithub, FaGoogleDrive } from "react-icons/fa";
import EB1 from "../assets/EB1.JPG";
import EB2 from "../assets/EB2.JPG";
import EB3 from "../assets/EB3.JPG";
import EB4 from "../assets/EB4.JPG";
import EB5 from "../assets/EB5.JPG";

const EnigmaBlade = () => {
  return (
    <div
      name="enigmablade"
      className="w-full h-100% bg-[#0a192f] text-gray-300"
    >
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-[#E57C23]">
            Enigma Blade
          </p>
          <p className="py-4 pb-5">
            Enigma Blade is an open world RPG style game with sword fighting
            combat. The open world allows players to see different areas of the
            world letting the sense of exploration take them to places they have
            not seen yet. The game was made from scratch using assets from
            Valley of the Acient, other various assets from the Unreal
            Marketplace, and characters and animations from Mixamo. Gameplay
            includes breakable objects that spawn collectibles and combat with
            enemies who have motion warping to make the fight a bit more
            difficult. Players can use a dodge action to avoid being hit but it
            uses Stamina which slowly refills over time, and upon killing an
            emeny they will receive a soul that will also replenish health.
            <br />
            <br />
            Project is too large for itch.io, it can be downloaded below from
            Google Drive. But please check out the gameplay below and the Github
          </p>
          <div className="flex flex-row justify-normal">
            <div className="pr-10">
              <a
                href="https://drive.google.com/file/d/1Zhfz6-CbvT8oQqg1fnUP-nTbeIV9CQ5a/view?usp=drive_link"
                target="_blank"
              >
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#9c3030] hover:border-[#9c3030]">
                  Download from Google Drive
                  <span className="group-hover:rotate-45 duration-300">
                    <FaGoogleDrive className="ml-3" />
                  </span>
                </button>
              </a>
            </div>
            <div>
              <a href="https://github.com/jakedusing/Slash" target="_blank">
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#333] hover:border-[#333]">
                  View Github
                  <span className="group-hover:rotate-45 duration-300">
                    <FaGithub className="ml-3" />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Container for sections*/}
        <div className="w-full grid grid-cols-2 gap-8 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-full mx-auto" src={EB5} alt="Javascript icon" />
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

export default EnigmaBlade;

import React from "react";
import { FaItchIo, FaGithub } from "react-icons/fa";
import Drone1 from "../assets/Drone1.jpg";
import Drone2 from "../assets/Drone2.jpg";
import Drone3 from "../assets/Drone3.JPG";
import Drone4 from "../assets/Drone4.JPG";

const Drone = () => {
  return (
    <div name="drone" className="w-full h-100% bg-[#0a192f] text-gray-300">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-[#E57C23]">
            Skyline Siege: Drone Dominion
          </p>
          <p className="py-4 pb-5">
            Skyline Siege: Drone Dominion is a first person shooter game built
            entirely with blueprints in Unreal Engine 5. Hostile drones have
            taken over the city. If they notice you, they will turn red and
            charge at you and explode. Drones use AI navigation, having them
            patrol between points. If the player enters the acceptance sphere
            around the drone, the drone selects the player as the next patrol
            target, then if the player enters the acceptance sphere for
            destruction the drone explodes.
          </p>
          <div className="flex flex-row justify-normal">
            <div className="pr-10">
              <a
                href="https://jakedusing.itch.io/skyline-siege-drone-dominion"
                target="_blank"
              >
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#9c3030] hover:border-[#9c3030]">
                  View on itch.io
                  <span className="group-hover:rotate-45 duration-300">
                    <FaItchIo className="ml-3" />
                  </span>
                </button>
              </a>
            </div>
            {/*<div>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#333] hover:border-[#333]">
                View Github
                <span className="group-hover:rotate-45 duration-300">
                  <FaGithub className="ml-3" />
                </span>
              </button>
            </div> */}
          </div>
        </div>

        {/* Container for sections*/}
        <div className="w-full grid grid-cols-2 gap-8 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-full mx-auto" src={Drone1} alt="Blaster icon" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-full h-full mx-auto"
              src={Drone4}
              alt="Blaster icon"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-full mx-auto h-full"
              src={Drone2}
              alt="HTML icon"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-full mx-auto" src={Drone3} alt="CSS icon" />
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RlMAcCW3Esw?si=ijhXn6voM57CaGvW"
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

export default Drone;

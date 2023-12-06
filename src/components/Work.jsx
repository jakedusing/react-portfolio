import React from "react";
import KitchenChaos from "../assets/kitchenchaos.JPG";
import GrinbladeLegends from "../assets/grinbladelegends.JPG";
import Blaster from "../assets/BlasterMainMenu.JPG";

const Work = () => {
  return (
    <div name="games" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#E57C23]">
            Games
          </p>
          <p className="py-6">Check out some of my recent games.</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Blaster})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Blaster
              </span>
              <div className="pt-8 text-center">
                <a href="https://jakedusing.itch.io/blaster" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo / Itch.io
                  </button>
                </a>
                <a href="https://github.com/jakedusing/blaster" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${GrinbladeLegends})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Grinblade Legends
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://jakedusing.itch.io/grinblade-legends"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo / Itch.io
                  </button>
                </a>
                <a
                  href="https://github.com/jakedusing/RPG/tree/master/Assets/Scripts"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${KitchenChaos})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Kitchen Chaos
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://jakedusing.itch.io/kitchen-chaos"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo / Itch.io
                  </button>
                </a>
                <a
                  href="https://github.com/jakedusing/KitchenChaos/tree/master/Assets/Scripts"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

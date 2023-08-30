import React from "react";
import FoodRush from "../assets/foodrush.jpg";
import RealEstate from "../assets/realestate.jpg";
import Netflix from "../assets/netflix.jpg";
import Experiences from "../assets/experiences.jpg";
import YelpCamp from "../assets/yelpcamp.png";
import Beaches from "../assets/beaches.jpg";
import Crypto from "../assets/crypto.jpg";
import Finance from "../assets/finance.jpg";
import CaveEscape from "../assets/caveescape.JPG";
import KitchenChaos from "../assets/kitchenchaos.JPG";
import StarFighter from "../assets/starfighter.JPG";

const Work = () => {
  return (
    <div name="games" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#E57C23]">
            Games
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 gap-4">
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
                    Demo
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
                <a
                  href="https://github.com/jakedusing/KitchenChaos/tree/master/Assets/GDD"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Game Design Document
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${CaveEscape})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Cave Escape
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://jakedusing.itch.io/cave-escape"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jakedusing/CaveEscape/tree/master/Assets/Scripts"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a
                  href="https://github.com/jakedusing/CaveEscape/tree/master/Assets/GDD"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Game Design Document
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${StarFighter})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Star Fighter
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://jakedusing.itch.io/star-fighter"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jakedusing/starfighter/tree/master/Assets/Scripts"
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

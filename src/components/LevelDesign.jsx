import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { GiFastBackwardButton, GiFastForwardButton } from "react-icons/gi";
import Road1 from "../assets/Road/Road1.JPG";
import Road2 from "../assets/Road/Road2.JPG";
import Road3 from "../assets/Road/Road3.JPG";
import Road4 from "../assets/Road/Road4.JPG";
import Building1 from "../assets/Building/Building1.JPG";
import Building2 from "../assets/Building/Building2.JPG";
import Building3 from "../assets/Building/Building3.JPG";
import Building4 from "../assets/Building/Building4.JPG";
import Cave1 from "../assets/Cave/Cave1.JPG";
import Cave2 from "../assets/Cave/Cave2.JPG";
import Cave3 from "../assets/Cave/Cave3.JPG";
import Cave4 from "../assets/Cave/Cave4.JPG";
import Village1 from "../assets/Village/Village1.JPG";
import Village2 from "../assets/Village/Village2.JPG";
import Village3 from "../assets/Village/Village3.JPG";
import Village4 from "../assets/Village/Village4.JPG";

const sliderData = [
  {
    url: Road1,
  },
  {
    url: Road2,
  },
  {
    url: Road3,
  },
  {
    url: Road4,
  },
  {
    url: Building1,
  },
  {
    url: Building2,
  },
  {
    url: Building3,
  },
  {
    url: Building4,
  },
  {
    url: Cave1,
  },
  {
    url: Cave2,
  },
  {
    url: Cave3,
  },
  {
    url: Cave4,
  },
  {
    url: Village1,
  },
  {
    url: Village2,
  },
  {
    url: Village3,
  },
  {
    url: Village4,
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div
      name="leveldesign"
      className="w-full h-full bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-2 border-[#E57C23]">
              Level Design Examples
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto bg-[#0a192f] px-4 py-16 relative flex justify-center items-center w-full h-full">
          <BsArrowLeftSquareFill
            onClick={prevSlide}
            className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
          />
          <BsArrowRightSquareFill
            onClick={nextSlide}
            className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
          />
          {sliderData.map((pic, index) => {
            return (
              <div className={index === slide ? "opacity-100" : "opacity-0"}>
                {index === slide && (
                  <img
                    className="w-full h-full object-cover rounded-md transition"
                    src={pic.url}
                    alt="/"
                  />
                )}
              </div>
            );
          })}
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fubJ2_ilVts?si=x3yZheUtRoLZgfzo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Carousel;

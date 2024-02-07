import React from "react";
import LiteYoutubeEmbed from "react-lite-youtube-embed";
import Blaster1 from "../assets/Blaster1.jpg";
import Blaster2 from "../assets/Blaster2.jpg";
import Blaster3 from "../assets/Blaster3.jpg";
import Blaster4 from "../assets/Blaster4.jpg";

const Blaster = () => {
  return (
    <div name="blaster" className="w-full h-100% bg-[#0a192f] text-gray-300">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-[#E57C23]">
            Blaster
          </p>
          <p className="py-4 pb-5">
            Blaster is an online multiplayer shooter game consisting of Free For
            All, Teams, and Capture The Flag modes. The game features lag
            compensation techniques including client-side prediction and
            server-side rewind. Blaster includes assault rifles, pistols,
            submachine guns, rocket launchers, grenade launchers, sniper rifles,
            and throwing grenades. There are also multiple pick ups players can
            use, such as shields, health, speed and jump buffs, and ammo pick
            ups. The HUD will show the player which weapon they are currently
            holding and the ammo ammount.
          </p>
        </div>

        {/* Container for sections*/}
        <div className="w-full grid grid-cols-2 gap-8 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-full mx-auto" src={Blaster1} alt="Blaster icon" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-full h-full mx-auto"
              src={Blaster4}
              alt="Blaster icon"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-full mx-auto h-full"
              src={Blaster2}
              alt="HTML icon"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-full mx-auto" src={Blaster3} alt="CSS icon" />
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NwBfEmHT-3w?si=5-ZSZxOBvU132bX8"
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

export default Blaster;

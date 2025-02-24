import { useState } from "react";
import topleftimg from "../assets copy/Rectangle 8.png";
import topleftimg2 from "../assets copy/Rectangle 12.png";
import topleftimg3 from "../assets copy/Rectangle 11.png";
import topleftimg4 from "../assets copy/Rectangle 9.png";
import topleftimg5 from "../assets copy/Rectangle 13.png";
import topleftimg6 from "../assets copy/Rectangle 10.png";
import rightbottomimg from "../assets copy/Rectangle 18.png";
import rightbottomimg2 from "../assets copy/Rectangle 18 (1).png";
import rightbottomimg3 from "../assets copy/Rectangle 18 (2).png";
import rightbottomimg4 from "../assets copy/Rectangle 18 (4).png";
import rightbottomimg5 from "../assets copy/Rectangle 18 (5).png";
import rightbottomimg6 from "../assets copy/Rectangle 18 (3).png";
import gamesitem1 from "../assets copy/Ellipse 2.png";
import gamesitem2 from "../assets copy/Ellipse 4.png";
import gamesitem3 from "../assets copy/Ellipse 3.png";
import gamesitem4 from "../assets copy/Ellipse 1.png";
import gamesitem5 from "../assets copy/Ellipse 6.png";
import gamesitem6 from "../assets copy/Ellipse 5.png";
import image7 from "../assets copy/Game Controller.png";

const FourthComponent = () => {
  const [dynamicimages, setdynamicimages] = useState({
    topleftimg,
    rightbottomimg,
  });

  const dynamicimagesarray = [
    {
      topleftimg: topleftimg,
      rightbottomimg: rightbottomimg,
    },
    {
      topleftimg: topleftimg2,
      rightbottomimg: rightbottomimg2,
    },
    {
      topleftimg: topleftimg3,
      rightbottomimg: rightbottomimg3,
    },
    {
      topleftimg: topleftimg4,
      rightbottomimg: rightbottomimg4,
    },
    {
      topleftimg: topleftimg5,
      rightbottomimg: rightbottomimg5,
    },
    {
      topleftimg: topleftimg6,
      rightbottomimg: rightbottomimg6,
    },
  ];
  const onhoverfunc = (value: number) => {
    setdynamicimages(dynamicimagesarray[value]); // ✅ Now passing an object
  };

  return (
    <div className="fourthcomponent relative w-screen h-screen  flex ">
      {/* Top Left Image */}
      <div className="topleftimage">
        <img src={dynamicimages.topleftimg} alt="" />
      </div>

      {/* Center Content */}
      <div className="centermaindiv z-20">
        <h1>Play Your Way !</h1>
        <p>
          Embark on Epic Adventures, Conquer New Worlds, and Redefine Your
          Gaming Journey with PS6 Exclusive Titles and Enhanced Classics.
        </p>

        {/* Game Images Grid */}
        <div className="gamesimg grid grid-cols-3 gap-15 mt-4">
          <div className="gamesitem hover:shadow-[0px_0px_15px_3px_#FFFFFFCC] transition-shadow duration-300">
            <img src={gamesitem1} alt="" onMouseEnter={() => onhoverfunc(0)} />
          </div>
          <div className="gamesitem hover:shadow-[0px_0px_15px_3px_#FFFFFFCC] transition-shadow duration-300">
            <img src={gamesitem2} alt="" onMouseEnter={() => onhoverfunc(1)} />
          </div>
          <div className="gamesitem hover:shadow-[0px_0px_15px_3px_#FFFFFFCC] transition-shadow duration-300">
            <img src={gamesitem3} alt="" onMouseEnter={() => onhoverfunc(2)} />
          </div>
          <div className="gamesitem hover:shadow-[0px_0px_15px_3px_#FFFFFFCC] transition-shadow duration-300">
            <img src={gamesitem4} alt="" onMouseEnter={() => onhoverfunc(3)} />
          </div>
          <div className="gamesitem hover:shadow-[0px_0px_15px_3px_#FFFFFFCC] transition-shadow duration-300">
            <img src={gamesitem5} alt="" onMouseEnter={() => onhoverfunc(4)} />
          </div>
          <div className="gamesitem hover:shadow-[0px_0px_15px_3px_#FFFFFFCC] transition-shadow duration-300">
            <img src={gamesitem6} alt="" onMouseEnter={() => onhoverfunc(5)} />
          </div>
        </div>
        <div className="box getgamebutton  ">
          GET GAME NOW{" "}
          <img className="w-[40px] h-[40px] " src={image7} alt="" />
        </div>
      </div>

      {/* Right Bottom Image (Positioned Absolutely) */}
      <div className="rightbottomimage absolute bottom-0 right-0 z-10">
        <img
          src={dynamicimages.rightbottomimg}
          alt=""
          
        />
      </div>
    </div>
  );
};

export default FourthComponent;

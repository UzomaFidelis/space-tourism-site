import { useEffect, useRef, useState } from "react";
import Glider from "react-glider";
import { GliderMethods } from "react-glider/dist/types";
import vehiclePortraitImg from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsulePortraitImg from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportPortraitImg from "../assets/technology/image-spaceport-portrait.jpg";
import vehicleLandscapeImg from "../assets/technology/image-launch-vehicle-landscape.jpg";
import capsuleLandscapeImg from "../assets/technology/image-space-capsule-landscape.jpg";
import spaceportLandscapeImg from "../assets/technology/image-spaceport-landscape.jpg";
import TechnologyText from "./TechnologyText";

const Technology = () => {
  const techGliderRef = useRef<GliderMethods>(null);
  const [sliderPage, setSliderPage] = useState(0);

  useEffect(() => {
    const setSliderControlContent = () => {
      const gliderControls = document.querySelectorAll(".glider-dot");

      gliderControls[0].textContent = "1";
      gliderControls[1].textContent = "2";
      gliderControls[2].textContent = "3";
    };

    setSliderControlContent();
    window.addEventListener("resize", setSliderControlContent);
    return () => window.removeEventListener("resize", setSliderControlContent);
  });

  return (
    <div className="md:pb-[4rem]">
      <p className="text-white text-center font-barlow-con uppercase tracking-[0.18em] md:text-left md:mt-[1.91rem] md:text-[1.2rem] md:pl-[3rem] lg:pl-[10.4rem]">
        <span className="text-lighter-black">03</span> Space Launch 101
      </p>
      <div className="technology-container mt-[2rem] md:mt-[3.5rem] lg:flex lg:flex-row-reverse lg:pl-[9rem] lg:items-center">
        <Glider
          hasDots
          slidesToShow={1}
          slidesToScroll={1}
          scrollLock
          ref={techGliderRef}
          dots=".technology-dots-container"
          onSlideVisible={(e) => setSliderPage(e.detail.slide)}
        >
          <div className="slide">
            <img
              src={vehicleLandscapeImg}
              alt="space vehicle"
              className="vehicle h-full w-full mx-auto lg:hidden"
            />
            <img
              src={vehiclePortraitImg}
              alt="space vehicle"
              className="vehicle h-full w-full mx-auto hidden lg:block"
            />
          </div>
          <div className="slide">
            <img
              src={spaceportLandscapeImg}
              alt="spaceport"
              className="h-full w-full mx-auto lg:hidden"
            />
            <img
              src={spaceportPortraitImg}
              alt="spaceport"
              className="h-full w-full mx-auto hidden lg:block"
            />
          </div>
          <div className="slide">
            <img
              src={capsuleLandscapeImg}
              alt="space capsule"
              className="h-full w-full mx-auto lg:hidden"
            />
            <img
              src={capsulePortraitImg}
              alt="space capsule"
              className="h-full w-full mx-auto hidden lg:block"
            />
          </div>
        </Glider>
        <div className="pt-[2rem] pb-[5.02rem] text-center px-6 md:pt-[3.4rem] lg:flex">
          <div className="technology-dots-container text-[0.9rem] gap-[0.9rem] md:text-[1.4rem] lg:flex-col lg:text-[1.9rem]"></div>
          <TechnologyText page={sliderPage} />
        </div>
      </div>
    </div>
  );
};

export default Technology;

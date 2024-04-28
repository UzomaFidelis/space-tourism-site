import { useEffect, useRef, useState } from "react";
import Glider from "react-glider";
import { GliderMethods } from "react-glider/dist/types";
import moonImg from "../assets/destination/image-moon.webp";
import marsImg from "../assets/destination/image-mars.webp";
import europaImg from "../assets/destination/image-europa.webp";
import titanImg from "../assets/destination/image-titan.webp";
import DestinationText from "./DestinationText";

const Destination = () => {
  const destinationGliderRef = useRef<GliderMethods>(null);
  const [sliderPage, setSliderPage] = useState(0);

  useEffect(() => {
    const setSliderControlContent = () => {
      const gliderControls = document.querySelectorAll(".glider-dot");

      gliderControls[0].textContent = "Moon";
      gliderControls[1].textContent = "Mars";
      gliderControls[2].textContent = "Europa";
      gliderControls[3].textContent = "Titan";
    };

    setSliderControlContent();
    window.addEventListener("resize", setSliderControlContent);

    return () => window.removeEventListener("resize", setSliderControlContent);
  });

  return (
    <div>
      <p className="text-white text-center font-barlow-con uppercase tracking-[0.15em] md:mt-[1.95rem] md:text-left md:text-[1.2rem] md:tracking-[0.18em] md:pl-[3.4rem] md:mb-[3.5rem] lg:pl-[11.3rem] lg:text-[1.7rem] lg:mb-[2.7rem]">
        <span className="text-lighter-black">01</span> Pick your destination
      </p>
      <div className="destination-container mt-[2.1rem] lg:flex lg:pt-[1.7rem] lg:px-[6rem]">
        <Glider
          className="glider-container"
          hasDots
          slidesToShow={1}
          slidesToScroll={1}
          scrollLock
          ref={destinationGliderRef}
          dots=".destination-dots-container"
          onSlideVisible={(e) => setSliderPage(e.detail.slide)}
        >
          <div className="slide">
            <img src={moonImg} alt="moon" className="h-full mx-auto" />
          </div>
          <div className="slide">
            <img src={marsImg} alt="mars" className="h-full mx-auto" />
          </div>
          <div className="slide">
            <img src={europaImg} alt="europa" className="h-full mx-auto" />
          </div>
          <div className="slide">
            <img src={titanImg} alt="titan" className="h-full mx-auto" />
          </div>
        </Glider>

        <div className="pt-[0.4rem] pb-[3.35rem] text-center px-6 md:pt-[3.47rem] lg:pt-0 lg:text-left lg:pl-[3.1rem] lg:pr-[4.2rem]">
          <div className="destination-dots-container text-[0.9rem] items-center gap-[1rem] md:gap-[2rem]"></div>
          <DestinationText page={sliderPage} />
        </div>
      </div>
    </div>
  );
};

export default Destination;

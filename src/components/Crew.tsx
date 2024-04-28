import Glider from "react-glider";
import { useRef, useState } from "react";
import { GliderMethods } from "react-glider/dist/types";
import douglasImg from "../assets/crew/image-douglas-hurley.webp";
import markImg from "../assets/crew/image-mark-shuttleworth.webp";
import anoushehImg from "../assets/crew/image-anousheh-ansari.webp";
import victorImg from "../assets/crew/image-victor-glover.webp";
import CrewText from "./CrewText";

const Crew = () => {
  const crewGliderRef = useRef<GliderMethods>(null);
  const [sliderPage, setSliderPage] = useState(0);

  return (
    <main>
      <h1 className="sr-only">Crew Page</h1>
      <p className="text-white text-center font-barlow-con uppercase tracking-[0.17em] md:text-left md:mt-[1.9rem] md:text-[1.2rem] md:tracking-[0.23rem] md:pl-[2.8rem] lg:pl-[10.5rem] lg:mt-[1rem] lg:text-[1.5rem]">
        <span className="text-purply">02</span> Meet your crew
      </p>
      <div className="crew-container mt-[2.1rem] md:flex md:flex-col-reverse lg:flex-row-reverse lg:px-20 lg:mt-[-1rem]">
        <Glider
          className="glider-container"
          hasDots
          slidesToShow={1}
          slidesToScroll={1}
          scrollLock
          ref={crewGliderRef}
          dots=".crew-dots-container"
          onSlideVisible={(e) => setSliderPage(e.detail.slide)}
        >
          <div className="slide">
            <img
              src={douglasImg}
              alt="douglas hurley"
              className="h-full mx-auto"
            />
          </div>
          <div className="slide">
            <img
              src={markImg}
              alt="mark shuttleworth"
              className="h-full mx-auto"
            />
          </div>
          <div className="slide">
            <img
              src={victorImg}
              alt="victor glover"
              className="h-full mx-auto"
            />
          </div>
          <div className="slide">
            <img
              src={anoushehImg}
              alt="anousheh ansari"
              className="h-full mx-auto"
            />
          </div>
        </Glider>
        <div className="pt-[1.4rem] pb-[6.5rem] text-center px-6 md:flex md:flex-col-reverse md:pt-[1.28rem] md:pb-[2.3rem] lg:justify-center lg:pl-[5.3rem] lg:pr-2">
          <div className="crew-dots-container md:gap-[0.2rem]"></div>
          <CrewText page={sliderPage} />
        </div>
      </div>
    </main>
  );
};

export default Crew;

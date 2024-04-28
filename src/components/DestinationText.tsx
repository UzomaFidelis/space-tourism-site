import data from "../data.json";

const DestinationText = ({ page }: { page: number }) => {
  return (
    <>
      <h2 className="text-white font-bellefair uppercase text-[3.45rem] pt-[0.8rem] md:mt-[0.7rem] md:text-[5rem] lg:text-[6.1rem] lg:mt-[0.6rem] lg:tracking-[0.02em]">
        {data.destinations[page].name}
      </h2>
      <p className="text-purply font-barlow-con mt-[-0.6rem] text-[1.1rem] tracking-[0.02em] leading-[1.55rem] md:mt-[-0.4rem] md:px-[5rem] md:leading-[1.7rem] lg:px-0 lg:text-[1.34rem] lg:tracking-[0.015em] lg:leading-[1.9rem] lg:mt-[0rem]">
        {data.destinations[page].description}
      </p>
      <div className="md:flex md:justify-evenly md:mt-[4.8rem] md:px-[2rem] lg:justify-start lg:gap-[5rem] lg:px-0 lg:mt-[5.2rem]">
        <div>
          <h3 className="text-purply uppercase mt-[3.95rem] mb-[0.3rem] font-barlow-con text-[0.9rem] tracking-[0.16em] md:mt-0 ">
            Avg. distance
          </h3>
          <p className="text-white text-[1.75rem] font-bellefair uppercase">
            {data.destinations[page].distance}
          </p>
        </div>
        <div>
          <h3 className="text-purply uppercase font-barlow-con text-[0.9rem] tracking-[0.15em] mt-[1.5rem] mb-[0.3rem] md:mt-0 ">
            Est. travel time
          </h3>
          <p className="text-white text-[1.75rem] font-bellefair uppercase">
            {data.destinations[page].travel}
          </p>
        </div>
      </div>
    </>
  );
};

export default DestinationText;

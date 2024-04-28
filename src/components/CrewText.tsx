import data from "../data.json";

const CrewText = ({ page }: { page: number }) => {
  return (
    <div className="md:mb-[2.1rem] lg:text-left">
      <p className="text-lighter-black uppercase text-[1.05rem] pt-[1.3rem] md:pt-0 md:text-[1.5rem] md:tracking-[0.03em] lg:text-[1.7rem]">
        {data.crew[page].role}
      </p>
      <p className="text-white font-bellefair text-[1.6rem] uppercase tracking-[-0.03em] md:text-[2.5rem] md:tracking-[0] md:mt-[-0.2rem] lg:text-[3.4rem]">
        {data.crew[page].name}
      </p>
      <p className="text-purply font-barlow-con mt-[0.7rem] tracking-[0.07em] leading-[1.55rem] md:px-[8rem] md:text-[1.1rem]/[1.65rem] md:tracking-[0.05em] lg:px-0 lg:leading-[1.8rem] lg:mb-[7rem]">
        {data.crew[page].bio}
      </p>
    </div>
  );
};

export default CrewText;

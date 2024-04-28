import data from "../data.json";

const TechnologyText = ({ page }: { page: number }) => {
  return (
    <div className="lg:text-left lg:pl-[5rem] lg:pr-[3rem]">
      <p className="text-purply uppercase text-[0.9rem] tracking-[0.17em] font-barlow-con mt-[1.5rem] md:text-[1rem] md:tracking-[0.14em] md:mt-[2.6rem] lg:mt-0">
        The terminology...
      </p>
      <h2 className="text-white uppercase mt-[0.2rem] text-[1.45rem] tracking-[0.02em] font-bellefair md:mt-[0.5rem] md:text-[2.4rem] lg:text-[3.4rem]">
        {data.technology[page].name}
      </h2>
      <p className="text-purply mt-[0.9rem]  tracking-[0.05em] leading-[1.55rem] font-barlow-con md:px-[8.5rem] md:text-[1.05rem]/[1.7rem] md:mt-[0.7rem] lg:px-0 lg:text-[1.24rem]/[1.8rem]">
        {data.technology[page].description}
      </p>
    </div>
  );
};

export default TechnologyText;

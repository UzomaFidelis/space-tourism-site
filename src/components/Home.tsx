const Home = () => {
  const btnHoverStyle =
    "lg:after:content-[''] lg:after:z-[-1] lg:after:rounded-full lg:after:absolute lg:after:left-0 after:top-0 lg:after:right-0 lg:after:bottom-0 lg:after:scale-0 lg:after:transition-transform lg:after:duration-200 lg:after:bg-white/20 lg:hover:after:scale-[1.3]";

  return (
    <main className="text-center text-purply px-6 lg:flex lg:gap-[9.9rem] lg:mt-[8.2rem] lg:pb-[5rem]">
      <div className="lg:basis-[50%] lg:pl-[1.5rem] lg:text-left lg:pl-[8.9rem] lg:pr-[6rem]">
        <h1 className="sr-only">Space tourism home page</h1>
        <h5 className="text-[1rem]/[4.7rem] tracking-[0.17em] uppercase font-barlow-con md:mt-[4.5rem] md:text-[1.3rem] md:tracking-[0.18rem] lg:text-[1.8rem] lg:tracking-[0.26rem]">
          so, you want to travel to
          <span className="block text-white font-bellefair text-[4.95rem] tracking-[-0.001em] md:mt-[2.3rem] md:text-[9rem] md:tracking-[0.03em] lg:mt-[3.3rem] lg:text-[9.3rem] lg:tracking-[0]">
            space
          </span>
        </h5>
        <p className="font-barlow-con mt-[1.85rem] tracking-[0.055em] leading-[1.56em] md:mt-[3.8rem] md:px-[8.7rem] md:text-[1.07rem]/[1.65em] lg:px-0 lg:text-[1.25rem] lg:tracking-[0.04em] lg:mt-[4.3rem]">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="pt-20 pb-[3.05rem] md:mt-[4.6rem] lg:flex-1">
        <button
          type="button"
          className={`bg-white rounded-full text-space-dark w-[9.35rem] h-[9.35rem] font-bellefair text-[1.35rem] uppercase lg:z-10 md:w-[15.2rem] md:h-[15.2rem] md:text-[2.2rem] lg:relative lg:top-[3rem] lg:w-[17rem] lg:h-[17rem] ${btnHoverStyle}`}
        >
          Explore
        </button>
      </div>
    </main>
  );
};

export default Home;

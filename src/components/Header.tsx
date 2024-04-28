import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { pathname } = useLocation();

  const openNav = () => {
    setIsNavOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <header className="w-[100%] px-6 pt-6 pb-5 md:pb-8 md:px-10 lg:pt-[2.8rem] lg:pl-14 lg:pr-40">
      <div className="flex items-center justify-between lg:backdrop-blur-lg">
        <div>
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
            />
          </a>
        </div>
        <hr className="hidden lg:block lg:border-b-none lg:border-x-0 lg:border-t-purply/40 lg:w-[35%]" />
        <div>
          <button type="button" className="md:hidden">
            {!isNavOpen && (
              <img
                src={hamburger}
                alt="open menu icon"
                onClick={openNav}
                className="w-[24px] h-[21px]"
              />
            )}
          </button>

          <div
            className={`absolute text-white top-0 backdrop-blur h-[100%] w-[16rem] pt-[2rem] px-[1rem] z-10 transition-right duration-200 ${
              isNavOpen ? "right-0" : "right-[-17rem]"
            } md:static md:h-auto md:w-auto md:p-0 md:backdrop-blur-none`}
          >
            <div className="flex justify-end px-2 md:hidden">
              <button type="button">
                <img
                  src={close}
                  alt="close icon"
                  onClick={closeNav}
                  className="md:hidden"
                />
              </button>
            </div>

            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

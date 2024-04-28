import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeNavStyle =
    "md:after:content-[''] md:after:absolute md:after:bottom-0 md:after:left-[48%] md:after:translate-x-[-50%] md:after:w-[100%] md:after:h-[0.1rem] md:after:bg-white lg:after:h-[0.2rem]";

  const inactiveNavStyle =
    "md:hover:after:content-[''] md:hover:after:absolute md:hover:after:bottom-0 md:hover:after:left-[48%] md:hover:after:translate-x-[-50%] md:hover:after:w-[100%] md:hover:after:h-[0.1rem] md:hover:after:bg-purply lg:hover:after:h-[0.2rem]";

  return (
    <nav className="mt-[3.2rem] md:mt-0 md:pr-[0.5rem]">
      <ul className="uppercase font-barlow-con text-left pl-[1.1rem] tracking-[0.2em] md:flex md:gap-[2.3rem] md:tracking-[0.13em] lg:gap-[4.3rem]">
        <li className="py-[0.8rem] md:text-[0.9rem] md:relative lg:py-[2rem]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeNavStyle : inactiveNavStyle
            }
          >
            <span className="font-bold md:hidden lg:inline">00</span> home
          </NavLink>
        </li>
        <li className="py-[0.8rem] md:text-[0.9rem] md:relative lg:py-[2rem]">
          <NavLink
            to="/destination"
            className={({ isActive }) =>
              isActive ? activeNavStyle : inactiveNavStyle
            }
          >
            <span className="font-bold md:hidden lg:inline">01</span>{" "}
            destination
          </NavLink>
        </li>
        <li className="py-[0.8rem] md:text-[0.9rem] md:relative lg:py-[2rem]">
          <NavLink
            to="/crew"
            className={({ isActive }) =>
              isActive ? activeNavStyle : inactiveNavStyle
            }
          >
            <span className="font-bold md:hidden lg:inline">02</span> crew
          </NavLink>
        </li>
        <li className="py-[0.8rem] md:text-[0.9rem] md:relative lg:py-[2rem]">
          <NavLink
            to="/technology"
            className={({ isActive }) =>
              isActive ? activeNavStyle : inactiveNavStyle
            }
          >
            <span className="font-bold md:hidden lg:inline">03</span> technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

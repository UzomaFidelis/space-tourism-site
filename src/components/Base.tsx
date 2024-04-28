import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Background } from "../types";

const Base = ({ bgClass }: Background) => {
  return (
    <div
      className={`${bgClass} bg-darker-black bg-no-repeat bg-[position:center] bg-[length:cover] min-h-dvh relative overflow-hidden`}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default Base;

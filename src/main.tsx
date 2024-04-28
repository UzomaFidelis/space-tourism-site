import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Base from "./components/Base";
import Home from "./components/Home";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import Destination from "./components/Destination";
import "glider-js/glider.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Base bgClass="bg-home-mobile md:bg-home-tablet lg:bg-home-desktop" />
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/crew",
    element: (
      <Base bgClass="bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop" />
    ),
    children: [
      {
        path: "",
        element: <Crew />,
      },
    ],
  },
  {
    path: "/destination",
    element: (
      <Base bgClass="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop" />
    ),
    children: [
      {
        path: "",
        element: <Destination />,
      },
    ],
  },
  {
    path: "/technology",
    element: (
      <Base bgClass="bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop" />
    ),
    children: [
      {
        path: "",
        element: <Technology />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

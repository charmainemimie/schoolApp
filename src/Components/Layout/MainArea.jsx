//import React from 'react'

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const MainArea = () => {
  return (
    <div
      className="text-white min-h-screen relative bg-center bg-cover"
      style={{
        backgroundImage: `url('https://64.media.tumblr.com/2523a6dee583d1f46b5cc2e51fa7031b/b2619b0ed05fcc24-bb/s1280x1920/c256126d050e59ba80aa2a9ddfa7535ae8eba0e2.jpg')`,
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-400 via-gray-400 to-gray-300"
        style={{ mixBlendMode: "multiply" }}
      ></div>
      <div className="relative z-10">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainArea;

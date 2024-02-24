//import React from 'react'
import NavBar from "../Layout/NavBar";

const LandingMainArea = () => {
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
      {/* Content */}
      <div className="relative z-10">
        <NavBar />
        <div className="pl-8 pt-10 grid grid-cols-1 lg:grid-cols-2 lg:pt-16 xl:pt-24">
          <div>
            <h1 className="text-5xl font-bold mb-4 italic">
              Believe you can, and you’re halfway there
            </h1>
            <p className="text-lg">
              Education goes beyond the confines of classrooms and textbooks
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center pt-20 lg:pt-24 xl:pt-32">
          <input type="password" placeholder='enter password' className=" rounded-3xl px-16 py-4 bg-[#B2997C] placeholder:text-white placeholder:text-xl placeholder:text-center focus:ring focus:ring-white" />
        </div>
      </div>
    </div>
  );
};

export default LandingMainArea;

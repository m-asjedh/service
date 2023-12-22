import React from "react";
import { Link } from "react-router-dom";
import carServiceBackground from "../assets/carServiceBackground.jpg";

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${carServiceBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="py-1">
      <div className="w-full px-6">
        <div
          className="mt-8 relative rounded-lg container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64"
          style={backgroundStyle}
        >
          <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-black font-bold leading-tight">
              WELCOME TO LANKA <br/>SERVICES
            </h1>
          </div>
          <div className="flex justify-center items-center mb-10 sm:mb-20">
            <Link
              className="font-bold hover:text-white lg:text-xl hover:border-white border bg-blue-400 bg-opacity-75 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white rounded text-black px-4 sm:px-8 py-1 sm:py-3 text-sm"
              to="add-vehicle"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
          <div className="relative sm:w-2/3 w-11/12"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

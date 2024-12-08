import Image from "next/image";
import React from "react";

const FlightEssentials = () => {
  return (
    <div className="relative w-full  text-white">
      {/* Top Text */}
      <div className="bg-white py-2 px-4">
        <h2 className="text-sm px-4 md:text-lg uppercase text-black">Don't Miss</h2>
      </div>

      {/* Full Image Section */}
      <div className="w-full px-6 py-6 md:px-10 md:py-1">
        <Image
          src="/flasheesanital.svg" // Place the SVG in the public folder
          alt="Main Section"
          width={1920} // Specify image width for optimization
          height={1080} // Specify image height for optimization
          className="w-full object-cover rounded-md shadow-lg"
        />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center py-10 ">
        <h3 className="text-lg md:text-3xl font-bold tracking-wide uppercase text-black">
          Flight Essentials
        </h3>
        <p className="mt-2 text-sm md:text-base text-black text-center">
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </p>
        <button
          className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-full hover:bg-gray-900"
        >
          Shop
        </button>
      </div>
    </div>
  );
};

export default FlightEssentials;

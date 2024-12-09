import Image from "next/image";
import React from "react";

const TheEssentials = () => {
  return (
    <div className="relative w-full text-white">
      {/* Top Text */}
      <div className="bg-white py-2 px-4">
        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg uppercase text-black">The Essentials</h2>
      </div>

      {/* Images Section */}
      <div className="w-full px-4 sm:px-6 py-4 sm:py-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
        {/* Image 1 */}
        <div className="relative w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0">
          <Image
            src="/dress-grey.svg"
            alt="Men's Section"
            width={500}
            height={600}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-md shadow-lg"
          />
          <a
            href="#"
            className="absolute bottom-4 left-4 bg-white text-black text-xs sm:text-sm font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300"
          >
            Men's
          </a>
        </div>

        {/* Image 2 */}
        <div className="relative w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0">
          <Image
            src="/dress-yellow.svg"
            alt="Women's Section"
            width={500}
            height={600}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-md shadow-lg"
          />
          <a
            href="#"
            className="absolute bottom-4 left-4 bg-white text-black text-xs sm:text-sm font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300"
          >
            Women's
          </a>
        </div>

        {/* Image 3 */}
        <div className="relative w-full sm:w-1/2 md:w-1/3">
          <Image
            src="/cabnet.svg"
            alt="Kid's Section"
            width={500}
            height={600}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-md shadow-lg"
          />
          <a
            href="#"
            className="absolute bottom-4 left-4 bg-white text-black text-xs sm:text-sm font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300"
          >
            Kid's
          </a>
        </div>
      </div>
    </div>
  );
};

export default TheEssentials;


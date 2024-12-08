import Image from "next/image";
import React from "react";

const TheEssentials = () => {
  return (
    <div className="relative w-full text-white">
      {/* Top Text */}
      <div className="bg-white py-2 px-4">
        <h2 className="text-xs md:text-sm uppercase text-black">The Essentials</h2>
      </div>

      {/* Images Section */}
      <div className="w-full px-6 py-2 flex flex-col md:flex-row gap-4 items-center justify-center">
        {/* Image 1 */}
        <div className="relative w-full md:w-1/3">
          <Image
            src="/dress-grey.svg" // Replace with the actual image name
            alt="Men's Section"
            width={500}
            height={600}
            className="w-full object-cover rounded-md shadow-lg"
          />
          <a
            href="#"
            className="absolute bottom-4 left-4 bg-white text-black text-sm font-semibold py-2 px-4 rounded-full hover:bg-gray-200"
          >
            Men's
          </a>
        </div>

        {/* Image 2 */}
        <div className="relative w-full md:w-1/3">
          <Image
            src="/dress-yellow.svg" // Replace with the actual image name
            alt="Women's Section"
            width={500}
            height={600}
            className="w-full object-cover rounded-md shadow-lg"
          />
          <a
            href="#"
            className="absolute bottom-4 left-4 bg-white text-black text-sm font-semibold py-2 px-4 rounded-full hover:bg-gray-200"
          >
            Women's
          </a>
        </div>

        {/* Image 3 */}
        <div className="relative w-full md:w-1/3">
          <Image
            src="/cabnet.svg" // Replace with the actual image name
            alt="Kid's Section"
            width={500}
            height={600}
            className="w-full object-cover rounded-md shadow-lg"
          />
          <a
            href="#"
            className="absolute bottom-4 left-4 bg-white text-black text-sm font-semibold py-2 px-4 rounded-full hover:bg-gray-200"
          >
            Kid's
          </a>
        </div>
      </div>
    </div>
  );
};

export default TheEssentials;

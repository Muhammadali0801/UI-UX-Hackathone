import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductSlider from "@/components/Product-Slider";
import FeaturedHero from "@/components/Featured-Hero";
import GearUp from "@/components/GearUp";
import FlightEssentials from "@/components/Flight_Essentials";
import TheEssentials from "@/components/TheEssantial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mt-[70px]">
  {/* Header Section */}
  <div className="flex flex-col items-center bg-light-gray py-10 px-4">
    <h2 className="font-semibold mt-5 text-2xl sm:text-xs leading-10 text-center">
      Hello Nike App
    </h2>
    <p className="text-center text-base sm:text-xs mt-3">
      Download the app to access everything Nike.{' '}
      <Link href="#" className="text-black underline">Get Your Great</Link>
    </p>
  </div>

  {/* Content Section */}
  <section className="px-4 sm:px-6 md:px-10">
    {/* Banner Image */}
    <Image
      src={"/nike-banner.png"}
      alt="banner-image"
      width={1344}
      height={700}
      className="w-full h-auto rounded-lg"
    />
    
    {/* Content Description */}
    <div className="flex flex-col items-center mt-10">
      <h3 className="font-semibold text-lg sm:text-xl text-center">First Look</h3>
      <h2 className="text-4xl sm:text-5xl md:text-6xl uppercase mt-5 text-center">
        Nike Air Max Pulse
      </h2>
      <p className="w-full sm:w-3/4 md:w-1/2 text-center mt-5 text-sm sm:text-base md:text-lg">
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse — 
        designed to push you past your limits and help you go to the max.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-7 justify-center w-full sm:w-auto">
        <Button variant="default" className="w-full sm:w-auto">
          Notify Me
        </Button>
        <Button variant="default" className="w-full sm:w-auto">
          Shop Air Max
        </Button>
      </div>
    </div>
  </section>
</div>


      <section className="min-h-screen bg-white">
        <ProductSlider />
      </section>
      <section className="min-h-screen bg-white">
         <FeaturedHero /> 
      </section>
      <section>
        <GearUp />
      </section>
      <section>
        <FlightEssentials />
      </section>
      <section>
      <TheEssentials />
      </section>
      <div className="flex flex-wrap gap-20 justify-center items-start py-10 px-4">
  {/* Icons Section */}
  <div className="leading-8 font-medium text-base sm:text-lg w-[150px] sm:w-auto">
    <h2 className="font-bold">Icons</h2>
    <ul>
      <li>Air Force 1</li>
      <li>Huarache</li>
      <li>Air Max 90</li>
      <li>Air Max 95</li>
    </ul>
  </div>

  {/* Shoes Section */}
  <div className="leading-8 font-medium text-base sm:text-lg w-[150px] sm:w-auto">
    <h2 className="font-bold">Shoes</h2>
    <ul>
      <li>All Shoes</li>
      <li>Custom Shoes</li>
      <li>Jordan Shoes</li>
      <li>Running Shoes</li>
    </ul>
  </div>

  {/* Clothing Section */}
  <div className="leading-8 font-medium text-base sm:text-lg w-[150px] sm:w-auto">
    <h2 className="font-bold">Clothing</h2>
    <ul>
      <li>All Clothing</li>
      <li>Modest Wear</li>
      <li>Hoodies & Pullovers</li>
      <li>Shirts & Tops</li>
    </ul>
  </div>

  {/* Kid's Section */}
  <div className="leading-8 font-medium text-base sm:text-lg w-[150px] sm:w-auto">
    <h2 className="font-bold">Kid's</h2>
    <ul>
      <li>Infant & Toddler Shoes</li>
      <li>Kids' Shoes</li>
      <li>Kids' Jordan Shoes</li>
      <li>Kids' Basketball Shoes</li>
    </ul>
  </div>
</div>

      <Footer />
    </div>
  );
}

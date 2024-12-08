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
      <div className="mt-[70px]"> {/* Adjusted margin-top for header */}
        <div className="flex items-center flex-col bg-light-gray py-10 px-4"> {/* Increased padding */}
          <h2 className="font-semibold mt-5 text-2xl leading-10 text-center">
            Hello Nike App
          </h2>
          <p className="text-center text-lg">
            Download the app to access everything Nike.{' '}
            <Link href="#">Get Your Great</Link>
          </p>
        </div>
        <section className="px-4 md:px-10"> {/* Adjusted padding for responsive spacing */}
          <Image
            src={"/nike-banner.png"}
            alt="banner-image"
            width={1344}
            height={700}
            className="w-full h-auto"
          />
          <div className="flex flex-col items-center mt-10">
            <h3 className="font-semibold text-lg">First Look</h3>
            <h2 className="text-5xl uppercase mt-5 text-center">
              Nike Air Max Pulse
            </h2>
            <p className="w-1/2 text-center mt-5 mx-auto text-[20px]">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air
              Max Pulse —designed to push you past your limits and help you go
              to the max.
            </p>
            <div className="flex flex-row gap-6 mt-7 justify-center ">
              <Button variant="default">Notify Me</Button>
              <Button variant="default">Shop Air Max</Button>
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
      <div className="flex flex-row gap-28 justify-center items-center py-10 px-10">
        <div className="leading-10 font-medium text-lg">
          <h2 className="font-bold">Icons</h2>
          <ul>
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>
        <div className="leading-10 font-medium text-lg">
          <h2 className="font-bold">Shoes</h2>
          <ul>
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>
        <div className="leading-10 font-medium text-lg">
          <h2 className="font-bold">Clothing</h2>
          <ul>
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>
        <div className="leading-10 font-medium text-lg">
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

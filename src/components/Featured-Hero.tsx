import { Button } from "./ui/button";

export default function Featured() {
  return (
    <main className="m-4">
      <div>
        <h1 className="font-semibold text-xl sm:text-2xl py-5">Featured</h1>
      </div>
      <div
        style={{
          backgroundImage: "url('/featured-hero.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[60vh] sm:h-[75vh] md:h-[85vh] lg:h-[100vh] w-full"
      ></div>
      <div className="flex justify-center items-center flex-col gap-3 px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center">
          Step Into What Feels Good
        </h2>
        <p className="text-sm sm:text-base leading-5 sm:leading-6 w-full sm:w-[90%] md:w-[70%] max-w-xl pt-3 pb-2 text-center">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <Button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
          Find Your Shoe
        </Button>
      </div>
    </main>
  );
}

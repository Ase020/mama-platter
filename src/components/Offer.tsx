import Image from "next/image";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <section className="h-[calc(100vh-6rem)] bg-black flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-70vh">
      <div className="flex-1 flex flex-col gap-8 p-6 items-center justify-center text-center">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl">
          {" "}
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>

        <CountDown />
        <button className="text-white bg-red-500 px-6 py-3 rounded-md">
          Order Now
        </button>
      </div>

      <div className="relative flex-1 w-full md:h-full">
        <Image src="/offerProduct.png" alt="offer" fill objectFit="contain" />
      </div>
    </section>
  );
};

export default Offer;

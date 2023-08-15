"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in Nairobi",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
      5000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      <div className="h-1/2 flex flex-col items-center justify-center gap-8 text-red-500 font-bold lg:h-full lg:w-1/2">
        <h1 className="text-center text-5xl md:text-6xl xl:text-7xl p-4  capitalize">
          {slides[currentSlide].title}
        </h1>
        <button className="text-white bg-red-500 px-8 py-4 rounded-xl">
          Order now
        </button>
      </div>

      <div className="h-1/2 w-full relative lg:h-full lg:w-1/2">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          fill
          objectFit="cover"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Slider;

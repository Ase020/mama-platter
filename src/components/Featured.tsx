// import { featuredProducts } from "@/data";
import { ProductType } from "@/types/types";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http:localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
};

const Featured = async () => {
  const featuredProducts: ProductType[] = await getData();
  return (
    <section className="w-screen overflow-x-scroll text-red-500">
      <div className="w-max flex">
        {featuredProducts.map((product) => (
          <div
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
            key={product.id}
          >
            {product.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}

            <div className="flex-1 flex flex-col text-center items-center justify-center gap-4">
              <h1 className="text-xl font-bold capitalize xl:text-2xl 2xl:text-3xl">
                {product.title}
              </h1>
              <p className="p-4 2xl:p-8">{product.desc}</p>
              <span className="text-xl font-bold">
                Ksh.{Math.floor(product.price * 52)}
              </span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;

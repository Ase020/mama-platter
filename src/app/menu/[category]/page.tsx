import Image from "next/image";
import Link from "next/link";

// import { pizzas } from "@/data";
import { ProductType } from "@/types/types";

type Props = {
  params: { category: string };
};

const getData = async (category: string) => {
  const res = await fetch(`http:localhost:3000/api/products?cat=${category}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
};

const CategoryPage = async ({ params }: Props) => {
  const products: ProductType[] = await getData(params.category);

  return (
    <section className="flex flex-wrap text-red-500">
      {products.map((pizza) => (
        <Link
          className="h-[60vh] p-4 w-full sm:w-1/2 lg:w-1/3 border-red-400 border-r-2 border-b-2 flex flex-col justify-between group even:bg-fuchsia-50"
          href={`/product/${pizza.id}`}
          key={pizza.id}
        >
          {pizza.img && (
            <div className="relative h-[80%]  hover:scale-105 transition-all duration-500 ease-in">
              <Image
                src={pizza.img}
                alt={pizza.title}
                fill
                className="object-contain"
              />
            </div>
          )}

          <div className="flex items-center justify-between font-bold group">
            <h1 className="text-lg capitalize p-2 ">{pizza.title}</h1>
            <h2 className="text-base group-hover:hidden">
              Ksh.{Math.floor(pizza.price * 52).toLocaleString("en-US")}
            </h2>
            <button className="bg-red-500 text-white text-sm p-2 rounded-md uppercase hidden group-hover:block">
              add to cart
            </button>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default CategoryPage;

import { menu } from "@/data";
import Link from "next/link";

const Menu = () => {
  return (
    <section className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((item) => (
        <Link
          key={item.id}
          href={`/menu/${item.slug}`}
          style={{ backgroundImage: `url(${item.img})` }}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
        >
          <div className={`text-${item.color} w-1/2`}>
            <h1 className="capitalize font-bold text-3xl">{item.title}</h1>
            <p className="text-sm py-4">{item.desc}</p>
            <button
              className={`hidden 2xl:block bg-${item.color}  text-${
                item.color === "black" ? "white" : "red-500"
              } py-2 px-4 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Menu;

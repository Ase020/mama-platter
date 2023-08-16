"use client";

import { useEffect, useState } from "react";
import { types } from "util";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ id, options, price }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl">
        Ksh.{Math.floor(total * 52).toLocaleString("en-Us")}
      </h2>

      <div className="flex items-center gap-4">
        {options?.map((option, i) => (
          <button
            className="p-2 ring-1 ring-red-400 rounded-md min-w-[6rem]"
            key={option.title}
            style={{
              background: selected === i ? "rgb(248 113 113)" : "white",
              color: selected === i ? "white" : "rgb(248 113 113)",
            }}
            onClick={() => setSelected(i)}
          >
            {option.title}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-400">
          <span className="">Quantity</span>

          <div className="flex gap-2 items-center">
            <button
              onClick={() => {
                setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
              }}
              className="px-1"
            >
              {"-"}
            </button>
            <span className="">{quantity}</span>
            <button
              onClick={() => {
                setQuantity((prev) => (prev === 10 ? 10 : prev + 1));
              }}
              className="px-1"
            >
              {"+"}
            </button>
          </div>
        </div>

        <button className="bg-red-500 w-48 text-white ring-1 ring-red-500  p-3">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;

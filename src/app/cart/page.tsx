import Image from "next/image";

const Cart = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex lg:flex-row flex-col text-red-500">
      <div className="h-1/2 lg:h-full lg:w-2/3 2xl:w-1/2 p-4 lg:px-20 xl:px-40 flex flex-col justify-start overflow-scroll">
        {/* Single item */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="font-bold capitalize text-xl">Sicilian</h1>
            <span className="">Large</span>
          </div>
          <h2 className="font-bold">Ksh.1,256</h2>
          <span className="cursor-pointer font-extrabold">X</span>
        </div>

        {/* Single item */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="font-bold capitalize text-xl">Sicilian</h1>
            <span className="">Large</span>
          </div>
          <h2 className="font-bold">Ksh.1,256</h2>
          <span className="cursor-pointer font-extrabold">X</span>
        </div>

        {/* Single item */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="font-bold capitalize text-xl">Sicilian</h1>
            <span className="">Large</span>
          </div>
          <h2 className="font-bold">Ksh.1,256</h2>
          <span className="cursor-pointer font-extrabold">X</span>
        </div>

        {/* Single item */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="font-bold capitalize text-xl">Sicilian</h1>
            <span className="">Large</span>
          </div>
          <h2 className="font-bold">Ksh.1,256</h2>
          <span className="cursor-pointer font-extrabold">X</span>
        </div>

        {/* Single item */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="font-bold capitalize text-xl">Sicilian</h1>
            <span className="">Large</span>
          </div>
          <h2 className="font-bold">Ksh.1,256</h2>
          <span className="cursor-pointer font-extrabold">X</span>
        </div>
      </div>

      <div className="h-1/2 lg:h-full lg:w-1/3 2xl:w-1/2 p-4 lg:px-20 xl:px-40 bg-fuchsia-50 flex flex-col gap-4 2xl:text-xl 2xl:gap-6 justify-center">
        {/* item  */}
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">Ksh. 3,580</span>
        </div>

        {/* item  */}
        <div className="flex justify-between">
          <span className="">Service cost</span>
          <span className="">Ksh. 0</span>
        </div>
        {/* item  */}
        <div className="flex justify-between">
          <span className="">Delivery cost</span>
          <span className="text-green-500">Free!</span>
        </div>

        <hr className="my-2" />
        {/* item  */}
        <div className="flex justify-between items-center">
          <span className="font-bold 2xl:text-2xl">TOTAL(incl. VAT)</span>
          <span className="font-extrabold text-2xl 2xl:text-3xl">
            Ksh. 3,580
          </span>
        </div>

        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

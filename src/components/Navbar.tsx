import Link from "next/link";
import Image from "next/image";

import Menu from "./Menu";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = false;
  return (
    <header className="h-12 md:h-24 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase lg:px-20 xl:px-40">
      {/* Desktop Navlinks */}
      <div className="hidden md:flex items-center gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Mama&apos;s Platter</Link>
      </div>

      {/* mobile menu */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* Login || Cart */}
      <div className="hidden md:flex items-center justify-end gap-4 flex-1">
        <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded">
          <Image src="/phone.png" alt="phone" width={20} height={20} />
          <span>(0)718 424 876</span>
        </div>

        {user ? (
          <Link href="/orders">Orders</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}

        <Link href="/cart">
          <CartIcon />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

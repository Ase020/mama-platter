"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";

const navLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;

  return (
    <div>
      {open ? (
        <Image
          src="/close.png"
          height={20}
          width={20}
          alt="menu"
          onClick={() => setOpen((prev) => !prev)}
        />
      ) : (
        <Image
          src="/open.png"
          height={20}
          width={20}
          alt="menu"
          onClick={() => setOpen((prev) => !prev)}
        />
      )}

      {open && (
        <div className="bg-red-500 text-white absolute w-full top-24 left-0 h-[calc(100vh-6rem)] flex flex-col items-center justify-center gap-8 text-3xl z-10">
          {navLinks.map(({ id, url, title }) => (
            <Link
              key={id}
              href={url}
              onClick={() => {
                setOpen(false);
              }}
            >
              {title}
            </Link>
          ))}

          {user ? (
            <Link
              href="/orders"
              onClick={() => {
                setOpen(false);
              }}
            >
              Orders
            </Link>
          ) : (
            <Link
              href="/login"
              onClick={() => {
                setOpen(false);
              }}
            >
              Login
            </Link>
          )}

          <Link
            href="/cart"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;

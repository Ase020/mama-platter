"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserLinks = () => {
  const { data, status } = useSession();
  console.log(status);

  const user = data?.user;

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-2">
          <Link href="/orders">Orders</Link>
          <span
            className="ring-1 ring-red-400 p-1 text-xs rounded-md cursor-pointer"
            onClick={() => signOut()}
          >
            Logout
          </span>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default UserLinks;

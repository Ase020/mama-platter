"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      <div className="h-full md:h-[70%] 2xl:h-[80%] md:w-full lg:w-[60%] 2xl:w-[50%] shadow-2xl rounded-md flex flex-col md:flex-row">
        <div className="relative h-1/3 md:h-full w-full md:w-1/2">
          <Image src="/loginBg.png" alt="login" fill className="object-cover" />
        </div>

        <div className="h-2/3 md:h-full w-full md:w-1/2 flex flex-col gap-8 p-10">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p className="">
            Log into your account or create a new one using social buttons
          </p>
          <button
            className="flex items-center justify-center gap-4 p-4 ring-1 ring-orange-100 rounded-md"
            onClick={() => signIn("google")}
          >
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="">Google</span>
          </button>

          <button className="flex gap-4 items-center justify-center p-4 ring-1 ring-blue-100 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="">Facebook</span>
          </button>

          <p className="text-sm">
            Have a problem?
            <Link className="underline text-red-400" href="/">
              {" "}
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

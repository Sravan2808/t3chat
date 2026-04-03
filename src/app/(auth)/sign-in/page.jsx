"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen
    bg-background px-4 py-16 md:py-32"
    >
      <div className="flex flex-row justify-center items-center gap-x-2">
        <h1 className="text-3xl font-extrabold text-foreground">Welcome to</h1>
        <Image src={"/logo.svg"} alt="Logo" width={142} height={142} />
      </div>
      <p className="mt-2 text-lg text-muted-foreground font-semibold">
        Sign in below (we'll increase your message limits if you do 😉)
      </p>

      <Button
        variant="default"
        className={
          "max-w-sm mt-5 w-full px-7 py-7 flex flex-row justify-center items-center cursor-pointer"
        }
        onClick={() =>
          signIn.social({
            provider: "google",
            callbackURL: "/",
          })
        }
      >
        <FcGoogle />
        <span className="font-bold ml-2">Sign in with Google</span>
      </Button>

      <h1 className="flex text-xl items-center justify-center">OR</h1>

      <Button
        variant="default"
        className={
          "max-w-sm mt-2 w-full px-7 py-7 flex flex-row justify-center items-center cursor-pointer"
        }
        onClick={() =>
          signIn.social({
            provider: "github",
            callbackURL: "/",
          })
        }
      >
        <Image src={"/github.svg"} alt="GitHub" width={24} height={24} />
        <span className="font-bold ml-2">Sign in with GitHub</span>
      </Button>
    </section>
  );
};

export default page;

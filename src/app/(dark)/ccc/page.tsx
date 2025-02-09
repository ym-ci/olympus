"use client";

import Hero from "@/app/(dark)/ccc/hero";
import Info from "@/app/(dark)/ccc/info";
import dynamic from "next/dynamic";
import React from "react";

const Navbar = dynamic(() => import("@/app/(dark)/ccc/nav"), { ssr: false });

const Page = () => {
  const gradient =
    "bg-gradient-to-br from-indigo-950 via-[#14062d] to-slate-950";
  return (
    <>
      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }
      `}</style>
      <Navbar />
      <main
        className={`animate-gradient flex min-h-screen w-full flex-col items-center justify-between ${gradient}`}
      >
        <section id={"home"}>
          <Hero />
        </section>
        <section
          className="flex min-h-screen w-full items-center justify-center"
          id={"info"}
        >
          <div className="container mx-auto text-center">
            <Info />
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;

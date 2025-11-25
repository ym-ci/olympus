"use client";

import Hero from "@/app/(dark)/ccc/hero";
import Info from "@/app/(dark)/ccc/info";
import dynamic from "next/dynamic";
import React from "react";

const Navbar = dynamic(() => import("@/app/(dark)/ccc/nav"), { ssr: false });

const Page = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#030014] overflow-x-hidden selection:bg-indigo-500/30 text-slate-200">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <Navbar />

      <main className="relative z-10 flex flex-col items-center justify-between">
        <section id="home" className="w-full">
          <Hero />
        </section>
        <section id="info" className="w-full">
          <Info />
        </section>
      </main>
    </div>
  );
};

export default Page;

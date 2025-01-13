"use client";

import Details from '@/app/ccc/details';
import Hero from '@/app/ccc/hero';
import Info from '@/app/ccc/info';
import Register from '@/app/ccc/register';
import dynamic from 'next/dynamic';
import React from 'react';

const Navbar = dynamic(() => import('@/app/ccc/nav'), { ssr: false });
const page = () => {
  return (
    <>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between w-full">
        <section id={"home"}>
          <Hero/>
        </section>
        <section className="w-full min-h-screen flex items-center justify-center"
                 id={"info"}>
          <div className="container mx-auto text-center">
            <Info/>
          </div>
        </section>
        <section className="w-full min-h-screen flex items-center justify-center"
                 id={"details"}>
          <div className="container mx-auto text-center">
            <Details/>
          </div>
        </section>
        <section className="w-full min-h-screen flex items-center justify-center"
                 id={"register"}>
          <Register/>
        </section>
      </main>
    </>
  );
};

export default page;
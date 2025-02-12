"use client";

import dynamic from "next/dynamic"

const Classes = dynamic(() => import("./classes"), { ssr: false })
export default function Page() {
  return <Classes />
}


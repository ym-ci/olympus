"use client"

import { Button } from "@/components/ui/button"

interface BouncingButtonProps {
  isCorner: boolean
}

interface BouncingButtonProps {
  isCorner: boolean
  children: React.ReactNode
}

export default function BouncingButton({ isCorner, children }: BouncingButtonProps) {
  return (
    <div
      className={`fixed transition-all duration-1000 ease-in-out ${
        isCorner ? "bottom-4 right-4" : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      }`}
    >
      {children}
    </div>
  )
}


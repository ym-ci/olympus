"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface BouncingButtonProps {
  isCorner: boolean
}

interface BouncingButtonProps {
  isCorner: boolean
  href: string
  className?: string
  children: React.ReactNode
}

export default function BouncingButton({ isCorner, href, className, children }: BouncingButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
      "fixed transition-all duration-1000 ease-in-out",
      isCorner ? "bottom-4 right-4" : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      className
      )}
    >
      <Button className="animate-bounce hover:bg-secondary-200">{children}</Button>
    </Link>
  )
}
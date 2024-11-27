import Image from "next/image"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Grid Container */}
      <div className="grid h-full w-full grid-cols-2 grid-rows-2">
        {/* Robotics Quadrant */}
        <Link href="/robotics" prefetch={false} className="group relative overflow-hidden">
          <Image
            src="/assets/robotics/group.jpg"
            alt="Robotics"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 transition-all duration-500 group-hover:bg-black/40" />
          <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white md:text-3xl">
            Robotics
          </h2>
        </Link>

        {/* Programming Quadrant */}
        <Link href="/programming" prefetch={false} className="group relative overflow-hidden">
          <Image
            src="/programming_group.jpg"
            alt="Programming"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/20" />
          <h2 className="absolute bottom-4 right-4 text-2xl font-bold text-white md:text-3xl">
            Programming
          </h2>
        </Link>

        {/* Tech Council Quadrant */}
        <Link href="/tech-council" prefetch={false} className="group relative overflow-hidden">
          <Image
            src="/assets/tech-council/group.jpg"
            alt="Tech Council"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/55 transition-all duration-500 group-hover:bg-black/30" />
          <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white md:text-3xl">
            Tech Council
          </h2>
        </Link>

        {/* Cybersecurity Quadrant */}
        <Link href="/cybersecurity" prefetch={false} className="group relative overflow-hidden">
          <Image
            src="/assets/cybersecurity/group.png"
            alt="Cybersecurity"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/45 transition-all duration-500 group-hover:bg-black/30" />
          <h2 className="absolute bottom-4 right-4 text-2xl font-bold text-white md:text-3xl">
            Cybersecurity
          </h2>
        </Link>
      </div>

      {/* Centered Card */}
      <Card className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/30 p-6 backdrop-blur-md border-0">
        <h1 className="text-center text-2xl font-bold text-white md:text-4xl">
          York Mills CI
          <br />
          Tech Clubs
        </h1>
      </Card>
    </div>
  )
}

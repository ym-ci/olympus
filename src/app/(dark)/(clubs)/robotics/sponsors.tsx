import Image from "next/image";
import Link from "next/link";
import PolymakerLogo from "@/components/robotics/logos/polymaker";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="flex min-h-screen w-full snap-start items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold">Sponsors</h2>
        <div className="flex justify-center items-center gap-8">
          <Link href="https://polymaker.com/" target="_blank" className="hover:scale-105 transition-all duration-300 w-1/3 h-1/3">
            <PolymakerLogo />
          </Link>
          <Link href="https://spiritofmath.com/campus/don-mills/" target="_blank">
            <Image src="/assets/robotics/sponsors/spirit-of-math.png" alt="Spirit of Math" width={250} height={250} className="hover:scale-105 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

import { Card } from "@/components/ui/card";
import Image from "next/image";

interface HeroProps {
  image: string
  title: React.ReactNode
  strTitle: string
}

export function Hero({ image, title, strTitle }: HeroProps) {
  return (
    <section className="h-screen w-full overflow-hidden relative snap-start">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={strTitle}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
      <div
        className="relative z-10 flex items-center justify-center h-full"
      >
        <Card className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/30 p-6 backdrop-blur-md border-0">
          <h1 className="text-center text-2xl font-bold text-white md:text-4xl">
            {title}
          </h1>
        </Card>
      </div>
    </section>
  )
}


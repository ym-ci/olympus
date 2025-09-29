"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AboutUs() {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full snap-start items-center justify-center px-6 py-16 lg:py-24"
    >
      <div className="w-full max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
            About Us
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Join our vibrant robotics community where innovation meets
            education. Whether you&apos;re a beginner or experienced, we have
            the perfect path for your robotics journey.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-lg">
            <RoboticsCard
              title="Robotics Team"
              imageSrc="/assets/robotics/bot_cool.jpg"
              items={[
                "Compete in the VEX V5 Robotics Competition",
                "Compete in various other robotics competitions",
                "No experience necessary",
                "Application required",
              ]}
              button={
                <Link
                  href="https://classroom.google.com/c/Nzk1NTcwMDI0NTU4?cjc=bzfg3257"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full transform bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-purple-700">
                    Join Robotics Team
                  </Button>
                </Link>
              }
              gradient="from-purple-500/10 to-pink-500/10"
              borderColor="border-purple-500/30 hover:border-purple-500/60"
            />
          </div>
        </div>

        <div className="text-center">
          <Link href="#faq" className="inline-block">
            <Button
              variant="outline"
              className="transform border-2 border-gray-600 px-8 py-3 transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:bg-blue-500/10"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

interface RoboticsCardProps {
  title: string;
  imageSrc: string;
  items: string[];
  button: React.ReactNode;
  gradient?: string;
  borderColor?: string;
}

function RoboticsCard({
  title,
  imageSrc,
  items,
  button,
  gradient = "from-gray-800/50 to-gray-900/50",
  borderColor = "border-gray-700 hover:border-gray-600",
}: RoboticsCardProps) {
  return (
    <Card
      className={`group flex h-full flex-col bg-gradient-to-br ${gradient} border ${borderColor} overflow-hidden transition-all duration-500 hover:shadow-2xl`}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="rounded-t-lg object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-2xl font-bold text-transparent">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow px-6">
        <ul className="space-y-3 text-gray-300">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600" />
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-6 pb-6">{button}</CardFooter>
    </Card>
  );
}

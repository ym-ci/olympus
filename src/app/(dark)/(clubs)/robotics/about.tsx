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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Join our vibrant robotics community where innovation meets education. Whether you&apos;re a beginner or experienced, 
            we have the perfect path for your robotics journey.
          </p>
        </div>
        
        <div className="grid gap-8 lg:gap-12 md:grid-cols-2 mb-12">
          <RoboticsCard
            title="Robotics Club"
            imageSrc="/assets/robotics/group2.jpg"
            items={[
              "Learn to design, build, and code machines and robots",
              "No experience necessary",
              "Use platforms like Arduino, Raspberry Pi, and more!",
              "Open to all students!",
            ]}
            button={
              <div className="flex w-full flex-col gap-2">
                <Link href="/ymrc" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Join Robotics Club
                  </Button>
                </Link>
              </div>
            }
            gradient="from-blue-500/10 to-cyan-500/10"
            borderColor="border-blue-500/30 hover:border-blue-500/60"
          />
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Apply to Robotics Team
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Robotics Team applications are closed
                    </DialogTitle>
                  </DialogHeader>
                  <DialogDescription>
                    Applications for the Robotics Team are currently closed.
                    Please check back next semester!
                  </DialogDescription>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button className="w-full">Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            }
            gradient="from-purple-500/10 to-pink-500/10"
            borderColor="border-purple-500/30 hover:border-purple-500/60"
          />
        </div>
        
        <div className="text-center">
          <Link href="#faq" className="inline-block">
            <Button 
              variant="outline" 
              className="px-8 py-3 border-2 border-gray-600 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105"
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

function RoboticsCard({ title, imageSrc, items, button, gradient = "from-gray-800/50 to-gray-900/50", borderColor = "border-gray-700 hover:border-gray-600" }: RoboticsCardProps) {
  return (
    <Card className={`group flex h-full flex-col bg-gradient-to-br ${gradient} border ${borderColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="rounded-t-lg object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow px-6">
        <ul className="space-y-3 text-gray-300">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 mt-2 flex-shrink-0" />
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        {button}
      </CardFooter>
    </Card>
  );
}

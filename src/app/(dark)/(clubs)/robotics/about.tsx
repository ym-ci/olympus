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
      className="flex min-h-screen w-full snap-start items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold">About Us</h2>
        <div className="grid gap-8 md:grid-cols-2">
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
                  <Button className="w-full">Join Robotics Club</Button>
                </Link>
              </div>
            }
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
                  <Button className="w-full">Apply to Robotics Team</Button>
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
          />
        </div>
        <div className="pt-4">
          <Link href="#faq" className="w-full">
            <Button className="w-full" variant="outline">
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
}

function RoboticsCard({ title, imageSrc, items, button }: RoboticsCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="rounded-t-lg object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="list-inside list-disc space-y-2 text-lg">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>{button}</CardFooter>
    </Card>
  );
}

"use client";

import { FAQ } from "@/components/faq";
import { ClassroomIcon } from "@/components/icons/classroom";
import { InstagramIcon } from "@/components/icons/instagram";
import { Contact } from "@/components/contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Hero } from "@/app/(dark)/(clubs)/landing";
import { AboutUs } from "@/app/(dark)/(clubs)/robotics/about";
// import BouncingButton from "@/components/BouncingButton";
import Sponsors from "@/app/(dark)/(clubs)/robotics/sponsors";
import { ArrowLeft } from "lucide-react"

const faq = [
  {
    question: "What is the time commitment?",
    answer: (
      <div className="space-y-4">
        <p>
          <strong>VEX:</strong> Every Mondays Afterschool (3:30 - 5pm) and Tuesday Mornings (7:30am - 8:55am) in room{" "}
          <strong>206</strong>.
        </p>
        <p>
          <strong>Juniors:</strong> Every Thursday at Lunch in room{" "}
          <strong>206</strong>.
        </p>
      </div>
    ),
  },
  {
    question: "Where are meetings held?",
    answer: (
      <>
        We meet in room{" "} <strong>206</strong> for building and will go practice on our field in <strong>Titan Hall</strong>.
      </>
    ),
  },
  {
    question: "What do I need to join?",
    answer: (
      <>
        No experience is required for the Robotics Team!
        We welcome all skill levels.
      </>
    ),
  },
  {
    question: "What competitions does the team compete in?",
    answer: (
      <>
        We compete in the{" "}
        <strong className="text-blue-400 hover:text-blue-500 hover:underline">
          <Link href="https://www.vexrobotics.com/v5/competition/vrc-current-game">
            VEX V5 Robotics Competition
          </Link>
        </strong>{" "}
        (95500A){", "}
        <strong className="text-blue-400 hover:text-blue-500 hover:underline">
          <Link href="https://www.instagram.com/rsx.utoronto/?hl=en">
            SEEK RSX Jr
          </Link>
        </strong>{", "}
        <strong className="text-blue-400 hover:text-blue-500 hover:underline">
          <Link href="https://engineering.ontariotechu.ca/outreach/teacher-programs/robotics_competition/index.php">
            Ontario Tech Robotics Competition
          </Link>
        </strong>{", "}
        <strong className="text-blue-400 hover:text-blue-500 hover:underline">
          <Link href="https://ceta.ymci.ca/">
            CETA Competition
          </Link>
        </strong>{", and "}
        <strong className="text-blue-400 hover:text-blue-500 hover:underline">
          <Link href="https://skillsontario.com/">
            Skills Ontario
          </Link>
        </strong>
        <p className="mt-4">
          Additionally, we host
          <strong className="text-blue-400 hover:text-blue-500 hover:underline">
          <Link href="https://firstroboticscanada.org/fll/">{" "}
            First Lego League
          </Link>
        </strong>{" and the "}
        <strong className="text-blue-400 hover:text-blue-500 hover:underline">
          <Link href="https://ceta.ymci.ca/">
            CETA Competition
          </Link>
        </strong> {" "}
          at our school!
        </p>
      </>
    ),
  },
  {
    question: "Where can I find the team on the internet?",
    answer: (
      <>
        You can find us on{" "}
        <Link
          href="https://www.instagram.com/ym_robotics/"
          target="_blank"
          className="text-blue-400 hover:text-blue-500 hover:underline"
        >
          Instagram
        </Link>
        !
      </>
    ),
  },
  {
    question: "What is the VEX V5 Robotics Competition's objective this year?",
    answer: (
      <div className="flex w-full justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/68NxYIAzbkY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      
    ),
  },
  {
    question: "I've got more questions! Who do I contact?",
    answer: (
      <div className="flex flex-col md:flex-row gap-2">
        <Card className="w-full">
          <CardHeader>Our Team</CardHeader>
          <CardContent className="space-y-4">
            <p>
              For everything related to the team details, please
              contact our team!
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex justify-center">
                  <Button className="bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-purple-700">
                    Contact Team
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-gray-950">
                <DialogHeader>
                  <DialogTitle>Contact our Team!</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-2 items-center">
                  <p className="text-lg">
                    robotics@ymci.ca
                  </p>
                  <Link href="mailto:robotics@ymci.ca?subject=Robotics%20Team%20-%20Question">
                    <Button className="bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-purple-700">Send Email</Button>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>Staff Advisors</CardHeader>
          <CardContent className="space-y-4">
            <p>
              For other inquries please contact our staff advisors.
            </p>
            <Contact club="Robotics Team">
              <div className="flex justify-center">
                <Button className="mt-6 bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-purple-700">
                  Contact Staff Advisors
                </Button>
              </div>
            </Contact>
          </CardContent>
        </Card>
      </div>
    ),
  },
];

export default function RoboticsPage() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <Link
        href="/"
        className="fixed top-4 left-4 z-50 inline-flex items-center gap-2 rounded-lg bg-black/40 px-4 py-2 text-white backdrop-blur hover:bg-black/60 transition"
      > <ArrowLeft /> Back
      </Link>
      <Hero
        image="/assets/robotics/banner.jpg"
        title={
          <div className="flex flex-col items-center">
          <h1 className="mb-3">Robotics Team</h1>
          <div className="flex items-center justify-center gap-3">
              <Link
                href="https://www.instagram.com/ym_robotics/"
                target="_blank"
              >
                <InstagramIcon
                  className="h-8 w-8 fill-white"
                  viewBox="0 0 132 132"
                />
              </Link>

              <Link href="https://classroom.google.com/c/Nzk1NTcwMDI0NTU4" target="_blank">
                <ClassroomIcon className="h-8 w-8" />
              </Link>
            </div>
          </div>
        }
        strTitle="Robotics Team"
      />
      <AboutUs />
      <Sponsors />
      <FAQ faq={faq} />
    </main>
  );
}

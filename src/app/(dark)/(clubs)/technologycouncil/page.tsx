import { Hero } from "@/app/(dark)/(clubs)/landing";
import { AboutTechCouncil } from "@/app/(dark)/(clubs)/technologycouncil/about";
import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";
import { InstagramIcon } from "@/components/icons/instagram";
import { ClassroomIcon } from "@/components/icons/classroom";
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
import { ArrowLeft } from "lucide-react"


const faq = [
  {
    question:
      "What are the sections of the Technology Council? Can I join more than one?",
    answer:
      "The council is divided into three sections: Events, Computer Services, and 3D Printing Design. Each section focuses on different aspects of promoting technology. Students are welcome to join more than one section if they’re interested!",
  },
  {
    question: "What is the time commitment?",
    answer:
      "Once a week for each department.",
  },
  {
    question: "Where are meetings held?",
    answer: (
      <div className="space-y-4">
        <p>
          <strong>3D Printing Design:</strong> Every Tuesday at lunch in room <strong>204</strong>.
        </p>
        <p>  
          <strong>Events:</strong> Every Wednesday at lunch in room <strong>204</strong>.
        </p>
        <p>  
          <strong>Computer Services:</strong> Every Friday at lunch in room <strong>204</strong>.
        </p>
      </div>
    ),
     
  },
    {
    question: "Do I need technical expertise to join?",
    answer:
      "Not at all! We welcome students with all levels of experience—whether you’re tech-savvy or just eager to learn and contribute.",
  },
  {
    question: "What skills can I gain by joining the Technology Council?",
    answer:
      "Members can develop skills in leadership, event planning, teamwork, technical problem-solving, and effective communication.",
  },
  
  {
    question: "I've got more questions! Who do I contact?",
    answer: (
      <div className="flex flex-row gap-2">
        <Card className="w-full">
          <CardHeader>Executives</CardHeader>
          <CardContent className="space-y-4">
            <p>
              For everything related our club details, please
              contact our team!
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex justify-center">
                  <Button className="bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-purple-700">
                  Contact Executives</Button>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact our Club!</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-2 items-center">
                  <p className="text-lg">
                    technologycouncil@ymci.ca
                  </p>
                  <Link href="mailto:andrew.ng3@student.tdsb.on.ca?subject=Tech%20Council%20-%20Question">
                    <Button className="bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-purple-700">Send Email</Button>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>Staff Advisor</CardHeader>
          <CardContent className="space-y-4">
            <p>
              For other inquries please contact our staff advisors.
            </p>
            <Contact club="Technology Council">
              <div className="flex justify-center">
                <Button className="mt-6 bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-purple-700">
                Contact Staff Advisor</Button>
              </div>
            </Contact>
          </CardContent>
        </Card>
      </div>
    ),
  },
];
export default function TechCouncilPage() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <Link
        href="/"
        className="fixed top-4 left-4 z-50 inline-flex items-center gap-2 rounded-lg bg-black/40 px-4 py-2 text-white backdrop-blur hover:bg-black/60 transition"
      > <ArrowLeft /> Back
      </Link>
      <Hero
        image="/assets/tech-council/group.jpg"
        title={
          <div className="flex flex-col items-center">
            <h1 className="mb-8">Technology Council</h1>
            <div className="flex items-center justify-center gap-3">
              <Link
                href="https://www.instagram.com/ymtechcouncil/"
                target="_blank"
              >
                <InstagramIcon
                  className="h-8 w-8 fill-white"
                  viewBox="0 0 132 132"
                />
              </Link>
              <Link href="https://classroom.google.com/c/Nzk1NTcwNzk5MTY5" target="_blank">
                <ClassroomIcon className="h-8 w-8" />
              </Link>
            </div>
          </div>
        }
        strTitle="Technology Council"
      />
      <AboutTechCouncil />
      <FAQ faq={faq} />
    </main>
  );
}

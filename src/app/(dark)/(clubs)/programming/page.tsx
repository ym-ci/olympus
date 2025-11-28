import { Hero } from "@/app/(dark)/(clubs)/landing";
import { AboutProgramming } from "@/app/(dark)/(clubs)/programming/about";
import { ClassroomIcon } from "@/components/icons/classroom";
import { InstagramIcon } from "@/components/icons/instagram";
import Link from "next/link";
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
import { FAQ } from "@/components/faq";
import { ArrowLeft } from "lucide-react"

const faq = [
  {
    question: "What is the time commitment?",
    answer: (
      <div className="space-y-4">
        <p>
          One lunch per week!
        </p>
      </div>
    ),
  },
  {
    question: "Where are meetings held?",
    answer: (
      <>
        Weekly, on Mondays during lunch.{" "}
        <strong>204</strong>.
      </>
    ),
  },
  {
    question: "I've got more questions! Who do I contact?",
    answer: (
      <div className="flex flex-row gap-2">
        <Card className="w-full">
          <CardHeader>Executives</CardHeader>
          <CardContent className="space-y-4">
            <p>
              For everything else related to the team details, please
              contact our executives!
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">Contact Executives</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Executives</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                  <p>
                    <strong>Pano Karakoulas:</strong> pano.karakoulas9@student.tdsb.on.ca
                  </p>
                  <p>
                    <strong>Minghan Xiao:</strong> minghan.xiao@student.tdsb.on.ca
                  </p>
                  <p>
                    <strong>Ra&apos;ed Somji:</strong> ra&apos;ed.somji@student.tdsb.on.ca
                  </p>
                  <Link href="mailto:pano.karakoulas9@student.tdsb.on.ca,minghan.xiao@student.tdsb.on.ca,ra&apos;ed.somji@student.tdsb.on.ca?subject=Robotics%20Team%20-%20Question">
                    <Button className="w-full">Send Email</Button>
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
              For inquries regarding funding, equipment, or anything else,
              please contact our staff advisor.
            </p>
            <Contact>
              <Button className="w-full">Contact Staff Advisor</Button>
            </Contact>
          </CardContent>
        </Card>
      </div>
    ),
  },
]

export default function ProgrammingPage() {
  return (
    
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <Link
        href="/"
        className="fixed top-4 left-4 z-50 inline-flex items-center gap-2 rounded-lg bg-black/40 px-4 py-2 text-white backdrop-blur hover:bg-black/60 transition"
      > <ArrowLeft /> Back
      </Link>
      <Hero
        image="/assets/programming/banner.jpg"
        title={
          <div>
            <h1>Programming Club</h1>
            <div className="flex flex-row gap-2 place-self-center">
              <Link
                href="https://www.instagram.com/ym_programming/"
                target="_blank"
              >
                <InstagramIcon
                  className="h-8 w-8 fill-white"
                  viewBox="0 0 132 132"
                />
              </Link>

              <Link href="/ymrc?ref=site_hero_icon" target="_blank">
                <ClassroomIcon className="h-8 w-8" />
              </Link>
            </div>
          </div>
        }
        strTitle="Programming Club"
      />

      <AboutProgramming />
      <FAQ faq={faq} />
    </main>
  );
}

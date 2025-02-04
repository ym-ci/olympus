"use client";

import { AboutCyberSec } from "@/app/(dark)/(clubs)/cybersecurity/about";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const faq = [
  {
    question: "What is Cybersecurity Club?",
    answer: "The Cybersecurity Club is an inclusive and engaging group designed to introduce students to the exciting and rapidly evolving field of cybersecurity. Open to all students regardless of previous experience. We teach the basics of cyber security from the start. This is to ensure that everyone develops skills and knowledge at their own pace. Our core learning tool is HackThisSite, an interactive, hands-on platform that helps members learn by solving real-world challenges in areas such as coding, reverse engineering, cryptography, and network security. This practice helps ensure that students gain the skills they need to succeed in their competitive and future careers. We also participate in nationally recognized competitions such as PicoCTF, hosted by Carnegie Mellon University, and AngstromCTF, where our teams excel. Received a medal from the CTF event last year! These competitions are an exciting way to put our skills into practice. Compete with other schools and show what we have learned. Through our workshops, we strive to create professional yet inviting spaces. Consulting and working environment where students can explore cyber security. Get ready for the challenge and be part of a team that learns, competes, and grows together."
  },
  {
    question: "Who can join Cybersecurity Club?",
    answer: "Anyone can! No previous experience required. Our club is open to all students interested in learning about cyber security. From beginners to those with advanced skills"
  },
  {
    question: "When and where do we meet?",
    answer: "We meet every other Thursday at lunch in room 204. Bring lunch and attend!"
  },
  {
    question: "Do I need my own computer to participate?",
    answer: "Computers are available in the computer lab. However, we recommend bringing your own laptop for convenience and flexibility."
  },
  {
    question: "Do I have to compete in the CTF (Capture the Flag)?",
    answer: "Not at all! Competitions like PicoCTF and AngstromCTF are completely optional. But it's a fun way to use what you've learned and test your skills."
  },
  {
    question: "I've got more questions! Who do I contact?",
    answer: (
      <div className="flex flex-row gap-2">
        <Card className="w-full">
          <CardHeader>
            Executives
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              For everything else related to the club/team details, please contact our executives!
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">
                  Contact Executives
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Executives</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                  <p>
                    <strong>Junaid Mahmood:</strong> junaid.mahmood@student.tdsb.on.ca
                  </p>
                  <p>
                    <strong>Benjamin P.:</strong> benjamin.pourmanouchehri@student.tdsb.on.ca
                  </p>
                  <Link href="mailto:junaid.mahmood@student.tdsb.on.ca,benjamin.pourmanouchehri@student.tdsb.on.ca?subject=Cybersecurity%20Club%20-%20Question">
                    <Button className="w-full">
                      Send Email
                    </Button>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            Staff Advisor
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              For inquries regarding funding, equipment, or anything else, please contact our staff advisor.
            </p>
            <Contact>
              <Button className="w-full">
                Contact Staff Advisor
              </Button>
            </Contact>
          </CardContent>
        </Card>
      </div>
    )
  }
]
export default function RoboticsPage() {
  return (
    <main
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      <section id="landing" className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-4 snap-start">
        <h1 className="text-center text-2xl font-bold text-white md:text-6xl">
          Cybersecurity Club
        </h1>
        <div className="flex flex-row gap-2 place-self-center pt-4">
          <Link href="https://classroom.google.com/c/NjEyOTI0NTU4NTQw?cjc=3c3sijp" target="_blank">
            <Button size={"xl"}>
              Join!
            </Button>
          </Link>

          <Link href="#about">
            <Button size={"xl"} variant={"outline"}>
              <ArrowDown className="w-4 h-4" />
              Learn More
            </Button>
          </Link>
        </div>
      </section>
      <AboutCyberSec />
      <FAQ faq={faq} />
    </main>
  )
}
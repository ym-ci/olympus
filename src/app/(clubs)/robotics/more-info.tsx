import { Contact } from "@/components/contact";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

const faq = [
  {
    question: "What is the time commitment?",
    answer: (
      <div className="space-y-4">
        <p>
          <strong>Robotics Club:</strong>
          {" "}
          No time commitment, just show up to our bi-weekly meetings!
        </p>
        <p>
          <strong>Robotics Team:</strong>
          {" "}
          We meet almost every day at lunch in room <strong>204/206</strong>. We require at least 2+ hours of
          commitment per week. We also have a weekly meeting every monday after school in room <strong>206</strong>.
        </p>
      </div>
    )
  },
  {
    question: "Where are meetings held?",
    answer: (
      <>
        Bi-weekly meetings every other Thursday after school in room <strong>204</strong>,
        alternating with Programming Club.
      </>
    )
  },
  {
    question: "What do I need to join?",
    answer: (
      <>
        No experience is required for both Robotics Club and the Robotics Team! We welcome all skill levels.
      </>
    )
  },
  {
    question: "What is the difference between Robotics Club and the Robotics Team?",
    answer: (
      <>
        Robotics Club is a club that meets bi-weekly after school to work on fun projects and learn new things.
        The Robotics Team is a group of dedicated students who build and program robots to compete in competitions.
      </>
    )
  },
  {
    question: "What competitions does the team compete in?",
    answer: (
      <>
        We compete in the {" "}
        <strong className="text-blue-400 hover:underline hover:text-blue-500">
          <Link href="https://www.vexrobotics.com/v5/competition/vrc-current-game">
            VEX V5 Robotics Competition
          </Link>
        </strong> (95500A), and the {" "}
        <strong className="text-blue-400 hover:underline hover:text-blue-500">
          <Link href="https://www.cool-mcu.com/pages/ceta">
            CETA Competition
          </Link>
        </strong>
      </>
    )
  },
  {
    question: "What is the VEX V5 Robotics Competition's objective this year?",
    answer: (
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Sx6HJSpopeQ?si=ec7c0tWRPUlF_QA-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
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
                    <strong>Evan Yu:</strong> evan.yu@student.tdsb.on.ca
                  </p>
                  <p>
                    <strong>Aaron Huang:</strong> aaron.huang5@student.tdsb.on.ca
                  </p>
                  <Link href="mailto:evan.yu@student.tdsb.on.ca,aaron.huang5@student.tdsb.on.ca?subject=Robotics%20Club%20-%20Question">
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

export function MoreInfo() {
  return (
    <section id="more-info" className="h-screen w-full flex items-center justify-center snap-start">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <h2 className="text-4xl font-bold mb-6 text-center dark:text-white">FAQ</h2>
        <Accordion type="single" collapsible defaultValue={`item-${faq.length - 1}`}>
          {faq.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
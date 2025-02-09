import { Hero } from "@/app/(dark)/(clubs)/landing";
import { AboutTechCouncil } from "@/app/(dark)/(clubs)/tech-council/about";
import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";
import { InstagramIcon } from "@/components/icons/instagram";
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

const faq = [
  {
    question: "How can I join the Technology Council?",
    answer:
      "Look out for announcements at the start of the school year or reach out to the current council members for more information",
  },
  {
    question: "Do I need technical expertise to join?",
    answer:
      "Not at all! We welcome students with all levels of experience—whether you’re tech-savvy or just eager to learn and contribute",
  },
  {
    question: "Can I join both the Technology Council and a tech club?",
    answer:
      "Absolutely! Many students are active in both the council and other tech clubs, as they complement each other well",
  },
  {
    question: "What skills can I gain by joining the Technology Council?",
    answer:
      "Members can develop skills in leadership, event planning, teamwork, technical problem-solving, and effective communication.",
  },
  {
    question:
      "What are the sections of the Technology Council? Can I join more than one?",
    answer:
      "The council is divided into four sections: Events, Newsletter, Publicity, and Computer Service. Each section focuses on different aspects of promoting technology. Students are welcome to join more than one section if they’re interested!",
  },
  {
    question: "How often does the Technology Council meet?",
    answer:
      "Each section of the Technology Council—Events, Newsletter, Publicity, and Computer Service—meets weekly to plan and work on projects.",
  },

  {
    question: "I've got more questions! Who do I contact?",
    answer: (
      <div className="flex flex-row gap-2">
        <Card className="w-full">
          <CardHeader>Executives</CardHeader>
          <CardContent className="space-y-4">
            <p>
              For everything else related to the club/team details, please
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
                    <strong>Andrew Ng:</strong> andrew.ng3@student.tdsb.on.ca
                  </p>
                  <Link href="mailto:andrew.ng3@student.tdsb.on.ca?subject=Tech%20Council%20-%20Question">
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
];
export default function TechCouncilPage() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <Hero
        image="/assets/tech-council/group.jpg"
        title={
          <div>
            <h1>Tech Council</h1>
            <div className="flex flex-row gap-2 place-self-center">
              <Link
                href="https://www.instagram.com/ymtechcouncil/"
                target="_blank"
              >
                <InstagramIcon
                  className="h-8 w-8 fill-white"
                  viewBox="0 0 132 132"
                />
              </Link>
            </div>
          </div>
        }
        strTitle="Tech Council"
      />
      <AboutTechCouncil />
      <FAQ faq={faq} />
    </main>
  );
}

import { Hero } from "@/app/(clubs)/landing";
import { AboutTechCouncil } from "@/app/(clubs)/tech-council/about";
import { FAQ } from "@/components/faq";
import { InstagramIcon } from "@/components/icons/instagram";
import Link from "next/link";

/*
How can I join the Technology Council?
Look out for announcements at the start of the school year or reach out to the current council members for more information

Do I need technical expertise to join?
Not at all! We welcome students with all levels of experience—whether you’re tech-savvy or just eager to learn and contribute

Can I join both the Technology Council and a tech club?
Absolutely! Many students are active in both the council and other tech clubs, as they complement each other well

What skills can I gain by joining the Technology Council?
Members can develop skills in leadership, event planning, teamwork, technical problem-solving, and effective communication.

What are the sections of the Technology Council? Can I join more than one?
The council is divided into four sections: Events, Newsletter, Publicity, and Computer Service. Each section focuses on different aspects of promoting technology. Students are welcome to join more than one section if they’re interested!

How often does the Technology Council meet?
Each section of the Technology Council—Events, Newsletter, Publicity, and Computer Service—meets weekly to plan and work on projects.
*/
const faq = [
  {
    question: "How can I join the Technology Council?",
    answer: "Look out for announcements at the start of the school year or reach out to the current council members for more information"
  },
  {
    question: "Do I need technical expertise to join?",
    answer: "Not at all! We welcome students with all levels of experience—whether you’re tech-savvy or just eager to learn and contribute"
  },
  {
    question: "Can I join both the Technology Council and a tech club?",
    answer: "Absolutely! Many students are active in both the council and other tech clubs, as they complement each other well"
  },
  {
    question: "What skills can I gain by joining the Technology Council?",
    answer: "Members can develop skills in leadership, event planning, teamwork, technical problem-solving, and effective communication."
  },
  {
    question: "What are the sections of the Technology Council? Can I join more than one?",
    answer: "The council is divided into four sections: Events, Newsletter, Publicity, and Computer Service. Each section focuses on different aspects of promoting technology. Students are welcome to join more than one section if they’re interested!"
  },
  {
    question: "How often does the Technology Council meet?",
    answer: "Each section of the Technology Council—Events, Newsletter, Publicity, and Computer Service—meets weekly to plan and work on projects."
  }
]
export default function TechCouncilPage() {
  return (
    <main
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      <Hero image="/assets/tech-council/group.jpg" title={(
        <div>
          <h1>
            Tech Council
          </h1>
          <div className="flex flex-row gap-2 place-self-center">
            <Link href="https://www.instagram.com/ymtechcouncil/" target="_blank">
              <InstagramIcon className="w-8 h-8 fill-white" viewBox="0 0 132 132" />
            </Link>
          </div>
        </div>
      )} strTitle="Tech Council" />
      <AboutTechCouncil />
      <FAQ faq={faq} />
    </main>
  )
}
import { Hero } from "@/app/(clubs)/landing";
import { AboutProgramming } from "@/app/(clubs)/programming/about";
import { ClassroomIcon } from "@/components/icons/classroom";
import { InstagramIcon } from "@/components/icons/instagram";
import Link from "next/link";

export default function ProgrammingPage() {
  return (
    <main
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      <Hero image="/assets/programming/banner.jpg" title={(
        <div>
          <h1>
            Programming Club
          </h1>
          <div className="flex flex-row gap-2 place-self-center">
            <Link href="https://www.instagram.com/ym_programming/" target="_blank">
              <InstagramIcon className="w-8 h-8 fill-white" viewBox="0 0 132 132" />
            </Link>

            <Link href="/ymrc?ref=site_hero_icon" target="_blank">
              <ClassroomIcon className="w-8 h-8" />
            </Link>
          </div>
        </div>
      )} strTitle="Programming Club" />
      <AboutProgramming />
    </main>
  )
}
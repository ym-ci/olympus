import { Hero } from "@/app/(dark)/(clubs)/landing";
import { AboutProgramming } from "@/app/(dark)/(clubs)/programming/about";
import { ClassroomIcon } from "@/components/icons/classroom";
import { InstagramIcon } from "@/components/icons/instagram";
import Link from "next/link";

export default function ProgrammingPage() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
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
    </main>
  );
}

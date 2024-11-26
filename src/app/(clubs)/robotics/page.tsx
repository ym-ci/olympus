"use client";

import { Hero } from "@/app/(clubs)/landing";
import { AboutUs } from "@/app/(clubs)/robotics/about";
import { MoreInfo } from "@/app/(clubs)/robotics/more-info";
import { ClassroomIcon } from "@/components/icons/classroom";
import { DiscordIcon } from "@/components/icons/discord";
import { InstagramIcon } from "@/components/icons/instagram";
import Link from "next/link";

export default function RoboticsPage() {
  return (
    <main
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      <Hero image="/assets/robotics/banner.jpg" title={(
        <div>
          <h1>
            Robotics Club/Team
          </h1>
          <div className="flex flex-row gap-2 place-self-center">
            <Link href="https://www.instagram.com/ym_robotics/" target="_blank">
              <InstagramIcon className="w-8 h-8 fill-white" viewBox="0 0 132 132" />
            </Link>

            <Link href="/ymrc?ref=site_hero_icon" target="_blank">
              <ClassroomIcon className="w-8 h-8" />
            </Link>
          </div>
        </div>
      )} strTitle="Robotics Club" />
      <AboutUs />
      <MoreInfo />
    </main>
  )
}
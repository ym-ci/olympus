import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export const AboutCyberSec = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full snap-start flex-col items-center justify-center px-4 py-12"
    >
      <div className="flex w-2/3 flex-col gap-4">
        <div className="flex w-full flex-row gap-8">
          <Card className="auto w-full px-4">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold">
                What is Cybersecurity Club?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex w-full flex-col gap-2">
                <p className="text-lg">
                  Cybersecurity Club welcomes students of all levels to explore
                  cybersecurity through hands-on learning and competitions like{" "}
                  <strong>PicoCTF</strong>. We focus on coding, cryptography,
                  and teamwork in a supportive environment to build skills and
                  prepare for future careers.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="mx-auto w-full px-4">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold">
                Why should I join?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex w-full flex-col gap-2">
                <ol className="list-decimal text-lg">
                  <li>We are open to all students</li>
                  <li>
                    We use <strong>HackThisSite</strong> for hands-on learning
                    in coding, reverse engineering, cryptography, and network
                    security
                  </li>
                  <li>
                    We compete in national events like <strong>PicoCTF</strong>{" "}
                    (Carnegie Mellon) and <strong>AngstromCTF</strong>
                  </li>
                  <li>
                    We have workshops to explore cybersecurity skills and
                    careers
                  </li>
                  <li>
                    We are a team that learns, competes, and grows together
                    while preparing for future challenges
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
        <Link href="#faq" className="w-full">
          <Button size={"xl"} variant={"outline"} className="w-full">
            <ArrowDown className="h-4 w-4" />I have some questions!
          </Button>
        </Link>
      </div>
    </section>
  );
};

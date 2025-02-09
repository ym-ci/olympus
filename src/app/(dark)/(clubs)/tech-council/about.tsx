import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AboutTechCouncil = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full snap-start flex-col items-center justify-center px-4 py-12"
    >
      <div className="flex w-2/3 flex-row gap-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              What is Tech Council?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Technology Council is an initiative to increase student awareness
              and knowledge of technology, helping them succeed in and beyond
              the classroom. We offer computer services around the school and
              promote technology through newsletters and events. Additionally,
              we support other school clubs like Programming,
              Engineering/Robotics, and Cybersecurity with fundraising for
              competitions and equipment. Our mission is to enhance technology
              usage across YMCI.
            </p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Some things we do:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc text-lg">
              <li>
                <strong>Computer Services</strong> - We offer computer services
                around the school, including fixing computers, setting up
                accounts, and more.
              </li>
              <li>
                <strong>Fundraising</strong> - We support other school clubs
                like Programming, Engineering/Robotics, and Cybersecurity with
                fundraising for competitions and equipment.
              </li>

              <li>
                <strong>Events</strong> - We host events throughout the school
                year to help promote the technology clubs, and to raise funds
                for competitions and equipment.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <h1 className="pt-4 text-center text-2xl font-bold">
        SITE UNDER CONSTRUCTION
      </h1>
    </section>
  );
};

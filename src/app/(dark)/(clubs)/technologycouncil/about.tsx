import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const AboutTechCouncil = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full snap-start flex-col items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
            About Us
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Technology Council is an initiative to increase student awareness
            and knowledge of technology, helping them succeed in and beyond
            the classroom. We offer computer services around the school and
            promote technology through newsletters and events. Additionally,
            we support other school clubs like Programming and
            Robotics with fundraising for competitions and equipment. 
            Our mission is to enhance technology usage across YMCI.
          </p>
        </div>
        <div className="mb-12 flex justify-center">
          <TCCard
            title=""
            imageSrc="/assets/tech-council/group.jpg"
            items={[
              "We offer computer services around the school, including fixing computers, setting up accounts, and more.",
              "We support teachers and clubs by designing and 3D printing their ideas.",
              "We host events throughout the school year to help promote the technology clubs, and to raise funds for competitions and equipment.",
            ]}
            button={
              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <Link href="#faq" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 bg-transparent text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800"
                  >
                    Learn More
                  </Button>
                </Link>
                <Link
                  href="https://classroom.google.com/c/Nzk1NTcwNzk5MTY5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full transform bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-purple-700">
                    Join Technology Council
                  </Button>
                </Link>
              </div>
            }
            gradient="from-purple-500/10 to-pink-500/10"
            borderColor="border-purple-500/30 hover:border-purple-500/60"
          />
        </div>
      </div>
    </section>
  );
}

interface TCCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  items: string[];
  note?: string;
  button: React.ReactNode;
  gradient?: string;
  borderColor?: string;
}

function TCCard({
  title,
  description,
  imageSrc,
  items,
  note,
  button,
  gradient = "from-gray-800/50 to-gray-900/50",
  borderColor = "border-gray-700 hover:border-gray-600",
}: TCCardProps) {
  return (
    <Card
      className={`group flex h-full flex-col bg-gradient-to-br ${gradient} border ${borderColor} overflow-hidden transition-all duration-500 hover:shadow-2xl`}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="rounded-t-lg object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-2xl font-bold text-transparent">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow px-6">
        {description && (
          <p className="ml-5 mb-8 text-xl text-white-400">
            {description}
          </p>
        )}
        <ul className="space-y-3 text-gray-300">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600" />
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        {note && (
          <p className="mt-3 ml-5 text-sm text-gray-400">
            {note}
          </p>
        )}
      </CardContent>
      <CardFooter className="px-6 pb-6">{button}</CardFooter>
    </Card>
  );
}

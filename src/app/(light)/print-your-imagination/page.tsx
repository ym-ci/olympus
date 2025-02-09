import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 md:pt-24">
        <div className="mb-8 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Print Your Imagination
          </h1>
          <p className="mb-6 text-2xl text-gray-400">By YM Robotics Club</p>
          <p className="mb-8 text-xl text-muted-foreground">
            Turn your creative ideas into reality with 3D printing
            <br />A workshop by the Robotics Club
          </p>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="border-2 border-dashed">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-center text-2xl font-bold">Dream It</h2>
              <div className="relative aspect-square">
                <Image
                  src="/assets/robotics/print-your-imagination/dream_it.png"
                  alt="CAD Design Interface"
                  objectFit="contain"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="text-center text-muted-foreground">
                Design anything you can imagine using powerful 3D modeling tools
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-dashed">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-center text-2xl font-bold">Print It</h2>
              <div className="relative aspect-square">
                <Image
                  src="/assets/robotics/print-your-imagination/print_it.jpg"
                  alt="3D Printer"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="text-center text-muted-foreground">
                Send it to us and watch your ideas come to life layer by layer
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-dashed">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-center text-2xl font-bold">Use It</h2>
              <div className="relative aspect-square">
                <Image
                  src="/assets/robotics/print-your-imagination/use_it.png"
                  alt="Finished Project"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="text-center text-muted-foreground">
                Hold your imagination in your hands
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto mb-8 px-4 pt-12 text-center md:pt-24">
        <Link
          href="https://ym-robotics.gitbook.io/print-your-imagination"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-primary p-8 text-2xl hover:bg-secondary"
          >
            Start Creating Using Onshape
          </Button>
        </Link>
        <p className="mt-4 text-2xl">
          ... Or use your own 3D modeling software (e.g.{" "}
          <Link
            href="https://all3dp.com/2/tinkercad-tutorial-easy-beginners/"
            className="text-primary-300 hover:text-secondary-300 hover:underline"
          >
            Tinkercad
          </Link>
          ,{" "}
          <Link
            href="https://www.autodesk.com/learn/ondemand/collection/self-paced-learning-for-fusion"
            className="text-primary-300 hover:text-secondary-300 hover:underline"
          >
            Fusion 360
          </Link>
          ,{" "}
          <Link
            href="https://www.blender.org/"
            className="text-primary-300 hover:text-secondary-300 hover:underline"
          >
            Blender
          </Link>
          , etc.)
        </p>
        <p className="mt-4 text-2xl">
          Please make sure you are able to{" "}
          
            <span className="bg-secondary">prove</span> that you made the part{" "}
            <span className="bg-secondary">yourself</span>.{" "}
            <Link href="#proving-originality" className="text-primary-300 hover:text-secondary-300 hover:underline">
          Read more below.
          </Link>
        </p>
        <Link
          href="https://forms.gle/yZgrV4gmGDvhpCFT9"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block"
        >
          <Button size="lg" className="bg-primary p-8 text-2xl hover:bg-secondary">
            Submit Your Design
          </Button>
        </Link>
      </section>

      {/* Info Section */}
      <section className="container mx-auto max-w-3xl px-4 py-12">
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-bold">What exactly is this?</h2>
            <p className="text-muted-foreground">
              An exciting workshop where your imagination becomes reality! Join
              the Robotics Club and learn how to use 3D printing to create
              anything you can dream up. From practical inventions to artistic
              masterpieces, if you can think it, you can print it!
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">{"What you'll learn"}</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                3D modeling fundamentals – bring your ideas to life digitally
              </li>
              <li>
                Design ideation and concept development – transform inspiration
                into detailed 3D designs
              </li>
              <li>
                Digital sculpting techniques – refine and iterate your models
                with precision
              </li>
              <li>
                You design, We print – Focus on bringing your ideas into 3D and
                we bring them to real life
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">What you can create</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Custom gadgets and inventions</li>
              <li>Artistic sculptures and decorations</li>
              <li>Functional mechanical parts</li>
              <li>Prototypes of your next big idea</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">{"What's the catch?"}</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                You <b>must</b> make your own part
              </li>
              <li>Your SAC fee must be paid</li>
              <li>
                {
                  "Try to keep your part under 10mL! We will be lenient (We will contact you if it's too big!)"
                }
              </li>
              <li>Follow us on instagram! @YM_Robotics </li>
            </ul>
          </div>
          <div id="proving-originality">
            <h2 className="mb-4 text-2xl font-bold">{"Proving Originality"}</h2>
            <p className="text-muted-foreground">
              We are not a 3D printing service. We want you to make your own
              parts.
            </p>
            <p>
              <b>
                How to prove originality:
                <br />
              </b>
              Onshape has file history, Fusion 360 has a timeline, and we can
              see your tinker cad groupings.
              <br />
              In any other software, please provide{" "}
              <b>screenshots of your progress</b> or make sure there is{" "}
              <b>file history</b>. <br />
              If you have any questions, please contact us on instagram
              @YM_Robotics or join our{" "}
              <Link
                href="https://discord.gg/BmrgF8fj"
                className="text-primary-300 hover:text-secondary-300 hover:underline"
              >
                discord
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <Link
          href="https://ym-robotics.gitbook.io/print-your-imagination"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="bg-primary hover:bg-secondary">
            Start Your Creative Journey →
          </Button>
        </Link>
        <p className="mt-4 text-muted-foreground">
          Join {""}
          <Link
            href="/ymrc?ref=print-your-imagination"
            className="text-primary-300 hover:text-secondary-300 hover:underline"
          >
            Robotics Club
          </Link>{" "}
          and turn your imagination into reality!
        </p>
      </section>
    </main>
  );
}

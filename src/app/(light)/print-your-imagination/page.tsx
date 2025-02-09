import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 md:pt-24">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Print Your Imagination</h1>
          <p className="text-2xl text-gray-400 mb-6">
            By YM Robotics Club
          </p>
          <p className="text-xl text-muted-foreground mb-8">
            Turn your creative ideas into reality with 3D printing
            <br />A workshop by the Robotics Club
          </p>
          <Button size="lg" className="bg-primary hover:bg-secondary">
            Start Creating
          </Button>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 border-dashed">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-center">Dream It</h2>
              <div className="aspect-square relative">
                <Image
                  src="/assets/robotics/print-your-imagination/dream_it.png"
                  alt="CAD Design Interface"
                  objectFit="contain"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-center text-muted-foreground">
                Design anything you can imagine using powerful 3D modeling tools
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-dashed">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-center">Print It</h2>
              <div className="aspect-square relative">
                <Image
                  src="/assets/robotics/print-your-imagination/print_it.jpg"
                  alt="3D Printer"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-center text-muted-foreground">Send it to us and watch your ideas come to life layer by layer</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-dashed">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-center">Use It</h2>
              <div className="aspect-square relative">
                <Image
                  src="/assets/robotics/print-your-imagination/use_it.png"
                  alt="Finished Project"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-center text-muted-foreground">Hold your imagination in your hands</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">What exactly is this?</h2>
            <p className="text-muted-foreground">
              An exciting workshop where your imagination becomes reality! Join the Robotics Club and learn how to use
              3D printing to create anything you can dream up. From practical inventions to artistic masterpieces, if
              you can think it, you can print it!
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>3D modeling fundamentals – bring your ideas to life digitally</li>
              <li>Design ideation and concept development – transform inspiration into detailed 3D designs</li>
              <li>Digital sculpting techniques – refine and iterate your models with precision</li>
              <li>You design, We print – Focus on bringing your ideas into 3D and we bring them to real life</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">What you can create</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Custom gadgets and inventions</li>
              <li>Artistic sculptures and decorations</li>
              <li>Functional mechanical parts</li>
              <li>Prototypes of your next big idea</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">What's the catch?</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You <b>must</b> make your own part</li>
              <li>Your SAC fee must be paid</li>
              <li>Your part must not be much bigger than 10mL (We will contact you if it's too big!)</li>
              <li>Follow us on instagram! @YM_Robotics </li>

            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <Button size="lg" className="bg-primary hover:bg-secondary">
          Start Your Creative Journey →
        </Button>
        <p className="mt-4 text-muted-foreground">
          Join {""}
          <Link href="/ymrc?ref=print-your-imagination" className="text-primary-300 hover:underline hover:text-secondary-300 ">
            Robotics Club
          </Link>{" "}
          and turn your imagination into reality!
        </p>
      </section>
    </main>
  )
}


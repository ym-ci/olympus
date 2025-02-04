import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const AboutTechCouncil = () => {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-4 snap-start">
      <div className="w-2/3 flex flex-row gap-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">What is Tech Council?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Technology Council is an initiative to increase student awareness and knowledge of technology, helping them succeed in and beyond the classroom. We offer computer services around the school and promote technology through newsletters and events. Additionally, we support other school clubs like Programming, Engineering/Robotics, and Cybersecurity with fundraising for competitions and equipment. Our mission is to enhance technology usage across YMCI.
            </p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">Some things we do:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>Computer Services</strong> - We offer computer services around the school, including fixing computers, setting up accounts, and more.
              </li>
              <li>
                <strong>Fundraising</strong> - We support other school clubs like Programming, Engineering/Robotics, and Cybersecurity with fundraising for competitions and equipment.
              </li>
              
              <li>
                <strong>Events</strong> - We host events throughout the school year to help promote the technology clubs, and to raise funds for competitions and equipment.
              </li>
              
            </ul>
          </CardContent>
        </Card>
      </div>
      <h1 className="text-center text-2xl font-bold pt-4">
        SITE UNDER CONSTRUCTION
      </h1>
    </section>
  )
}
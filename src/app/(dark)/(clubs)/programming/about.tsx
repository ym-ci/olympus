import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AboutProgramming = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full snap-start flex-col items-center justify-center px-4 py-12"
    >
      <div className="flex w-2/3 flex-row gap-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              What is Programming Club?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Programming Club teaches students how to program beyond what is
              taught in classrooms. We encourage students to participate in
              competitions and work on personal projects.
            </p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              What do we do?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              We participate in the <strong>CCC</strong> (Canadian Computing
              Competition), <strong>BCC</strong> (British Computing
              Competition), and more!
            </p>
          </CardContent>
        </Card>
      </div>
      <h1 className="pt-4 text-center text-2xl font-bold">
        SITE UNDER CONSTRUCTION
      </h1>
    </section>
  );
};

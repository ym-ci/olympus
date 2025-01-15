import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardTitle, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

const Info = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative px-4 py-16 mx-auto max-w-4xl">
        <Card className="w-full max-w-2xl mx-auto backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border-white/20 shadow-xl">
          <CardHeader className="border-b border-white/10">
            <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Discover the CCC Challenge</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p>
              The Canadian Computing Competition (CCC) is an engaging programming challenge that tests your coding abilities.
              Whether you&apos;re taking your first steps in coding or you&apos;re an experienced programmer,
              the CCC offers a perfect platform to enhance your algorithmic thinking and problem-solving skills.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center gap-4 pt-4 border-t border-white/10">
            <Link href="https://cemc.uwaterloo.ca/contests/ccc-cco.html" className="group" target="_blank">
              <Button
                variant="default"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 transition-all duration-200"
              >
                <span>More Info</span>
                <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="#details">
              <Button
                variant="ghost" 
                className="text-white/90 hover:text-white hover:bg-white/10 font-medium px-6 py-2"
              >
                <Calendar className="mr-2 w-4 h-4" />
                <span>View Schedule</span>
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Info;
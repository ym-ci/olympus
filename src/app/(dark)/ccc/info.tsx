import Link from "next/link"
import { Calendar, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardTitle, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import SlideUp from "@/components/framer/slide-up";
import { FaArrowDown } from "react-icons/fa";
import { gradient } from '@/app/(dark)/ccc/ui';
import { AlertCircle, ArrowDown, Clock, DollarSign, MapPin, Utensils } from 'lucide-react';


const Info = () => {
  return (
    <section className="relative overflow-hidden">
      <SlideUp duration={0.5} delay={0.5}>
        <div className="flex flex-col md:flex-row gap-4 p-4">
          <Card className="w-full max-w-2xl mx-auto backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border-white/20 shadow-xl flex flex-col">
            <CardHeader className="border-b border-white/10">
              <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Discover the CCC Challenge</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 h-full">
              <p className="text-2xl">
                The Canadian Computing Competition (CCC) is an engaging programming challenge that tests your coding abilities.
                Whether you&apos;re taking your first steps in coding or you&apos;re an experienced programmer,
                the CCC offers a perfect platform to enhance your algorithmic thinking and problem-solving skills.
              </p>
            </CardContent>
            <CardFooter className="w-full justify-center gap-4 border-t border-white/10 pt-4">
              <Link href="https://cemc.uwaterloo.ca/contests/ccc-cco.html" className="group w-full md:w-fit" target="_blank">
                <Button
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 transition-all duration-200 w-full md:w-fit"
                >
                  <span>More Info</span>
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-2xl mx-auto backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border-white/20 shadow-xl">
            <CardHeader className="border-b border-white/10">
              <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Event Details
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-semibold text-white/90">Date</p>
                    <p className="text-white/70">Feb 19th</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-semibold text-white/90">Location</p>
                    <p className="text-white/70">Room 204/206 @ YMCI</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-semibold text-white/90">Registration Deadline</p>
                    <p className="text-white/70">Feb 7th</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-semibold text-white/90">Duration</p>
                    <p className="text-white/70">12:15-3:15 PM</p>
                    <p className="text-sm text-white/50">Please arrive by 12:00 PM!</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg">
                  <DollarSign className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-semibold text-white/90">Price</p>
                    <p className="text-white/70">$10</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg">
                  <Utensils className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-semibold text-white/90">Food</p>
                    <p className="text-white/70">TBD (extra cost)</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center pt-4 border-t border-white/10">
              <Link href="/ccc-signup" className="group w-full md:w-fit" target="_blank">
                <Button
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 transition-all duration-200 w-full md:w-fit"
                >
                  <span>Register</span>
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </SlideUp>
    </section>
  );
};

export default Info;
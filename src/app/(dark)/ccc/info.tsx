import Link from "next/link";
import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import SlideUp from "@/components/framer/slide-up";
import { FaArrowDown } from "react-icons/fa";
import { gradient } from "@/app/(dark)/ccc/ui";
import {
  AlertCircle,
  ArrowDown,
  Clock,
  DollarSign,
  MapPin,
  Utensils,
} from "lucide-react";

const Info = () => {
  return (
    <section className="relative overflow-hidden">
      <SlideUp duration={0.5} delay={0.5}>
        <div className="flex flex-col gap-4 p-4 md:flex-row">
          <Card className="mx-auto flex w-full max-w-2xl flex-col border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-xl backdrop-blur-md">
            <CardHeader className="border-b border-white/10">
              <CardTitle className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-center text-3xl font-bold text-transparent">
                Discover the CCC Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="h-full pt-6">
              <p className="text-2xl">
                The Canadian Computing Competition (CCC) is an engaging
                programming challenge that tests your coding abilities. Whether
                you&apos;re taking your first steps in coding or you&apos;re an
                experienced programmer, the CCC offers a perfect platform to
                enhance your algorithmic thinking and problem-solving skills.
              </p>
            </CardContent>
            <CardFooter className="w-full justify-center gap-4 border-t border-white/10 pt-4">
              <Link
                href="https://cemc.uwaterloo.ca/contests/ccc-cco.html"
                className="group w-full md:w-fit"
                target="_blank"
              >
                <Button
                  variant="default"
                  className="w-full bg-blue-600 px-6 py-2 font-semibold text-white transition-all duration-200 hover:bg-blue-700 md:w-fit"
                >
                  <span>More Info</span>
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="mx-auto w-full max-w-2xl border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-xl backdrop-blur-md">
            <CardHeader className="border-b border-white/10">
              <CardTitle className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-center text-3xl font-bold text-transparent">
                Event Details
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex items-center space-x-3 rounded-lg bg-white/5 p-3">
                  <Calendar className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-semibold text-white/90">Date</p>
                    <p className="text-white/70">Feb 19th</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rounded-lg bg-white/5 p-3">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-semibold text-white/90">Location</p>
                    <p className="text-white/70">Room 204/206 @ YMCI</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rounded-lg bg-white/5 p-3">
                  <AlertCircle className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-semibold text-white/90">
                      Registration Deadline
                    </p>
                    <p className="text-white/70">Feb 7th</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rounded-lg bg-white/5 p-3">
                  <Clock className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-semibold text-white/90">Duration</p>
                    <p className="text-white/70">12:15-3:15 PM</p>
                    <p className="text-sm text-white/50">
                      Please arrive by 12:00 PM!
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rounded-lg bg-white/5 p-3">
                  <DollarSign className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-semibold text-white/90">Price</p>
                    <p className="text-white/70">$10</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rounded-lg bg-white/5 p-3">
                  <Utensils className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-semibold text-white/90">Food</p>
                    <p className="text-white/70">TBD (extra cost)</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t border-white/10 pt-4">
              <Link
                href="/ccc-signup"
                className="group w-full md:w-fit"
                target="_blank"
              >
                <Button
                  variant="default"
                  className="w-full bg-blue-600 px-6 py-2 font-semibold text-white transition-all duration-200 hover:bg-blue-700 md:w-fit"
                >
                  <span>Register</span>
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

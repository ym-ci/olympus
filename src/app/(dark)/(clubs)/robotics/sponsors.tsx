import Image from "next/image";
import Link from "next/link";
import PolymakerLogo from "@/components/robotics/logos/polymaker";
import JukeboxLogo from "@/components/icons/jukebox";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="flex min-h-screen w-full snap-start items-center justify-center px-6 py-16 lg:py-24"
    >
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Our Sponsors
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We&apos;re grateful for the support of our amazing sponsors who help make our robotics journey possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Polymaker */}
          <Link 
            href="https://polymaker.com/" 
            target="_blank" 
            className="group flex items-center justify-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:bg-gray-800/50 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="w-full max-w-sm group-hover:scale-105 transition-transform duration-500">
              <PolymakerLogo className="w-full h-auto" />
            </div>
          </Link>
          
          {/* Spirit of Math */}
          <Link 
            href="https://spiritofmath.com/campus/don-mills/" 
            target="_blank" 
            className="group flex items-center justify-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:bg-gray-800/50 hover:shadow-2xl hover:shadow-purple-500/10"
          >
            <Image 
              src="/assets/robotics/sponsors/spirit-of-math.png" 
              alt="Spirit of Math" 
              width={320} 
              height={320} 
              className="w-full max-w-xs h-auto group-hover:scale-105 transition-transform duration-500" 
            />
          </Link>
        </div>
        
        {/* Jukebox - Featured Sponsor */}
        <div className="flex justify-center">
          <Link 
            href="https://jukebox.com/" 
            target="_blank" 
            className="group flex flex-col items-center justify-center p-12 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-2xl border border-pink-500/30 hover:border-pink-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20"
          >
            <div className="w-full max-w-lg group-hover:scale-105 transition-transform duration-500 mb-6">
              <JukeboxLogo className="w-full h-auto" />
            </div>
            <p className="text-gray-400 text-md text-center">
              Thank you to Jukebox for our <span className="text-blue-400 hover:text-blue-300">custom stickers</span>!
            </p>
          </Link>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Interested in supporting our team?
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Become a Sponsor
              </button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border border-gray-800">
              <DialogHeader>
                <DialogTitle>Become a Sponsor</DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-gray-400 text-md">
                Thank you for your interest in sponsoring our team! We are always looking for new sponsors to help us with our projects. If you are interested in sponsoring us, please contact us at <a href="mailto:robotics@ymci.ca" className="text-blue-400 hover:text-blue-300">robotics@ymci.ca</a>.
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
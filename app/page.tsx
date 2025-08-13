"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Music, Headphones, Instagram, Mail} from "lucide-react"
import Image from "next/image"
export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>

        <div className="max-w-4xl mx-auto relative z-10">
        <div className="relative w-[260px] h-[260px] mx-auto">
  <Image
    src="https://profilepic23.s3.us-east-1.amazonaws.com/Screenshot+2025-08-13+at+11.53.00%E2%80%AFAM.png"
    alt="StudioLyfe"
    fill
    className="rounded-full object-contain " // bg-color to fill empty space
  />
</div>
          <h1 className="bg-gradient-to-r from-blue-900 via-blue-300 to-green-300 bg-clip-text text-transparent text-5xl md:text-7xl font-bold mb-6">
            Welcome to StudioLyfe
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Professional music recording studio where your sound comes to life with{" "}
            <span className="text-blue-400 font-semibold">cutting-edge technology</span> and{" "}
            <span className="text-purple-400 font-semibold">creative passion</span>
          </p>

          <Button
            size="lg"
            className="text-lg px-8 py-6 mb-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
            onClick={() => setIsBookingOpen(true)}
          >
            <Music className="mr-2 h-5 w-5" />
            Book Now!
          </Button>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Equipment Card */}
            <Card className="bg-gray-900/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg">
                    <Headphones className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Professional Equipment</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-gray-300">
                  State-of-the-art recording equipment including industry-standard microphones, mixing consoles, and
                  monitoring systems. Our gear ensures your music sounds exactly as you envision it with{" "}
                  <span className="text-blue-400 font-semibold">crystal-clear precision</span>.
                </CardDescription>
              </CardContent>
            </Card>

            {/* StudioLyfe Brand Card */}
            <Card className="bg-gray-900/50 border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg">
                    <Music className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">StudioLyfe</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-gray-300">
                More than just a studio - we&apos;re a creative community dedicated to bringing your musical vision to
                life. Experience the StudioLyfe difference with{" "}
                  <span className="text-purple-400 font-semibold">personalized service</span> and professional results.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-md bg-gray-900 border-blue-800/30">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center text-white">Book Your Session</DialogTitle>
            <DialogDescription className="text-center text-base pt-4 text-gray-300">
              To book your session please DM us on Instagram or send us an Email
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 pt-4">
            <Button
              variant="outline"
              className="flex items-center gap-3 justify-center py-6 bg-transparent border-blue-600/50 text-white hover:bg-blue-600/20 hover:border-blue-500 transition-all duration-300"
              onClick={() => window.open("https://www.instagram.com/_studiolyfe/", "_blank")}
            >
              <Instagram className="h-5 w-5 text-pink-400" />
              DM us on Instagram
            </Button>
            <Button
  variant="outline"
  className="flex items-center gap-3 justify-center py-6 bg-transparent border-purple-600/50 text-white hover:bg-purple-600/20 hover:border-purple-500 transition-all duration-300"
  onClick={() => (window.location.href = "mailto:studiolyfela@gmail.com")}
>
  <Mail className="h-5 w-5 text-blue-400" />
  Send us an Email
</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import Image from "next/image"
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950">
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 animate-pulse"></div>
        <div className="absolute top-10 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-bounce"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="relative w-[260px] h-[260px] mx-auto mb-5">
  <Image
    src="https://profilepic23.s3.us-east-1.amazonaws.com/Screenshot+2025-08-13+at+11.53.00%E2%80%AFAM.png"
    alt="StudioLyfe"
    fill
    className="rounded-full object-contain  " // bg-color to fill empty space
  />
</div>
<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-300 to-green-300 bg-clip-text text-transparent mb-6">
            About StudioLyfe
          </h1>
    
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Studio Story */}
          <div className="mb-16">
            {/* <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Story</h2> */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-800/30">
              <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed">
              <p className="text-lg mb-6">
  StudioLyfe is a high-end music production space located in North Hollywood&apos;s music district. 
  We provide top of the line equipment and amenities at competitive prices. Whether you reserve our Asian 
  inspired A room with its private Zen Garden or Art Deco themed B room with its dreamy cloud ceiling you&apos;re 
  sure to record your next big hit. Sit back and enjoy our grammy winning production and house made food and 
  beverage options. StudioLyfe is Managed by the Highlyfe Collective. 
</p>

              </div>
            </div>
          </div>

          <section className="py-4 px-4 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
  <div className="absolute top-10 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>

  {/* Full-width heading */}
  <div className="w-full text-center relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-300 to-green-300 bg-clip-text text-transparent mb-6">
      Our Owners
    </h1>
  </div>
</section>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Max Judah */}
            <Card className="h-full bg-gray-900/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Max Judah</CardTitle>
                <CardDescription className="text-lg font-medium text-blue-400">
                  Artist • Manager
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-gray-300">
                  Max is an artist and manager based in Los Angeles. He&apos;s a skilled team builder and artist development specialist with a focus on pop and rap music.
                </p>
              </CardContent>
            </Card>

            {/* Clement Finney */}
            <Card className="h-full bg-gray-900/50 border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Clement Finney</CardTitle>
                <CardDescription className="text-lg font-medium text-blue-400">
                  Studio Designer • Creative Director
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-gray-300">
                  Clem started his journey with music studio design in college from a garage in the Midwest. He utilizes experience in West Hollywood&apos;s nightlife scene along with a wide range of other influences to create unique creative spaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
         
        </div>
      </section>
    </div>
  )
}

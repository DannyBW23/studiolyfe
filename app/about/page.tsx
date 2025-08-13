import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Users, Award, Heart, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950">
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 animate-pulse"></div>
        <div className="absolute top-10 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-bounce"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-12 w-12 text-purple-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              StudioLyfe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Where <span className="text-purple-400 font-semibold">passion</span> meets{" "}
            <span className="text-blue-400 font-semibold">precision</span>, and every note tells a story
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Studio Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Story</h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-800/30">
              <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed">
                <p className="text-lg mb-6">
                Studio Lyfe is a high-end music production space located in North Hollywood's music district. We provide top of the line equipment and amenities at competitive prices. Whether you reserve our Asian inspired A room with its private Zen Garden or Art Deco themed B room with its dreamy cloud ceiling you're sure to record your next big hit. Sit back and enjoy our grammy winning production and house made food and beverage options. Studio Life is Managed by the Highlyfe Collective. 
                </p>

              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center bg-gray-900/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <CardHeader>
                <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full w-fit mx-auto mb-4">
                  <Music className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">
                  We maintain the highest standards in equipment, acoustics, and service to ensure your music sounds
                  exceptional.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-900/50 border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <CardHeader>
                <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">
                  We work closely with artists to understand their vision and help bring their creative ideas to
                  fruition.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-900/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <CardHeader>
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">
                  We stay at the forefront of recording technology while respecting the timeless principles of great
                  sound.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-900/50 border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <CardHeader>
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full w-fit mx-auto mb-4">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Passion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">
                  Music is our life, and we bring that same passion and dedication to every project that walks through
                  our doors.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto border border-blue-800/30">
              <p className="text-xl text-white leading-relaxed">
                "To provide artists with an inspiring environment, professional expertise, and cutting-edge technology
                that empowers them to create music that moves the world. We believe every song has the power to touch
                lives, and we're here to help you share yours."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

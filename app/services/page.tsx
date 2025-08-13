import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Headphones, Mic, Zap } from "lucide-react"

export default function ServicesPage() {
  const engineers = [
    {
      name: "Jacob",
      title: "Lead Recording Engineer",
      icon: <Mic className="h-8 w-8 text-white" />,
      iconBg: "from-blue-600 to-blue-800",
      specialties: ["Recording", "Live Sessions", "Vocal Production"],
      experience: "12+ years",
      description:
        "Jacob brings over a decade of experience in capturing pristine recordings. Specializing in live band sessions and vocal production, he has an exceptional ear for detail and knows how to get the best performance from every artist.",
      achievements: "Worked with Grammy-nominated artists, 500+ successful recordings",
    },
    {
      name: "Declan",
      title: "Mixing & Mastering Specialist",
      icon: <Headphones className="h-8 w-8 text-white" />,
      iconBg: "from-purple-600 to-purple-800",
      specialties: ["Mixing", "Mastering", "Audio Post-Production"],
      experience: "10+ years",
      description:
        "Declan is a master of the mix, with an incredible ability to balance and enhance every element of your track. Her mastering work ensures your music translates perfectly across all playback systems.",
      achievements: "Platinum-certified releases, Award-winning film soundtracks",
    },
    {
      name: "Clem",
      title: "Hip-Hop & Electronic Producer",
      icon: <Zap className="h-8 w-8 text-white" />,
      iconBg: "from-blue-600 to-purple-600",
      specialties: ["Beat Making", "Electronic Production", "Sound Design"],
      experience: "8+ years",
      description:
        "Clem specializes in modern hip-hop and electronic music production. From hard-hitting beats to atmospheric soundscapes, he brings cutting-edge production techniques and fresh creative energy to every project.",
      achievements: "Chart-topping singles, Major label collaborations",
    },
   
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950">
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-10 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
        
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Engineers
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Meet the talented professionals who will bring your{" "}
            <span className="text-purple-400 font-semibold">musical vision</span> to life
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {engineers.map((engineer, index) => (
              <Card
                key={index}
                className="h-full bg-gray-900/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-2 bg-gradient-to-r ${engineer.iconBg} rounded-lg`}>{engineer.icon}</div>
                    <div>
                      <CardTitle className="text-2xl text-white">{engineer.name}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-400">{engineer.title}</CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {engineer.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-900/50 text-blue-300 border-blue-700/50">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-2">Experience</p>
                    <p className="text-base font-semibold text-purple-400">{engineer.experience}</p>
                  </div>
                  <div>
                    <p className="text-base leading-relaxed text-gray-300">{engineer.description}</p>
                  </div>
                  <div className="pt-4 border-t border-blue-800/30">
                    <p className="text-sm font-medium text-gray-400 mb-2">Notable Achievements</p>
                    <p className="text-sm text-blue-300">{engineer.achievements}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-10 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Rooms
            </span>
          </h1>
         
        </div>
      </section>
      <section className="py-12 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8">
      {/* Room A */}
      <Card className="h-full bg-gray-900/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-white">A Room</CardTitle>
          <CardDescription className="text-lg font-medium text-blue-400">
            Asian-Themed • Zen Garden
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Photos placeholder */}
          <div className="w-full h-48 bg-gradient-to-br from-red-900 to-red-700 rounded-lg flex items-center justify-center text-gray-300 italic">
            Photos Coming Soon
          </div>
          <p className="text-base leading-relaxed text-gray-300">
            Rich, moody reds set the tone in our Asian-themed A Room, creating a warm, immersive atmosphere. 
            A private Zen garden with a fountain adds a touch of nature perfect for taking breaks or sparking inspiration between takes. 
            The blend of natural elements makes this space both grounding and creatively energizing.
          </p>
        </CardContent>
      </Card>

      {/* Room B */}
      <Card className="h-full bg-gray-900/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-white">B Room</CardTitle>
          <CardDescription className="text-lg font-medium text-blue-400">
            Stylish • Creative Energy
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Photos placeholder */}
          <div className="w-full h-48 bg-gradient-to-br from-purple-900 to-purple-700 rounded-lg flex items-center justify-center text-gray-300 italic">
            Photos Coming Soon
          </div>
          <p className="text-base leading-relaxed text-gray-300">
            The B Room features a stylish blend of sophistication and creative energy offering a unique atmosphere. 
            Its vocal booth features a glowing cloud ceiling that adds a touch of magic to every session.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="py-20 px-4 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
  <div className="absolute top-10 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>

  <div className="max-w-4xl mx-auto text-center relative z-10">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
      Food &{" "}
      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
        Drink
      </span>
    </h1>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
      Complimentary beverages and delicious bites to keep your session flowing.
    </p>
  </div>
</section>

<section className="py-12 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8">
      {/* Beverages */}
      <Card className="h-full bg-gray-900/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Included Beverages</CardTitle>
          <CardDescription className="text-lg font-medium text-blue-400">
            Refreshments to keep you energized
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>Pepsi (regular or diet)</li>
            <li>Dr Pepper (regular or diet)</li>
            <li>Sparkling water</li>
            <li>Still water</li>
            <li>Green tea</li>
            <li>Lychee & Dragon Fruit Spritz</li>
            <li>Limoncello La Croix</li>
          </ul>
        </CardContent>
      </Card>

      {/* Food */}
      <Card className="h-full bg-gray-900/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Food</CardTitle>
          <CardDescription className="text-lg font-medium text-blue-400">
            Savory and sweet treats
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-white font-semibold">Caprese Sandwich</p>
            <p className="text-gray-300 text-sm">
              Fresh mozzarella cheese, prosciutto, tomatoes, basil pesto, and minced garlic on a crispy toasted
              baguette topped with Parmesan.{" "}
              <span className="italic text-gray-400">(Vegetarian option: no prosciutto)</span>
            </p>
          </div>
          <div>
            <p className="text-white font-semibold">Cookies</p>
            <p className="text-gray-300 text-sm">
              Your choice of assorted cookies: sugar, chocolate chip, matcha, strawberry cheesecake.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work with Our Team?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Each of our engineers brings unique expertise and passion to every project. Contact us to discuss which
            engineer would be the perfect fit for your musical vision.
          </p>
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-blue-800/30">
            <p className="text-base text-white">
              <strong className="text-blue-400">Book your session:</strong> DM us on Instagram or send us an email to
              get started with the right engineer for your project.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

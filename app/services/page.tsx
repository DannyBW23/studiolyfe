import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Headphones, Mic } from "lucide-react"

export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950">
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-10 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
        
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-300 to-green-300 bg-clip-text text-transparent  mb-6">
            Our Engineers
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

      {/* Jacob Stuart */}
      <Card className="h-full bg-gray-900/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg">
              <Mic className="h-8 w-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl text-white">Jacob Stuart</CardTitle>
              <CardDescription className="text-lg font-medium text-blue-400">
                Lead Recording Engineer
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-base leading-relaxed text-gray-300">
              Mixing &amp; Tracking engineer with 6.5 billion credited streams. Won his first Grammy mixing Dolby ATMOS and mastering <em>Coco Chanel</em> by Bad Bunny. Jacob now holds 3 RIAA platinum records and one gold album through working with stars like Kendrick Lamar, Guns and Roses, Future, Yeat, and much more.
            </p>
          </div>
          <div className="pt-4 border-t border-blue-800/30">
            <p className="text-sm font-medium text-gray-400 mb-2">Notable Achievements</p>
            <p className="text-sm text-blue-300">
              Platinum: EST, Gee, Yovngchimi 2x
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Jackson */}
      <Card className="h-full bg-gray-900/50 border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg">
              <Headphones className="h-8 w-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl text-white">Jackson</CardTitle>
              <CardDescription className="text-lg font-medium text-blue-400">
                Engineer
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-base leading-relaxed text-gray-300">
              Jackson is a master of the mix, with an incredible ability to balance and enhance every element of your track. Her mastering work ensures your music translates perfectly across all playback systems.
            </p>
          </div>
          {/* No notable achievements listed for now */}
        </CardContent>
      </Card>

    </div>
  </div>
</section>

{/* Owners Section */}
<section className="py-20 px-4 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
  <div className="absolute top-10 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>

  <div className="max-w-4xl mx-auto text-center relative z-10">
    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-300 to-green-300 bg-clip-text text-transparent mb-6">
      Our Owners
    </h1>
    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
      Meet the visionaries behind StudioLyfe.
    </p>
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


      
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-10 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-300 to-green-300 bg-clip-text text-transparent mb-6">
            Our Rooms
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
    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-300 to-green-300 bg-clip-text text-transparent mb-6">
      Food & Drink
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
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 via-blue-300 to-green-300 bg-clip-text text-transparent mb-6">Ready to Work with Our Team?</h2>
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

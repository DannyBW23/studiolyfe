"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mic, ArrowLeft, ArrowRight, X } from "lucide-react"
import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ServicesPage() {
  const roomAImages = [
    "https://profilepic23.s3.us-east-1.amazonaws.com/77680554546__4CE24FE1-724C-4BFB-9B33-EDC6428D82C2.jpeg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/77680555991__493F20C6-AFC0-402D-A549-C821A29BBD0E.jpeg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/77680574174__68CF8416-A96B-42C5-B142-1141DAFCF1B9.jpeg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/77680559041__DC8EA451-F11C-49A3-AC97-8BD761756430.jpeg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/77680567491__BB97D354-2FB3-4B62-ADF9-A55285992B36.jpeg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/77680560606__03EB2396-5E7B-48BC-811B-9A23A4373210.jpeg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/77680557914__CBB08B3A-FC7C-4480-B6A4-4DDA5BA5DDD8.jpeg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/77680566493__CD8B8C13-9957-4B23-9055-CF088655757B.jpeg",
  ]

  const roomBImages = [
    "https://profilepic23.s3.us-east-1.amazonaws.com/77680540289__0DE26526-FFD8-45FF-9962-DA92F67695D0.jpeg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/77680542777__8E1BE448-D8C8-4A68-BE9B-964BE74A09EF.jpeg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/77680541396__05111714-BFA7-420A-9295-38415AE79C08.jpeg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/77680539199__847539EE-8E9F-46AF-ABB0-B43487A2B701.jpeg",
  ]

  // Gallery with full-screen lightbox
  function RoomGallery({ title, images }: { title: string; images: string[] }) {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [index, setIndex] = useState(0)

    const openAt = (i: number) => {
      setIndex(i)
      setLightboxOpen(true)
    }

    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
    const next = () => setIndex((i) => (i + 1) % images.length)

    useEffect(() => {
      if (!lightboxOpen) return
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") prev()
        if (e.key === "ArrowRight") next()
        if (e.key === "Escape") setLightboxOpen(false)
      }
      window.addEventListener("keydown", onKey)
      return () => window.removeEventListener("keydown", onKey)
    }, [lightboxOpen])

    return (
      <>
        {/* Grid inside the popup */}
        <DialogContent className="max-w-5xl bg-gray-950/95 border-blue-800/40">
          <DialogHeader>
            <DialogTitle className="text-white">{title} — Gallery</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {images.map((src, i) => (
              <button
                key={i}
                aria-label="Close image viewer" 
                onClick={() => openAt(i)}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-blue-800/30 focus:outline-none focus:ring-2 focus:ring-blue-600/60"
              >
                <Image
                  src={src}
                  alt={`${title} photo ${i + 1}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={i < 2}
                />
              </button>
            ))}
          </div>
        </DialogContent>

        {/* Full-screen lightbox (separate dialog controlled by state) */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
  <DialogContent className="max-w-[95vw] w-[95vw] h-[90vh] p-0 bg-black/90 border-blue-800/40">
    {/* A11y title (visually hidden) */}
    <div className="sr-only">
      <DialogHeader>
        <DialogTitle>{title} — Image Viewer</DialogTitle>
      </DialogHeader>
    </div>

    <div className="relative w-full h-full">
      {/* Close */}
      <button
        onClick={() => setLightboxOpen(false)}
        className="absolute top-3 right-3 z-20 rounded-full bg-white/10 hover:bg-white/20 p-2"
        aria-label="Close"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Prev */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 hover:bg-white/20 p-3"
        aria-label="Previous"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 hover:bg-white/20 p-3"
        aria-label="Next"
      >
        <ArrowRight className="w-6 h-6 text-white" />
      </button>

      {/* Image */}
      <div className="relative w-full h-full">
        <Image
          src={images[index]}
          alt={`${title} full image ${index + 1}`}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  </DialogContent>
</Dialog>
      </>
    )
  }

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

      {/* Rooms */}
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
                  Asian-Themed &bull; Zen Garden
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Hero + Gallery button */}
                <div className="relative w-full h-56 sm:h-64 rounded-lg overflow-hidden border border-blue-800/30">
                  <Image
                    src={roomAImages[0]}
                    alt="A Room hero"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-3 right-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="secondary"
                          className="bg-blue-900/60 hover:bg-blue-800/70 text-white border border-blue-600/50"
                        >
                          Gallery
                        </Button>
                      </DialogTrigger>
                      <RoomGallery title="A Room" images={roomAImages} />
                    </Dialog>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-gray-300">
                  Rich, moody reds set the tone in our Asian-themed A Room, creating a warm, immersive atmosphere.
                  A private Zen garden with a fountain adds a touch of nature perfect for taking breaks or sparking
                  inspiration between takes. The blend of natural elements makes this space both grounding and
                  creatively energizing.
                </p>
              </CardContent>
            </Card>

            {/* Room B */}
            <Card className="h-full bg-gray-900/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">B Room</CardTitle>
                <CardDescription className="text-lg font-medium text-blue-400">
                  Stylish &bull; Creative Energy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Hero + Gallery button */}
                <div className="relative w-full h-56 sm:h-64 rounded-lg overflow-hidden border border-blue-800/30">
                  <Image
                    src={roomBImages[0]}
                    alt="B Room hero"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="secondary"
                          className="bg-blue-900/60 hover:bg-blue-800/70 text-white border border-blue-600/50"
                        >
                          Gallery
                        </Button>
                      </DialogTrigger>
                      <RoomGallery title="B Room" images={roomBImages} />
                    </Dialog>
                  </div>
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
            Food &amp; Drink
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
                  <li>Lychee &amp; Dragon Fruit Spritz</li>
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
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 via-blue-300 to-green-300 bg-clip-text text-transparent mb-6">
            Ready to Work with Our Team?
          </h2>
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

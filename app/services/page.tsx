"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mic, ArrowLeft, ArrowRight, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { useEffect, useRef, useState } from "react"



export default function ServicesPage() {
  const roomAImages = [

    "https://profilepic23.s3.us-east-1.amazonaws.com/IMG_1227.jpg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/IMG_1211.jpg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/IMG_6767.jpg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/IMG_8499.jpg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/IMG_8498.jpg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/IMG_8497.jpg",

  ]

  const roomBImages = [
    "https://profilepic23.s3.us-east-1.amazonaws.com/IMG_6841.jpg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/IMG_6835.jpg",
    "https://profilepic23.s3.us-east-1.amazonaws.com/IMG_6827.jpg"
  
  ]

  // Gallery with full-screen lightbox
  function RoomGallery({ title, images }: { title: string; images: string[] }) {
    // One dialog; swap between grid and lightbox
    const [mode, setMode] = useState<"grid" | "lightbox">("grid")
    const [index, setIndex] = useState(0)
  
    const openAt = (i: number) => { setIndex(i); setMode("lightbox") }
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
    const next = () => setIndex((i) => (i + 1) % images.length)
  
    // Keyboard nav in lightbox
    useEffect(() => {
      if (mode !== "lightbox") return
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") prev()
        if (e.key === "ArrowRight") next()
        if (e.key === "Escape") setMode("grid")
      }
      window.addEventListener("keydown", onKey)
      return () => window.removeEventListener("keydown", onKey)
    }, [mode])
  
    // Swipe nav in lightbox
    const start = useRef<{ x: number; y: number } | null>(null)
    const isHorizontal = useRef(false)
  
    const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
      const t = e.touches[0]
      start.current = { x: t.clientX, y: t.clientY }
      isHorizontal.current = false
    }
    const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
      if (!start.current) return
      const t = e.touches[0]
      const dx = t.clientX - start.current.x
      const dy = t.clientY - start.current.y
      if (!isHorizontal.current) isHorizontal.current = Math.abs(dx) > Math.abs(dy)
      if (isHorizontal.current) e.preventDefault() // stop page scroll while swiping
    }
    const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
      if (!start.current) return
      const t = e.changedTouches[0]
      const dx = t.clientX - start.current.x
      const dy = t.clientY - start.current.y
      const THRESHOLD = 60
      const CLOSE_Y = 120
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > THRESHOLD) {
        dx < 0 ? next() : prev()
      } else if (dy > CLOSE_Y) {
        setMode("grid") // swipe down to grid
      }
      start.current = null
      isHorizontal.current = false
    }
  
    return (
      <DialogContent
        className={
          mode === "grid"
            ? "max-w-5xl bg-gray-950/95 border-blue-800/40 p-0"
            : "max-w-[95vw] w-[95vw] h-[90vh] p-0 bg-black/90 border-blue-800/40"
        }
      >
        {/* A11y title (visible in grid, hidden in lightbox) */}
        {mode === "grid" ? (
          <DialogHeader className="px-6 pt-6 pb-4 sticky top-0 bg-gray-950/95 z-10">
            <DialogTitle className="text-white">{title} — Gallery</DialogTitle>
          </DialogHeader>
        ) : (
          <div className="sr-only">
            <DialogHeader>
              <DialogTitle>{title} — Image Viewer</DialogTitle>
            </DialogHeader>
          </div>
        )}
  
        {mode === "grid" ? (
          // -------- Scrollable grid (iOS-friendly) --------
          <div
            className="
              max-h-[70vh] sm:max-h-[75vh]
              overflow-y-auto overscroll-contain
              touch-pan-y
              [-webkit-overflow-scrolling:touch]
              px-6 pb-6
            "
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => openAt(i)}
                  className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-blue-800/30 focus:outline-none focus:ring-2 focus:ring-blue-600/60"
                  aria-label={`Open ${title} image ${i + 1}`}
                  title={`Open ${title} image ${i + 1}`}
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
          </div>
        ) : (
          // ---------------- Lightbox ----------------
          <div
            className="relative w-full h-full"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Close */}
            <DialogClose asChild>
              <button
                className="absolute top-3 right-3 z-20 rounded-full bg-white/10 hover:bg-white/20 p-2"
                aria-label="Close image viewer"
                title="Close image viewer"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </DialogClose>
  
            {/* Back to grid */}
            <button
              onClick={() => setMode("grid")}
              className="absolute top-3 left-3 z-20 rounded-full bg-white/10 hover:bg-white/20 px-3 py-2 text-white text-sm"
              aria-label="Back to grid"
              title="Back to grid"
            >
              Grid
            </button>
  
            {/* Prev / Next */}
            <button
              onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 hover:bg-white/20 p-3"
              aria-label="Previous image"
              title="Previous image"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 hover:bg-white/20 p-3"
              aria-label="Next image"
              title="Next image"
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
                  title={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950">


      {/* Owners Section */}
      

      {/* Rooms */}
      <section className="py-4 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-10 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-300 to-green-300 bg-clip-text text-transparent mb-6">
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
<section className="py-4 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-10 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-300 to-green-300 bg-clip-text text-transparent  mb-6">
            Our Engineers
          </h1>
       
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
                    <CardTitle className="text-2xl text-white">Jacob Stewart</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-400">
                      Lead Recording Engineer
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-base leading-relaxed text-gray-300">
                  Mixing &amp; Tracking engineer with 7.5 billion credited streams specializing in mixing Dolby ATMOS. Won his first Grammy assistant mastering <em>Coco Chanel</em> by Eladio Carrion feat. Bad Bunny. Jacob now holds three RIAA platinum records and one gold album through working with stars like Kendrick Lamar, Guns N&apos; Roses, Future, Yeat, and many more.
                  </p>
                </div>
                <div className="pt-4 border-t border-blue-800/30">
                  <p className="text-sm font-medium text-gray-400 mb-2">Notable Achievements</p>
                  <p className="text-sm text-blue-300">
                    Platinum: EST Gee, Yovngchimi 2x
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-4 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-10 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-300 to-green-300 bg-clip-text text-transparent mb-6">
            Food &amp; Drink
          </h1>
         
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Beverages */}
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


            {/* Food */}
            {/* <Card className="h-full bg-gray-900/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
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
            </Card> */}

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

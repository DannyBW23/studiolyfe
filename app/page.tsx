"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Music, Headphones, Instagram, Mail } from "lucide-react"
import Image from "next/image"
import { MapPin } from "lucide-react"
import Script from "next/script"

function useIOSWebView() {
  return useMemo(() => {
    if (typeof window === "undefined") return false
    const ua = window.navigator.userAgent || ""
    const isIOS = /iPad|iPhone|iPod/.test(ua)
    const isWebKit = /WebKit/.test(ua)
    const isChrome = /CriOS/.test(ua) // Chrome iOS still uses WKWebView
    // Heuristic: iOS + WebKit but not Safari UI = likely WKWebView wrapper
    const isInApp =
      !!(window as any).webkit || /FBAN|FBAV|Instagram|Line|WeChat|Twitter|GSA|Telegram/i.test(ua)
    return isIOS && isWebKit && (isInApp || !/Safari/i.test(ua) || isChrome)
  }, [])
}

/** Mobile-safe external link:
 * - Uses a real <a> (works in mobile browsers)
 * - On iOS WKWebView, falls back to location.href to avoid blocked window.open
 */
function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
}: {
  href: string
  children: React.ReactNode
  className?: string
  ariaLabel?: string
}) {
  const isIOSWV = useIOSWebView()

  const onClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (!isIOSWV) return
    // Some iOS WebViews ignore target=_blank; force top-level nav
    e.preventDefault()
    try {
      window.location.href = href
    } catch {
      // last resort
      window.open(href, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=10738%20Riverside%20Dr%20North%20Hollywood"

  // Stripe Buy Button config (Room A + Room B)
  const publishableKey =
    "pk_live_51S0p0HG5sb7Q1mBDP1Im3zQmW7sBRpf0Vk2EDmt74HYy5ws43zjshtuafgzkriLY3IZHM4vcKAUzquR845N1Y9mS00kcvIFch3"

  const roomAButtonId = "buy_btn_1S1EykG5sb7Q1mBDUX9V5aUR" // $110
  const roomBButtonId = "buy_btn_1S1F4cG5sb7Q1mBDBKFc15ba" // $90

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-blue-950">
      {/* Load Stripe's Buy Button script (safe to keep here if not in layout) */}
      <Script async src="https://js.stripe.com/v3/buy-button.js" />

      {/* Hero Section */}
      <section className="py-2 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative w-[260px] h-[260px] mx-auto">
            <Image
              src="https://profilepic23.s3.us-east-1.amazonaws.com/Screenshot+2025-08-13+at+11.53.00%E2%80%AFAM.png"
              alt="StudioLyfe"
              fill
              className="rounded-full object-contain"
              priority
            />
          </div>

          <h1 className="bg-gradient-to-r from-blue-900 via-blue-300 to-green-300 bg-clip-text text-transparent text-5xl md:text-7xl font-bold mb-6">
            Welcome to Studio Lyfe
          </h1>

          <Button
            size="lg"
            className="text-lg px-8 py-6 mb-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
            onClick={() => setIsBookingOpen(true)}
          >
            <Music className="mr-2 h-5 w-5" />
            Book Now!
          </Button>

          <div>
            <Button
              asChild
              className="mb-5 gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-full text-white shadow-md flex items-center transition-all duration-300 hover:scale-105"
            >
              <ExternalLink href={mapsUrl} ariaLabel="Open Google Maps to North Hollywood">
                <MapPin className="h-5 w-5 text-white" />
                <span className="font-semibold">North Hollywood, CA</span>
              </ExternalLink>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Equipment Card */}
            <Card className="bg-gray-900/50 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg">
                    <Headphones className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Gear List</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-white space-y-6">
                {/* Room A */}
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Room A</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-200">
                    <li><strong>Monitors:</strong> Focal Twin6</li>
                    <li><strong>Subwoofers:</strong> Two Mackie Thump118S</li>
                    <li><strong>Interface:</strong> Apollo X8 Gen 2</li>
                    <li><strong>Preamp:</strong> WA273-EQ</li>
                    <li><strong>Compressor:</strong> WA-1B</li>
                    <li><strong>Mic:</strong> U87 ai</li>
                    <li><strong>Headphones:</strong> ATH-M50x</li>
                    <li><strong>Mic Options:</strong> SM7B</li>
                    <li><strong>Headphone Options:</strong> Sony MDR-7506</li>
                  </ul>
                </div>

                {/* Room B */}
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Room B</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-200">
                    <li><strong>Monitors:</strong> Barefoot Sound Footprint02</li>
                    <li><strong>Subwoofer:</strong> KRK Sub 10”</li>
                    <li><strong>Interface:</strong> Apollo x4</li>
                    <li><strong>Preamp:</strong> WA273</li>
                    <li><strong>Compressor:</strong> WA-1B</li>
                    <li><strong>Mic:</strong> U87 ai</li>
                    <li><strong>Headphones:</strong> ATH-M50x</li>
                    <li><strong>Mic Options:</strong> SM7B</li>
                    <li><strong>Headphone Options:</strong> Sony MDR-7506</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Link href="/services">
              <Card className="bg-gray-900/50 border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg">
                      <Music className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">Studio Lyfe</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-md bg-gray-900 border-blue-800/30">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center text-white">Book Your Session</DialogTitle>
            <DialogDescription className="text-center text-base pt-4 text-gray-300">
              Choose a room and pay securely with Stripe.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-5 pt-4">
            {/* Room A Buy Button */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-white font-semibold">Room A — $110</p>
              {/* @ts-expect-error: Stripe custom element */}
              <stripe-buy-button
                buy-button-id={roomAButtonId}
                publishable-key={publishableKey}
              />
            </div>

            {/* Room B Buy Button */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-white font-semibold">Room B — $90</p>
              {/* @ts-expect-error: Stripe custom element */}
              <stripe-buy-button
                buy-button-id={roomBButtonId}
                publishable-key={publishableKey}
              />
            </div>

            {/* Contact options */}
            <div className="pt-2 grid grid-cols-1 gap-3">
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-3 justify-center py-6 bg-transparent border-blue-600/50 text-white hover:bg-blue-600/20 hover:border-blue-500 transition-all duration-300"
              >
                <ExternalLink
                  href="https://www.instagram.com/_studiolyfe/"
                  ariaLabel="Open Instagram profile in a new tab"
                >
                  <Instagram className="h-5 w-5 text-pink-400" />
                  <span>DM us on Instagram</span>
                </ExternalLink>
              </Button>

              <Button
                asChild
                variant="outline"
                className="flex items-center gap-3 justify-center py-6 bg-transparent border-purple-600/50 text-white hover:bg-purple-600/20 hover:border-purple-500 transition-all duration-300"
              >
                <a href="mailto:studiolyfela@gmail.com" aria-label="Send us an email">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>Send us an Email</span>
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

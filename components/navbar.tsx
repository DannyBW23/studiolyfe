"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-blue-800/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-[40px] h-[40px] mx-auto ">
            <Image
              src="https://profilepic23.s3.us-east-1.amazonaws.com/Screenshot+2025-08-13+at+1.54.26%E2%80%AFPM.png"
              alt="StudioLyfe"
              fill
              className="rounded-full object-contain bg-black"
            />
          </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 via-blue-300 to-green-300 bg-clip-text text-transparent">
              StudioLyfe
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 font-medium"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105 font-medium"
            >
              Services
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-300 hover:text-blue-400 hover:bg-blue-900/20"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-blue-800/30 bg-gray-900/50 backdrop-blur-sm rounded-b-lg">
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-900/20 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

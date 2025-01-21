import React from "react";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-50 to-white overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Travient.</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Tour
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Package
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </div>
          <button className="bg-black text-white hover:bg-black/90 px-4 py-2 rounded">
            Book Trip
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative pt-32 pb-16 sm:pb-24 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
              <div className="mt-24">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block">Experience</span>
                  <span className="block text-blue-600">The Magic Of Flight!</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Discover the world one adventure at a time! Book your next journey and explore amazing destinations
                  across the globe.
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                  <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg rounded">
                    Book A Trip Now
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0">
                {/* Main Aircraft Image */}
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250121-WA0016.jpg-eb5I4T1B54vpX3U5FiGtDRJIt0kjPs.jpeg"
                    alt="Aircraft in flight"
                    width="600"
                    height="400"
                    className="rounded-2xl shadow-xl"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
                  <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center opacity-50">
          <div className="text-center">airbnb</div>
          <div className="text-center">Booking.com</div>
          <div className="text-center">trivago</div>
          <div className="text-center">Expedia</div>
        </div>
      </div>
    </div>
  );
}

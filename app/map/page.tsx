'use client'
import Image from "next/image"
import { useState } from "react"

const Page = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Himalayan Glaciers
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto">
          {/* Map Section */}
          <section className="bg-white rounded-xl shadow-lg mb-10">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Map of Himalayan Glaciers
              </h2>
              <div className="relative w-full flex justify-center">
                <Image
                  src="/glacier-map.png"
                  alt="Himalayan Glaciers Map"
                  width={900}
                  height={800}
                  className={`object-contain transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoadingComplete={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                )}
              </div>
            </div>
          </section>

          {/* Statistics Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Total Glaciers</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600">15,000</p>
              <p className="text-gray-600 mt-2">Glaciers in the Himalayas</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Total Area</h3>
              </div>
              <p className="text-3xl font-bold text-green-600">5 Lakh</p>
              <p className="text-gray-600 mt-2">Square kilometres</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-cyan-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Snow Coverage</h3>
              </div>
              <p className="text-3xl font-bold text-cyan-600">33,000</p>
              <p className="text-gray-600 mt-2">Square kilometres covered by snow</p>
            </div>
          </section>

          {/* Information Section */}
          <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About Himalayan Glaciers
            </h2>
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-4">
                The Himalayas, home to about 15,000 glaciers, form one of the most significant
                mountain ranges in the world. These glaciers are a critical source of fresh
                water for millions of people across Asia.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                The total area of the Himalayas spans approximately five lakh square kilometres,
                which is about one-sixth the area of India (32 lakh sq km). Of this vast expanse,
                around 33,000 square kilometres is covered by snow and ice throughout the year.
              </p>
              <p className="text-lg leading-relaxed">
                These glaciers are not only important for their water resources but also play a
                crucial role in the region's climate, ecology, and even cultural significance.
                However, they are increasingly vulnerable to climate change, with many experiencing
                rapid retreat in recent decades.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Data provided for educational purposes</p>
        </footer>
      </div>
    </div>
  )
}

export default Page
import Image from "next/image"
import Link from "next/link"

const ContributePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contribute to Glacier Shrinkage Analyzer
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Help Us Monitor Himalayan Glaciers
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Join our community of researchers, developers, and environmental enthusiasts
                  working together to track and analyze glacier shrinkage in the Himalayas.
                </p>
                <Link
                  href="https://github.com/SakshiGits/GlacierShrinkageAnalyzer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 w-fit"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </Link>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="/glacier-map-2.jpg"
                  alt="Glacier Shrinkage Analysis"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Contribution Ways */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Code</h3>
              </div>
              <p className="text-gray-600">
                Contribute to our codebase, fix bugs, or add new features to improve our analysis tools.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Documentation</h3>
              </div>
              <p className="text-gray-600">
                Help improve our documentation, write tutorials, or translate content for wider accessibility.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Data</h3>
              </div>
              <p className="text-gray-600">
                Share glacier data, satellite imagery, or help validate our analysis results.
              </p>
            </div>
          </section>

          {/* Getting Started */}
          <section className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Getting Started
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Fork the Repository</h3>
                  <p className="text-gray-600">Click the fork button on GitHub to create your own copy of the project.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Clone and Set Up</h3>
                  <p className="text-gray-600">Clone your fork locally and follow the setup instructions in the README.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Create a Branch</h3>
                  <p className="text-gray-600">Create a new branch for your contribution with a descriptive name.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Submit a Pull Request</h3>
                  <p className="text-gray-600">Once your changes are ready, submit a pull request for review.</p>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Together, we can make a difference in glacier conservation</p>
        </footer>
      </div>
    </div>
  )
}

export default ContributePage

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-blue-50">
      {/* Hero Section with Glacier Background */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 to-cyan-700/60 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/glacier1/1920/600.jpg')] bg-cover bg-center"></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center tracking-wide">Himalayan Glaciers</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl">Understanding the Impact of Climate Change on Earth's Third Pole</p>
        </div>
      </div>

      {/* Ice Crystal Decorative Element */}
      <div className="relative">
        <svg className="absolute top-0 left-0 w-full h-20 text-white" preserveAspectRatio="none" viewBox="0 0 1440 100">
          <path fill="currentColor" d="M0,50 C320,100 420,0 740,50 C1060,100 1160,0 1440,50 L1440,0 L0,0 Z"></path>
        </svg>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-blue-100 to-transparent rounded-full -mr-32 -mt-32 opacity-70"></div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 relative">The Critical Importance of Glaciers</h2>
            <p className="text-gray-700 leading-relaxed relative z-10">
              Ice caps and glaciers cover 10% of the planet's geographical area and provide 3% of the planet's total water, accounting for almost 80% of the world's freshwater. After the Polar regions, the Himalayas have the most extensive glacier cover and are known as the "third pole". With the accelerated melting rate of glaciers in past decades resulting in a reduced volume of ice, the water security of the entire Himalayan region has been affected significantly.
            </p>
          </div>

          {/* Impact Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Increasing Hazards</h3>
              </div>
              <p className="text-gray-700">
                The region has an increasing trend of severe hydrometeorological hazards such as outburst floods, debris flow, flash floods, etc.
              </p>
            </div>

            <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Socio-economic Impact</h3>
              </div>
              <p className="text-gray-700">
                The ecological, hydrological, and socio-economic consequences of glacier retreat will threaten the livelihood of billions of people.
              </p>
            </div>
          </div>

          {/* Project Details Card */}
          <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Research Approach</h2>
            <p className="text-lg mb-6">
              This project aims to analyze the shrinkage of glaciers in the Himalayas using satellite imagery. Satellite images are manually collected from official free data available by NASA. The Satellite images are from Landsat 7, Landsat 9 and Sentinel-2 L2A consistently.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <p className="text-lg">
                We used Computer Vision technology (OpenCV-python library) to analyze the images and calculate the shrinkage of glaciers over the years.
              </p>
            </div>
          </div>

          {/* Data Sources Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Data Sources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-linear-to-br from-blue-100 to-blue-200 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-800">L7</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Landsat 7</h3>
                <p className="text-gray-600 text-sm">High-resolution imagery from NASA's earth observation satellite</p>
              </div>
              <div className="text-center">
                <div className="bg-linear-to-br from-blue-100 to-blue-200 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-800">L9</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Landsat 9</h3>
                <p className="text-gray-600 text-sm">Latest generation satellite with improved imaging capabilities</p>
              </div>
              <div className="text-center">
                <div className="bg-linear-to-br from-blue-100 to-blue-200 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-800">S2</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Sentinel-2 L2A</h3>
                <p className="text-gray-600 text-sm">ESA's mission providing high-resolution optical imagery</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Understanding Glacier Dynamics</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Indian Space Research Organization's (ISRO's) Space application Centre (SAC) has mapped 5234 glaciers of Himalayan-Karakoram (H-K) region using primarily IRS LISS III data which indicated varied loss in glacier area in the region. Geological Survey of India (GSI) and various Institutes/Universities under the projects funded by DST have conducted mass balance studies on number of glaciers and found that majority of Himalayan glaciers are melting/ retreating at varying rates in different regions. It is essential to understand the future transitions of glaciers with respect to ongoing climatic change for sustainable development.
            </p>
          </div>
        </div>
      </div>

      {/* Footer with Ice Crystal Pattern */}
      <div className="relative bg-linear-to-r from-blue-900 to-cyan-800 text-white py-12">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Himalayan Glacier Research</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our research aims to provide critical insights into the changing dynamics of Himalayan glaciers to support sustainable development in the region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
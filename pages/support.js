import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import '../app/globals.css';


function Support() {
  return (
    <>
      {/* Complete Birth Support Section */}
      <section id="birth-support-section" className="bg-white py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-start md:justify-start">
            <div className="relative w-full max-w-2xl px-4 md:px-0">
              <img
                src="/images/hand.png"
                alt="Complete Birth Support"
                className="rounded-t-[100px] rounded-br-[100px] w-full h-auto object-cover"
              />
            </div>

          </div>
                                {/* Left Content - Text Section */}
          <div className="md:w-1/2 text-right md:text-right md:pr-8">
            <h1 className="text-4xl md:text-5xl  text-left font-semibold text-gray-900 mb-2">
Postnatal support            </h1>
<p className="text-gray-600 text-left text-lg mb-6">
Preparing for the postnatal period means giving yourself a gentler, safer and more supportive return home, to better experience this major transition.
</p>
            {/* Features List */}
            <div className="space-y-6">
              {/* 1 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">
Preparing the space for returning home
                  </span>
                </div>
              </div>

              {/* 2 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">Presence as needed for childbirth</span>
                </div>
              </div>

              {/* 3 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">Emotional, physical and informational support</span>
                </div>
              </div>

              {/* 4 */}
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
Active listening, renaming physical and emotional processes                              </span>
              </div>

              {/* 5 */}
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
Valuing your parenting skills                </span>
              </div>
                            <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
Respect your pace, bring slowness and gentleness           </span>
              </div>
                            <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
Partner support      </span>
              </div>
                            <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
Connection with local resources (if needed) </span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Support
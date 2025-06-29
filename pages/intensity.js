import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import '../app/globals.css';

function Intensity() {
  return (
    <>
      <section id="birth-support-section" className="bg-white py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">

          <div className="md:w-1/2 flex justify-start md:justify-start">
            <div className="relative w-full max-w-2xl px-4 md:px-0">
              <img
                src="/images/mot.png"
                alt="Complete Birth Support"
                className="rounded-t-[100px] rounded-br-[100px] w-full h-auto object-cover"
              />
            </div>

          </div>
          <div className="md:w-1/2 text-right md:text-right md:pr-8">
            <h1 className="text-4xl md:text-5xl  text-left font-semibold text-gray-900 mb-2">
Immortalize the intensity of the meeting            </h1>
<p className="text-gray-600 text-left text-lg mb-6">
When images capture emotions, joy, and wonder, we forever remember this rite of passage, greater than ourselves.</p>
            {/* Features List */}
            <div className="space-y-6">
              {/* 1 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">
Birth photos                  </span>
                </div>
              </div>

              {/* 2 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">24-hour life session</span>
                </div>
              </div>

              {/* 3 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">Family session</span>
                </div>
              </div>

              {/* 4 */}
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
Mini session                           </span>
              </div>

              {/* 5 */}
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
No need to do anything                </span>
              </div>
                            <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
Natural, true and authentic. No gimmicks, just you            </span>
              </div>
    
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Intensity
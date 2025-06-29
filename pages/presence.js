import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import '../app/globals.css';


function Presence() {
  return (
    <>
      {/* Complete Birth Support Section */}
      <section id="birth-support-section" className="bg-white py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-start md:justify-start">
            <div className="relative w-full max-w-2xl px-4 md:px-0">
              <img
                src="/images/father.png"
                alt="Complete Birth Support"
                className="rounded-t-[100px] rounded-br-[100px] w-full h-auto object-cover"
              />
            </div>

          </div>
                                {/* Left Content - Text Section */}
          <div className="md:w-1/2 text-right md:text-right md:pr-8">
            <h1 className="text-4xl md:text-5xl  text-left font-semibold text-gray-900 mb-2">
              Complete birth support
            </h1>
<p className="text-gray-600 text-left text-lg mb-6">
  A calm, grounded and continuous presence to support you in your power and your vulnerability, without ever taking the place of the partner or the medical staff.
</p>
            {/* Features List */}
            <div className="space-y-6">
              {/* 1 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">
                    Reception and prepration  of te space for birth
                  </span>
                </div>
              </div>

              {/* 2 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">Continous presence  until 3hoursafter birth</span>
                </div>
              </div>

              {/* 3 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">Emotional, physical and information support</span>
                </div>
              </div>

              {/* 4 */}
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
                    Reminder of yuor rights and your position                </span>
              </div>

              {/* 5 */}
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
Space cCrrier
                </span>
              </div>
                            <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
Absolute respect for your choices and your place                 </span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Presence
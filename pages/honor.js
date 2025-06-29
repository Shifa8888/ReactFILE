import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import '../app/globals.css';


function Honor() {
  return (
    <>
      {/* Complete Birth Support Section */}
      <section id="birth-support-section" className="bg-white py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
          {/* Left Content - Text Section */}
          <div className="md:w-1/2 text-center md:text-left md:pl-8">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-2">
Ritual to honor pregnancy
            </h1>
            <p className="text-gray-600 text-base mb-6">
A lighthearted ceremony that brings joy and light to the mother-to-be and her baby. A ceremony to feel surrounded, supported, and valued.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {/* 1 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base font-bold text-black">
Women honor and celebrate the expectant mother               </span>
                </div>
              </div>

              {/* 2 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">They create together, take care of the mother's body in its transformation</span>
                </div>
              </div>

              {/* 3 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">They laugh, sing, dance.</span>
                </div>
              </div>

              {/* 4 */}
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
Creating an anchor jewel for the day of birth     </span>
              </div>

              {/* 5 */}
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
Cocoa ceremony
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
Custom creation of your ceremony according to your values!                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-2xl px-4 md:px-0">
              <img
                src="/images/r.png"
                alt="Complete Birth Support"
                className="rounded-t-[100px] rounded-br-[100px] w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Honor
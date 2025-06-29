import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import '../app/globals.css';

function Feeding() {
  return (
    <>
      {/* Complete Birth Support Section */}
      <section id="birth-support-section" className="bg-white py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
          {/* Left Content - Text Section */}
          <div className="md:w-1/2 text-center md:text-left md:pl-8">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-2">
              Breastfeeding support
            </h1>
            <p className="text-gray-600 text-base mb-6">
Gentle, non-judgmental support to help you experience <br />breastfeeding in a way that aligns with your needs and those of your baby.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {/* 1 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">
Promoting Skin-to-Skin Contact                  </span>
                </div>
              </div>

              {/* 2 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">Support for first breastfeeding sessions</span>
                </div>
              </div>

              {/* 3 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">Listening to your doubts and validating your feelings</span>
                </div>
              </div>

              {/* 4 */}
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
Telephone and messaging support up to 6 weeks after birth           
     </span>
              </div>

              {/* 5 */}
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
National Breastfeeding Helplin
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-2xl px-4 md:px-0">
              <img
                src="/images/mother.png"
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

export default Feeding
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import '../app/globals.css';

function Birth() {
  return (
    <>
      {/* Complete Birth Support Section */}
      <section id="birth-support-section" className="bg-white py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
          {/* Left Content - Text Section */}
          <div className="md:w-1/2 text-center md:text-left md:pl-8">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-2">
              Complete birth support
            </h1>
            <p className="text-gray-600 text-base mb-6">
              A complete preparation centered on you, your choices and your story.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {/* 1 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">
                    3 personalized prenatal meetings at home
                  </span>
                </div>
                <p className="text-gray-600 text-sm md:text-base ml-6">
                  Discussions about birth wishes, the physiological course of birth, tools for
                  connecting with your body, your breathing and your intuition, putting into
                  practice what we have learned, visualizations of your birth, exploration of
                  the role of your partner, preparation for optimal postpartum, and much more!
                </p>
              </div>

              {/* 2 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">24/7 availability</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base ml-6">
                  24/7 availability from the 37th week of pregnancy
                </p>
              </div>

              {/* 3 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-bold text-black">Attendance at the birth</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base ml-6">
                  Attendance at the birth (also includes photos that immortalize the emotions of your childbirth)
                </p>
              </div>

              {/* 4 */}
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
                  Presence at home from the start of labor , at your convenience
                </span>
              </div>

              {/* 5 */}
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#deb887]" />
                <span className="text-base font-bold text-black">
                  Breastfeeding support 6 weeks after birth
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-2xl px-4 md:px-0">
              <img
                src="/images/babyg.png"
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

export default Birth;

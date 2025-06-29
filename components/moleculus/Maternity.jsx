import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import '../../app/globals.css';

function Maternity() {
  return (
    <>
      {/* Maternity Section */}
      <section id="maternity-section" className="bg-white py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left md:pl-8">
            <button className="bg-[#deb887] hover:bg-[#d2b48c] text-white text-sm px-4 py-1 rounded-sm mb-4">
              About Us
            </button>

            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Healthy Maternity for You <br /> and Your Baby
            </h1>

            <p className="text-gray-600 text-lg mb-6 max-w-md mx-auto md:mx-0">
              My approach is rooted in a deep understanding of the physiology of
              birth and honoring its power. I guide you in building a strong sense
              of trust between you and your partner.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-md mx-auto md:mx-0">
              {[
                'We Are Leading in Pregnancy Care',
                'Service From Hospital untill your Home',
                'Professional and Experienced Doctor',
                'Solutions From Pregnant Untill Birth',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#deb887]" />
                  <span className="text-base font-semibold text-black">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#deb887] hover:bg-[#d2b48c] text-white px-6 py-2 rounded-sm text-sm font-medium">
              Explore Services
            </button>
          </div>

          {/* Right Side - Larger Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-2xl px-4 md:px-0">
              <img
                src="/images/Screenshot 2025-06-26 233835.png"
                alt="Anne-Sophie"
                className="rounded-t-[100px] rounded-br-[100px] w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Maternity;

import React from 'react';
import '../../app/globals.css';

function Healthy() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full relative h-[400px] sm:h-[500px] md:h-[600px] flex flex-col justify-center items-center text-white text-center px-4 overflow-hidden">
        
        {/* Background image */}
        <img
          src="/images/pregnent.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Blue overlay */}
        <div className="absolute inset-0 bg-blue-600 opacity-40"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
keep your confident & Healthy <br /> Until The Day Come </h1>
<p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
Lorem ipsumdolor sit amet, consectetur adipiscing elit, sed to eisumod tempor  <br />incididut ut labour et dolore manage  aliqua.Ut enim ad minim veniam, auis nostrud <br /> exercition ullamo laboris  nisi ut aliquipe ex ea commondo consequant
</p>
          <button className="bg-[#deb887] hover:bg-[#d2b48c] text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-sm text-sm sm:text-base z-30">
            Contact us
          </button>
        </div>
      </div>
    </>
  );
}

export default Healthy;

import React from 'react';
import '../../app/globals.css';

function Banner() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full relative bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px] flex flex-col justify-center items-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/images/download.jpeg')",
          backgroundColor: 'rgba(26, 32, 44, 0.7)',
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          A preparation centered on you
        </h1>
<p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
  I accompany you on the vibrant and sensitive path of parenthood.A path 
  <br />
  shaped by your values, your rhythm, your inner seasons.
</p>
        <button className="bg-[#deb887] hover:bg-[#d2b48c] text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base z-30">
          Explore Services
        </button>
      </div>

      {/* Cards Section (overlapping) */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4 sm:px-6 md:px-12 py-6 mt-[-80px] z-10 relative">
        {/* Card */}
        {[
          {
            title: 'Complete birth support',
            desc: 'A complete preparation centered on you, your choices and your story.',
            img: '/images/Screenshot 2025-06-26 160948.png',
          },
          {
            title: '24/7 availability',
            desc: '24/7 availability from the 37th week of pregnancy',
            img: '/images/time.png',
          },
          {
            title: 'Presence at childbirth',
            desc: 'A calm, grounded and continuous presence, to support you in your power and your vulnerability.',
            img: '/images/Screenshot 2025-06-26 162058.png',
          },
        ].map((card, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full sm:w-3/4 md:w-1/3 lg:w-1/4 min-h-[260px] flex flex-col transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-start gap-2 sm:gap-3 flex-grow">
              <div className="bg-green-100 p-2 sm:p-3 rounded-full">
                <img src={card.img} alt={card.title} className="w-10 sm:w-14 h-10 sm:h-14" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default Banner;

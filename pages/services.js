import React from 'react'
import '../app/globals.css'
import Header from '@/components/moleculus/Header';
import Birth from './birth';
import Presence from './presence';
import Feeding from './feeding';
import Support from './support';
import Honor from './honor';
import Intensity from './intensity';
import Testinomials2 from '@/components/moleculus/Testinimials2';
import Footer from '@/components/moleculus/Footer';
const Services = () => {
  return (
    <>
    <Header />
      {/* Hero Section */}
      <div className="w-full relative bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px] flex flex-col justify-center items-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/images/bali.avif')",
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
<Birth />
<Presence />
<Feeding />
<Support />
<Honor />
<Intensity />
<Testinomials2 />
<Footer />
    </>
  );
};

export default Services;  
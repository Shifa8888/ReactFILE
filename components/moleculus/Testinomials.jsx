import React, { useState } from 'react';
import '../../app/globals.css';

function Testinomials() {
  const testimonials = [
    {
      name: "Cléo",
      quote: "As a mother-to-be, I am very grateful to have been supported by Anne-Sophie. She was able to put me at ease from the very first meeting. She was able to identify my needs and respect my wishes to ensure the best possible delivery. Anne-Sophie is gentle and attentive. I couldn't ask for better support.",
      role: "Mother",
    },
    {
      name: "Sarah",
      quote: "The care I received was exceptional. The team was professional and made me feel confident throughout my journey. Highly recommend their services!",
      role: "Patient",
    },
    {
      name: "John",
      quote: "Amazing support during a tough time. The staff went above and beyond to ensure my comfort and recovery. Truly grateful!",
      role: "Father",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div id="testimonials" className="text-center max-w-6xl mx-auto p-8 md:p-6">
      <div className="bg-[#f5e8dd] text-[#c88f51] inline-flex px-4 py-2 rounded-md mb-8 items-center">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1.5A6.5 6.5 0 1116.5 10 6.5 6.5 0 0110 16.5zm0-7a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0110 9.5zm0-3a.875.875 0 11-.001 1.75A.875.875 0 0110 6.5z" />
        </svg>
        <span className="font-medium">Testinomials</span>
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
        What our clients says
      </h2>

      <div className="flex flex-col md:flex-row items-stretch max-w-6xl mx-auto p-4 md:p-6">
        
        
  <div className="relative w-full md:w-[30%] md:flex-shrink-0 md:-ml-8 flex justify-center self-stretch bg-white rounded-lg overflow-hidden">
    <img
      src="/images/hd.png"
      alt="Testimonial Person"
      className="w-full h-auto object-contain rounded-lg"
    />
  </div>

    <div className="w-full md:w-[70%] bg-white rounded-xl shadow p-8 md:ml-8 flex flex-col justify-between">
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-left text-[#0A1D37] mb-6">{currentTestimonial.name}</h3>
        <p className="text-[#0A1D37] text-base md:text-lg leading-relaxed mb-8">
          "{currentTestimonial.quote}"
        </p>
      </div>

<div className="flex items-center justify-between mt-8">
  <div className="flex items-center">
    <div className="w-10 h-10 rounded-full bg-[#0A1D37] flex items-center justify-center text-white text-xl mr-4">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 5-2.3 5-5S14.7 2 12 2 7 4.3 7 7s2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="text-[#0A1D37] font-semibold uppercase">{currentTestimonial.name}</span>
      <span className="text-gray-400 text-sm">{currentTestimonial.role}</span>
    </div>
  </div>

  <div className="flex">
    <button
      className="w-12 h-12 border rounded-full flex items-center justify-center mr-4 hover:bg-gray-100 transition"
      onClick={handlePrev}
    >
      <svg className="w-5 h-5 text-[#0A1D37]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>
    </button>
    <button
      className="w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
      onClick={handleNext}
    >
      <svg className="w-5 h-5 text-[#0A1D37]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
</div>
</div>
      </div>
    </div>
  );
}

export default Testinomials;
import React from 'react';
import '../../app/globals.css';

const services = [
  {
    image: "/images/Brth.png", 
    icon: (
      <svg
        className="w-6 h-6 text-[#c88f51]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a4 4 0 014 4v2H8V6a4 4 0 014-4zM6 10h12v8a4 4 0 01-4 4H10a4 4 0 01-4-4v-8z" />
      </svg>
    ),
  },
  {
    image: "/images/baby.png", 
    icon: (
      <svg
        className="w-6 h-6 text-[#c88f51]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 4h13v2H8zm0 4h13v2H8zm0 4h13v2H8zm0 4h13v2H8zM4 4h2v2H4zm0 4h2v2H4zm0 4h2v2H4zm0 4h2v2H4z" />
      </svg>
    ),
  },
  {
    image: "/images/fed.png", 
    icon: (
      <svg
        className="w-6 h-6 text-[#c88f51]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a7 7 0 00-7 7v7h14V9a7 7 0 00-7-7zM8 17h8v2H8z" />
      </svg>
    ),
  },
];

const servicesBottom = [
  {
    image: "/images/support.png", 
    icon: (
      <svg
        className="w-6 h-6 text-[#c88f51]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a4 4 0 014 4v2H8V6a4 4 0 014-4zM6 10h12v8a4 4 0 01-4 4H10a4 4 0 01-4-4v-8z" />
      </svg>
    ),
  },
  {
    image: "/images/honor.png", 
    icon: (
      <svg
        className="w-6 h-6 text-[#c88f51]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 4h13v2H8zm0 4h13v2H8zm0 4h13v2H8zm0 4h13v2H8zM4 4h2v2H4zm0 4h2v2H4zm0 4h2v2H4zm0 4h2v2H4z" />
      </svg>
    ),
  },
  {
    image: "/images/meeting.png", 
    icon: (
      <svg
        className="w-6 h-6 text-[#c88f51]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a7 7 0 00-7 7v7h14V9a7 7 0 00-7-7zM8 17h8v2H8z" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center py-16 px-4">
        <div className="bg-[#f5e8dd] text-[#c88f51] px-4 py-2 rounded-md mb-4 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1.5A6.5 6.5 0 1116.5 10 6.5 6.5 0 0110 16.5zm0-7a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0110 9.5zm0-3a.875.875 0 11-.001 1.75A.875.875 0 0110 6.5z" />
          </svg>
          <span className="font-medium">Services</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
          What Service We Offer
        </h2>

        <p className="text-base sm:text-lg text-gray-700 max-w-2xl">
          At 21, when everything seemed to be going well, a diagnosis shook my
          foundations: stage 2 Hodgkin's lymphoma. A mass lodged between my
          heart and lungs.
        </p>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center gap-6 py-16 px-4">
        {services.map((service, index) => (
          <div
            key={`top-${index}`}
            className="w-full max-w-md overflow-hidden flex flex-col items-center rounded-3xl"
          >
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] overflow-hidden">
              <img
                src={service.image}
                alt=""
                className="object-contain w-full h-full rounded-t-3xl"
              />
            </div>
          </div>
        ))}
      </section>

<section className="flex flex-col md:flex-row justify-center items-center gap-6 py-16 px-4 -mt-20">
  {servicesBottom.map((service, index) => (
    <div
      key={`bottom-${index}`}
      className="w-full max-w-md overflow-hidden flex flex-col items-center rounded-3xl"
    >
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] overflow-hidden">
        <img
          src={service.image}
          alt=""
          className="object-contain w-full h-full rounded-t-3xl"
        />
      </div>
    </div>
  ))}
</section>
    </>
  );
}

export default Services;

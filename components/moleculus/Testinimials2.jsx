import React from 'react';
import '../../app/globals.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Testinomials2() {
  return (
    <div className="bg-white p-6 md:p-12">
      {/* Centered Heading Wrapper */}
      <div className="text-center mb-24">
        <div className="bg-[#f5e8dd] text-[#c88f51] inline-flex mx-auto px-4 py-2 rounded-md mb-4 items-center">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1.5A6.5 6.5 0 1116.5 10 6.5 6.5 0 0110 16.5zm0-7a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0110 9.5zm0-3a.875.875 0 11-.001 1.75A.875.875 0 0110 6.5z" />
          </svg>
          <span className="font-medium">Testimonials</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
       Get in touch with us
        </h2>
      </div>

      <div className="bg-white rounded-3xl shadow-md overflow-hidden grid md:grid-cols-2 gap-6">
        {/* Left Side - Contact Form */}
        <div className="p-6 md:p-12 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Write a Message"
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            <button className="bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md w-fit hover:bg-yellow-700 transition">
              Send Message
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-10 space-y-4">
            <h4 className="font-semibold text-sm text-gray-800 uppercase">
              Contact Info
            </h4>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <FaEnvelope className="text-yellow-600" />
              <span>contact.foralp@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <FaPhoneAlt className="text-yellow-600" />
              <span>+33 6 03 22 36 39</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <FaMapMarkerAlt className="text-yellow-600" />
              <span>169 Imp Grand Champ 74520 Chênex</span>
            </div>
          </div>
        </div>

        {/* Right Side - Map with Image Popup */}
        <div className="relative w-full h-[600px]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27482610656!2d-118.6919303020876!3d34.02073049384708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0bbaec7c33b%3A0x9e3e5a61d0e0d4b3!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1719689380991!5m2!1sen!2s"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Image Popup Box */}
          <div className="absolute top-1/4 left-1/4 bg-white rounded-xl shadow-lg p-1 border-4 border-white">
            <img
              src="/images/home.png"
              alt="Home"
              className="w-40 h-40 rounded-lg object-cover"
            />
            <div className="text-center mt-2">
              <button className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full hover:bg-yellow-600 transition">
                View map
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testinomials2;

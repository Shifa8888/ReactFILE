import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 relative z-10">
      {/* Newsletter Section */}
      <div className="bg-[#d6a676] max-w-5xl mx-auto rounded-xl px-8 py-10 text-center shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Subscribe Newsletters</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[500px] px-5 py-3 rounded-md text-gray-700 shadow-md outline-none"
          />
          <button className="bg-[#d6a676] text-white font-medium px-6 py-3 rounded-md shadow-md border border-white hover:bg-[#c18e58]">
            Subscribe Now
          </button>
        </div>
      </div>

{/* Navigation + Icons Container */}
<div className="mt-20 flex flex-wrap   items-center justify-between w-full px-4 text-white">
  {/* Navigation Links */}
{/* Navigation Links */}
<div className="flex gap-8 flex-wrap text-sm ml-40">
  <a href="#" className="hover:text-gray-400">About us</a>
  <a href="#" className="hover:text-gray-400">Services</a>
  <a href="#" className="hover:text-gray-400">Testimonials</a>
  <a href="#" className="hover:text-gray-400">Contact us</a>
</div>

  {/* Social Icons */}
  <div className="flex gap-4 mr-80 mt-6 md:mt-0">
    <a href="#" className="bg-[#d6a676] p-3 rounded-sm text-black hover:opacity-80">
      <FaFacebookF size={18} />
    </a>
    <a href="#" className="bg-[#d6a676] p-3 rounded-sm text-black hover:opacity-80">
      <FaTwitter size={18} />
    </a>
    <a href="#" className="bg-[#d6a676] p-3 rounded-sm text-black hover:opacity-80">
      <FaInstagram size={18} />
    </a>
    <a href="#" className="bg-[#d6a676] p-3 rounded-sm text-black hover:opacity-80">
      <FaYoutube size={18} />
    </a>
  </div>
</div>
      {/* Footer Bottom */}
<div className="mt-12 border-t border-gray-700 pt-6 pb-12 px-6 text-sm flex flex-col sm:flex-row justify-between items-center text-gray-400">
        <p>© 2022 ASF. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

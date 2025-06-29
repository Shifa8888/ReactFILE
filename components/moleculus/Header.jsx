import React, { useState } from 'react';
import '../../app/globals.css';
import { MdMenu, MdClose } from 'react-icons/md';
import { useRouter } from 'next/router';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleScrollToTestimonials = () => {
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setMenuOpen(false); // Close mobile menu if open
  };

  const handleScrollToBanner = () => {
    const maternitySection = document.getElementById('maternity-section');
    if (maternitySection) {
      maternitySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setMenuOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center pr-6">
          <img
            src="/images/Screenshot 2025-06-26 145539.png"
            alt="Logo"
            className="w-14 h-14 object-cover rounded-full"
          />
        </div>

        <ul className="hidden md:flex space-x-6 text-black text-base">
          <li className="cursor-pointer hover:text-[#d2b48c] transition" onClick={handleScrollToBanner}>About Us</li>
          <li className="cursor-pointer hover:text-[#d2b48c] transition" onClick={() => router.push('/services')}>Services</li>
          <li className="cursor-pointer hover:text-[#d2b48c] transition" onClick={handleScrollToTestimonials}>Testimonials</li>
          <li className="cursor-pointer hover:text-[#d2b48c] transition">Contact Us</li>
        </ul>

        <div className="hidden md:block pl-4">
          <button className="bg-[#deb887] hover:bg-[#d2b48c] text-white px-6 py-2 rounded-md transition">
            Contact Us
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-green-600">
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="space-y-4 text-black text-base font-medium">
            <li className="cursor-pointer hover:text-green-600 transition" onClick={handleScrollToBanner}>About Us</li>
            <li className="cursor-pointer hover:text-green-600 transition" onClick={() => { router.push('/services'); setMenuOpen(false); }}>Services</li>
            <li className="cursor-pointer hover:text-green-600 transition" onClick={handleScrollToTestimonials}>Testimonials</li>
            <li className="cursor-pointer hover:text-green-600 transition">Contact Us</li>
          </ul>
          <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;

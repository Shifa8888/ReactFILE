import React from 'react';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();

  return (
<>
      <div className="bg-black text-white min-h-screen font-sans">
        {/* Header */}
        <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-black space-y-4 md:space-y-0">
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-blue-500 mr-2"></div>
            <span className="text-xl font-bold">DEUS BANK</span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-center">
            <a href="#" className="hover:text-blue-400">Home</a>
            <a href="#" className="hover:text-blue-400">About Us</a>
            <a href="#" className="hover:text-blue-400">Features</a>
            <a href="#" className="hover:text-blue-400">Account Types</a>
            <a href="#" className="hover:text-blue-400">Investments</a>
            <a href="#" className="hover:text-blue-400">FAQ</a>
            <a href="#" className="hover:text-blue-400">Contact</a>
          </div>
          <div className="flex space-x-2 mt-2 md:mt-0">
            <button className="border border-cyan-500 text-cyan-500 px-4 py-2 rounded hover:bg-cyan-500 hover:text-white">Login</button>
<button
    onClick={() => router.push('/signin')}
    className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500"
  >
    Sign Up
  </button>          </div>
        </nav>

{/* Account Creation Section */}
<section className="flex justify-center items-center py-16 bg-black">
  <div className="bg-gray-900 p-8 rounded-lg max-w-2xl w-full text-center shadow-lg">
    <h2 className="text-3xl font-bold text-cyan-400 mb-2">Create Your Account</h2>
    <p className="text-gray-300 mb-6">Join Deus Bank and experience banking without borders</p>
    <div className="bg-gray-800 p-4 rounded mb-4 flex items-center justify-center text-cyan-300 text-sm">
      <span className="mr-2">ⓘ</span> All fields marked with * are required. Your information is securely encrypted and protected.
    </div>
    <div className="flex justify-center mb-4 space-x-2">
      <button className="bg-cyan-400 text-black font-semibold px-6 py-2 rounded-l hover:bg-cyan-500">Individual</button>
      <button className="bg-gray-700 text-white font-semibold px-6 py-2 rounded-r hover:bg-gray-600">Company/Organization</button>
    </div>
    <form className="text-left space-y-4" onSubmit={(e) => { e.preventDefault(); router.push('/welcome'); }}>
      <div className="flex space-x-2">
        <div className="w-1/2">
          <label className="block text-sm text-gray-400 mb-1">First Name *</label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm text-gray-400 mb-1">Last Name *</label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Email Address *</label>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Address</label>
        <input
          type="text"
          placeholder="Address"
          className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
        />
      </div>
      <div className="flex space-x-2">
        <div className="w-1/2">
          <label className="block text-sm text-gray-400 mb-1">Password *</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm text-gray-400 mb-1">Confirm Password *</label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
          />
        </div>
      </div>
      <button type="submit" className="w-full bg-cyan-400 text-black font-semibold py-2 rounded hover:bg-cyan-500 mt-4">
        Create Individual Account
      </button>
    </form>
    <p className="mt-4 text-cyan-400 text-sm hover:underline cursor-pointer" onClick={() => router.push('/signin')}>
      Already have an account? Sign In
    </p>
  </div>
</section>     
        {/* Signup Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-10 px-4 md:px-8 bg-black">
          <div className="w-full md:w-1/2 flex justify-center">
<img
  src="/images/b.jpeg"
  alt="Bitcoin Globe"
  className="w-64 h-64 object-cover"
/>
          </div>
          <div className="w-full md:w-1/2 text-left">
            <span className="text-white uppercase">Start Now</span>
            <h2 className="text-3xl font-bold mb-4">Sign up to learn more</h2>
            <p className="mb-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-grow p-2 rounded-t sm:rounded-l sm:rounded-t-none bg-gray-800 border border-gray-700 focus:outline-none"
              />
              <button className="bg-cyan-400 text-white px-4 py-2 rounded-b sm:rounded-r sm:rounded-b-none hover:bg-cyan-600">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-900 py-8 px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6">
              <div className="flex items-center mb-2">
                <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-blue-500 mr-2"></div>
                <span className="text-xl font-bold">DEUS BANK</span>
              </div>
              <p className="text-gray-400">
                Deus Bank focuses on the security of the whole cycle of smart contracts, rigorous testing.
              </p>
              <div className="flex space-x-4 mt-4">
                {/* Social Icons (Twitter, Instagram, LinkedIn) */}
                {/* ... You already have them above, no changes needed */}
              </div>
            </div>

            <div className="w-full md:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-2">Useful Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Investments</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>

            <div className="w-full md:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-2">Support</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
              </ul>
            </div>

            <div className="w-full md:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-2">Contact Us</h3>
              <p className="text-gray-400">Email: support@deusbank.com</p>
              <p className="text-gray-400">Phone: +1 (800) 123-4567</p>
              <p className="text-gray-400">Location: New York, NY</p>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
            &copy; {new Date().getFullYear()} DEUS BANK. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

export default Header;
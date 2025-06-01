import React from 'react';

const ForgotPassword = () => {
  return (
        <>

    <div className="bg-black text-white min-h-screen font-sans">
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
          <button className="border border-cyan-500 text-cyan-500 px-4 py-2 rounded hover:bg-cyan-500">Login</button>
          <button className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500">Sign Up</button>
        </div>
      </nav>

<section className="flex justify-center items-center py-16 bg-black">
  <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full text-center">
    <h2 className="text-3xl text-cyan-400 font-bold mb-4">Forgot Password?</h2>
    <p className="mb-6 text-gray-300">
      Enter your email address and we'll send you a link to reset your password.
    </p>
    <div className="mb-6">
      <input
        type="email"
        placeholder="your@email.com"
        className="w-full p-3 bg-gray-800 text-gray-300 rounded border border-gray-700 focus:outline-none focus:border-cyan-400"
      />
    </div>
    <button className="bg-cyan-400 text-white px-6 py-3 rounded w-full hover:bg-cyan-500">
      Send Reset Link
    </button>
    <p className="mt-6 text-gray-500">
      <span className="text-blue-400 text-lg">←</span>{' '}
      <a href="#" className="text-cyan-400 hover:underline">Back to Login</a>
    </p>
  </div>
</section> 
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
      consequat. Duis aute mollit anim id est laborum.
    </p>
    <div className="flex flex-col sm:flex-row">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full sm:w-auto flex-grow p-2 rounded-t sm:rounded-l sm:rounded-t-none bg-gray-800 border border-gray-700 focus:outline-none"
      />
      <button className="bg-cyan-400 text-white px-4 py-2 rounded-b sm:rounded-r sm:rounded-b-none hover:bg-blue-600">
        Subscribe
      </button>
    </div>
  </div>
</section>

      <footer className="bg-gray-900 py-8 px-4">
        <div className="flex justify-between flex-wrap">
          <div className="w-full md:w-1/4 mb-4">
            <div className="flex items-center mb-2">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-blue-500 mr-2"></div>
              <span className="text-xl font-bold">DEUS BANK</span>
            </div>
            <p className="text-gray-400">
              Deus Bank focuses on the security of the whole cycle <br /> of smart contracts, rigorous testing.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.6c-.9.4-1.8.7-2.8.8 1-.6 1.8-1.6 2.2-2.7-.9.6-2 1-3.1 1.2-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.2-4.1-.2-7.7-2.2-10.1-5.2-.4.7-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.9-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.5 3.3-1.6 1.3-3.7 2-5.9 2-.4 0-.8 0-1.2-.1 2.1 1.4 4.6 2.2 7.3 2.2 8.7 0 13.5-7.2 13.5-13.5 0-.2 0-.4-.1-.6.9-.7 1.7-1.5 2.3-2.5z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.1c-5.5 0-9.9 4.4-9.9 9.9s4.4 9.9 9.9 9.9 9.9-4.4 9.9-9.9-4.4-9.9-9.9-9.9zm0 1.6c4.5 0 8.3 3.7 8.3 8.3s-3.7 8.3-8.3 8.3-8.3-3.7-8.3-8.3 3.7-8.3 8.3-8.3zm0 2c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 1.6c2.5 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.4 4.4-4.4zm0 1.6c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.2-2.8-2.8-2.8z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 0h-21C.7 0 0 .7 0 1.5v21c0 .8.7 1.5 1.5 1.5h21c.8 0 1.5-.7 1.5-1.5v-21c0-.8-.7-1.5-1.5-1.5zM7.5 19.5h-3v-12h3v12zm-1.5-13.5c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm15 13.5h-3v-6c0-1.4-.5-2.3-1.8-2.3-1 0-1.5.6-1.8 1.2v7.1h-3v-12h3v1.6c.4-.6 1.2-1.4 2.8-1.4 2 0 3.8 1.3 3.8 4.1v7.7z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-bold mb-2">Useful Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-blue-400">Open Account</a></li>
              <li><a href="#" className="hover:text-blue-400">Customer Support</a></li>
              <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400">Investment Options</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-gray-400 mb-2">📞 (205) 555-0100</p>
            <p className="text-gray-400 mb-2">🕒 Mon - Fri: 8am - 11pm</p>
            <p className="text-gray-400 mb-2">
              📧 <a href="mailto:EmailUs@Connect.com" className="hover:text-blue-400">EmailUs@Connect.com</a>
            </p>
          </div>
<div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-bold mb-2 text-white">Download our Mobile App</h3>
            <div className="flex flex-wrap gap-4">
<a
      href="#"
      className="bg-black text-white flex items-center px-4 py-2 rounded border border-gray-600 hover:bg-gray-800"
    >
      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.05 20.28c-.98.95-2.05.88-3.02.38-1.01-.52-2.02-1.53-3.05-1.53s-2.04 1-3.05 1.53c-.97.5-2.04.57-3.02-.38-1.67-1.62-2.9-4.5-2.9-7.35 0-2.85 1.23-5.73 2.9-7.35.98-.95 2.05-.88 3.02-.38 1.01.52 2.02 1.53 3.05 1.53s2.04-1 3.05-1.53c.97-.5 2.04-.57 3.02.38 1.67 1.62 2.9 4.5 2.9 7.35 0 2.85-1.23 5.73-2.9 7.35zM12 4.57c0-1.1.9-2 2-2s2 .9 2 2-1 2-2 2-2-.9-2-2z"></path>
      </svg>                <div className="flex flex-col">
                  <span className="text-xs">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </a>
              <a
                href="#"
                className="bg-black text-white flex items-center px-4 py-2 rounded border border-gray-600 hover:bg-gray-800"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.61 2.82A1.73 1.73 0 012 4.55v14.9c0 .96.78 1.73 1.73 1.73.46 0 .9-.18 1.22-.5l9.42-9.42-9.42-9.42c-.32-.32-.76-.5-1.22-.5zm15.94 7.44l-2.98-1.72-3.38 3.38 3.38 3.38 2.98-1.72c.96-.56.96-1.92 0-2.48zm-5.1-3.96l-2.98-1.72L5.83 9.2l5.63 5.63 2.98-1.72c.96-.56.96-1.92 0-2.48z"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs">Get it on</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>        </div>
        <div className="border-t border-gray-700 pt-4 mt-4 text-center md:text-left text-gray-400 text-sm">
          <p>© 2025 DeusBank. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a> |{' '}
            <a href="#" className="hover:text-blue-400">Terms of Conditions</a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default ForgotPassword; 
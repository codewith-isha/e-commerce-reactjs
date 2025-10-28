import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-16 lg:px-24">
      {/* Top section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">e-Shop</h3>
          <p className="text-gray-400 leading-relaxed">
            Your one-stop destination for everything you love.  
            Shop smart, live better — experience the best of online shopping with e-Shop.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-center">
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
          </ul>
        </div>

        {/* Socials + Subscribe */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-red-500 transition-colors"><FaFacebook /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><FaGithub /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><FaInstagram /></a>
          </div>

          {/* Newsletter */}
          <form className="flex items-center mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="grow px-4 py-2 text-gray-200 bg-gray-800 rounded-l-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-r-lg transition-all duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} e-Shop. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

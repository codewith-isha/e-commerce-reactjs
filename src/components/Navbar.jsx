import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTeam } from "../redux/productSlice";

const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTeam(search));
    navigate("/filter-data");
  };

  const products = useSelector((state) => state.cart.products);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Section */}
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-red-600 tracking-wide">
          <Link to="/" className="hover:text-red-700 transition duration-200">
            Luxe<span className="text-gray-800">Line</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 mx-4 hidden sm:block">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none py-2 pl-4 pr-10 rounded-lg transition duration-300"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3.5 right-3 text-red-500" />
          </form>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          {/* Cart */}
          <Link to="/cart" className="relative hover:text-red-600 transition duration-200">
            <FaShoppingCart className="text-xl" />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                {products.length}
              </span>
            )}
          </Link>

          {/* Login/Register */}
          <button
            className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition duration-300"
            onClick={() => setIsModelOpen(true)}
          >
            Login / Register
          </button>

          {/* Mobile User Icon */}
          <button
            className="block md:hidden p-2 border rounded-full hover:bg-gray-100 transition"
            onClick={() => setIsModelOpen(true)}
          >
            <FaUser className="text-gray-700 text-lg" />
          </button>
        </div>
      </div>

      {/* Bottom Navigation Links */}
      <div className="flex items-center justify-center space-x-8 py-3 bg-gray-50 text-sm font-semibold text-gray-700 border-t border-gray-200">
        <Link
          to="/"
          className="hover:text-red-600 transition duration-200 hover:underline"
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="hover:text-red-600 transition duration-200 hover:underline"
        >
          Shop
        </Link>
        <Link
          to="/contact"
          className="hover:text-red-600 transition duration-200 hover:underline"
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="hover:text-red-600 transition duration-200 hover:underline"
        >
          About
        </Link>
      </div>

      {/* Modal */}
      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;

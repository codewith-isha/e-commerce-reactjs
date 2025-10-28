import React from 'react'

const Login = ({ openSignUp }) => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Login
      </h2>

      {/* Form */}
      <form className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="Enter your password"
          />
        </div>

        {/* Remember Me + Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-red-600" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="#" className="text-red-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-all duration-200"
        >
          Login
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center justify-center my-4">
        <div className="border-t border-gray-300 grow"></div>
        <span className="px-3 text-gray-500 text-sm">OR</span>
        <div className="border-t border-gray-300 grow"></div>
      </div>

      {/* Sign up link */}
      <div className="text-center text-gray-700">
        Don’t have an account?{' '}
        <button
          onClick={openSignUp}
          className="text-red-600 hover:underline font-medium"
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Login

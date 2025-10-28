import React from 'react'

const Register = ({ openLogin }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Full Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition-colors"
        >
          Sign Up
        </button>
      </form>

      <div className="text-center mt-4">
        <span className="text-gray-700">Already have an account? </span>
        <button
          onClick={openLogin}
          className="text-red-600 font-medium hover:underline"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Register

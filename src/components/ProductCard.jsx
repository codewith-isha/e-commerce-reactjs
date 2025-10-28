import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

import toast from 'react-hot-toast'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddtoCart = (e, product) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    toast.success(' Product added successfully!', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
      iconTheme: {
        primary: '#ef4444', 
        secondary: '#fff',
      },
    })
  }

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 
                      transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl relative">
        {/* Product Image */}
        <div className="w-full h-56 flex items-center justify-center mb-4 overflow-hidden rounded-md bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-red-600 font-bold mt-1">${product.price}</p>

        {/* Stars */}
        <div className="flex items-center mt-2 space-x-1 text-yellow-400">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Add to Cart Button */}
        <button
          className="absolute bottom-4 right-4 bg-red-600 text-white text-sm font-medium 
                     px-3 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100
                     transform translate-y-3 group-hover:translate-y-0 transition-all duration-300"
          onClick={(e) => handleAddtoCart(e, product)}
        >
          Add to Cart
        </button>

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent 
                        group-hover:border-red-500 transition-all duration-300 pointer-events-none"></div>
      </div>
    </Link>
  )
}

export default ProductCard

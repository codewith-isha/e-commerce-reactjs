import React, { useEffect, useState } from 'react'
import { FaCarSide, FaQuestion, FaStar } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'
import toast from 'react-hot-toast'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)
  useEffect(()=>{
    const fetchProduct = async ()=>{
      try{
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()
        setProduct(data)
      }catch(error){
        console.log(`error fetching product: ${error}`)
      }
    }
    fetchProduct()
  },[id])
  if (!product)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600 animate-pulse">Loading product...</p>
      </div>
    )

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }))
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
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24 bg-gray-50">
      <div className="flex flex-col md:flex-row gap-12 bg-white shadow-md rounded-lg p-6 md:p-10">
        {/* Left: Product Image */}
        <div className="md:w-1/2 flex justify-center items-center border rounded-lg p-4 bg-gray-100">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-contain h-96"
          />
        </div>

        {/* Right: Product Info */}
        <div className="md:w-1/2 flex flex-col justify-between space-y-6">
          {/* Title */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              {product.title}
            </h2>
            <div className="flex items-center mb-2">
              {[...Array(Math.round(product.rating || 4))].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              <span className="text-gray-600 text-sm ml-2">({product.rating?.toFixed(1)}/5)
</span>
            </div>
            <p className="text-2xl font-bold text-red-600">${product.price}</p>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-3">
            <label htmlFor="quantity" className="text-gray-600 font-medium">
              Qty:
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border rounded-md w-20 py-1 px-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
            <button
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-all"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          {/* Extra Info */}
          <div className="flex flex-col space-y-3 text-gray-700">
            <p className="flex items-center">
              <FaCarSide className="text-red-600 mr-2" />
              <span>Fast & Free Delivery</span>
            </p>
            <p className="flex items-center">
              <FaQuestion className="text-red-600 mr-2" />
              <span>Need help? Contact our support</span>
            </p>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3 text-gray-800">
          Product Description
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {product.description ||
            'This product is made from premium quality materials, providing comfort, durability, and style. Perfect for your daily lifestyle needs.'}
        </p>
      </div>
    </div>
  )
}

export default ProductDetails

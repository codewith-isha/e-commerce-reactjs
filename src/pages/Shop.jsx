import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Shop = () => {
  const products = useSelector((state) => state.product)

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-16 lg:px-24">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          🛍️ Explore Our Products
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
          Discover top-quality products handpicked just for you. Enjoy great deals, fast shipping, and secure checkout.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {products.products.map((product, idx) => (
          <ProductCard product={product} key={idx} />
        ))}
      </div>

      {/* Empty State */}
      {products.products.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No products available at the moment.</p>
        </div>
      )}
    </div>
  )
}

export default Shop

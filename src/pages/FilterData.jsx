import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Noproduct from '../assets/Images/notfound.jpg'

const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filteredData)

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-16 lg:px-24">
      {filterProducts.length > 0 ? (
        <>
          {/* Header */}
          <div className="text-center mb-10">
          
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
              Showing results based on your selected filters.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {filterProducts.map((product, idx) => (
              <ProductCard product={product} key={idx} />
            ))}
          </div>
        </>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <img
            src={Noproduct}
            alt="No Products Found"
            className="w-60 md:w-80 mb-6 opacity-90"
          />
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            No Products Found
          </h3>
          <p className="text-gray-500 text-sm md:text-base">
            Try adjusting your filters or browse our full shop.
          </p>
        </div>
      )}
    </div>
  )
}

export default FilterData

import React from 'react'
import Man from '../assets/Images/man.jpg'
import Woman from '../assets/Images/women.jpg'
import Kid from '../assets/Images/kid.jpg'

const categories = [
  { title: 'Men', imageUrl: Man },
  { title: 'Women', imageUrl: Woman },
  { title: 'Kids', imageUrl: Kid },
]

const CategorySection = () => {
  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-24 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group h-64 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer"
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition duration-500"></div>

            {/* Text */}
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
              <p className="text-sm text-gray-200 hover:underline">View All →</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategorySection

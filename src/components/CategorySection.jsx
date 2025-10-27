import React from 'react'
import Man from '../assets/Images/man.jpg'
import Woman from '../assets/Images/women.jpg'
import Kid from '../assets/Images/kid.jpg'

const categories = [
  {
    title:'Man',
    imageUrl:Man,
  },
   {
    title:'Woman',
    imageUrl:Woman,
  },
   {
    title:'Kids',
    imageUrl:Kid,
  },
]
const CategorySection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
      {categories.map((category,index)=>{
       return  <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <img src={category.imageUrl} className='w-full h-full object-cover rounded-lg shadow-md'/>
          <div className='absolute top-20 left-12'>
            <p className='text-xl font-bold'>{category.title}</p>
            <p className='text-gray-600'>View All</p>
          </div>
        </div>
      })}
    </div>
  )
}

export default CategorySection
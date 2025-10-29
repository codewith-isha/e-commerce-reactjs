import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import ProductCard from '../components/ProductCard'
import { setProducts } from '../redux/productSlice'

const Shop = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product)
  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    const fetchProducts = async () =>{
      if(products.products.length === 0){
        setLoading(true);
        try {
          const response = await fetch('https://dummyjson.com/products')
          const data = await response.json();
          dispatch(setProducts(data.products))
        } catch (error) {
          console.log(`Error fetching products : ${error}`)
        }finally{
          setLoading(false)
        }
      }
    };
    fetchProducts()
  },[dispatch,products.products.length])
  if(loading){
    return(
      <div className='text-center py-20 text-gray-600 text-lg'>
        Loading Products....
      </div>
    )
  }
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
       {products.products.length === 0 && !loading && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            No products available at the moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default Shop

import React, { useEffect } from "react";
import { Categories } from "../assets/mockData";
import Heroimage from "../assets/Images/hero.png";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import ProductCard from "../components/ProductCard";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  
  useEffect(()=>{
    const fetchProducts = async () =>{
      try {
        const res = await fetch("https://dummyjson.com/products?limit=50")
        const data = await res.json();
        dispatch(setProducts(data.products))
        
      } catch (error) {
        console.log(`Error fetching Products : ${error}`)
      }
    }
    fetchProducts()
  },[dispatch])

 

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="container mx-auto mt-4 px-4 md:px-16 lg:px-24 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Categories */}
          <div className="w-full md:w-3/12">
            <div className="bg-red-600 text-white text-sm font-semibold px-4 py-3 rounded-t-lg shadow-md">
              SHOP BY CATEGORIES
            </div>
            <ul className="space-y-3 bg-gray-50 border border-gray-200 p-4 rounded-b-lg shadow-sm">
              {Categories.map((category, ind) => (
                <li
                  key={ind}
                  className="flex items-center text-gray-700 text-sm font-medium hover:text-red-600 transition duration-200 cursor-pointer"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero Image Section */}
          <div className="relative w-full md:w-9/12 h-96 rounded-xl overflow-hidden shadow-md">
            <img
              src={Heroimage}
              alt="Hero"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent flex flex-col justify-center px-8">
              <p className="text-gray-200 mb-2 font-medium">Isha | e-Shop</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                WELCOME TO E-SHOP
              </h2>
              <p className="text-lg md:text-xl mt-2 font-semibold text-gray-100">
                MILLIONS+ PRODUCTS
              </p>
              <Link to="/shop">
                <button className="bg-red-600 hover:bg-red-700 px-8 py-2 mt-5 text-white rounded-lg font-medium shadow-md transform transition duration-300 hover:scale-105">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-12">
        <InfoSection />
      </div>

      {/* Categories Section */}
      <div className="mt-12">
        <CategorySection />
      </div>

      {/* Top Products */}
     {/* Top Products Section */}
<section className="bg-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">🔥 Top Products</h2>

    {products.length === 0 ? (
      <div className="flex items-center justify-center py-20">
        <p className="text-center text-gray-500">Loading products...</p>
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 auto-rows-fr">
        {products.slice(0, 5).map((product) => (
          /* ensure ProductCard takes full cell height */
          <div key={product.id} className="w-full h-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    )}
  </div>
</section>


      {/* Shop Section */}
      <div className="bg-gray-50 py-10">
        <Shop />
      </div>
    </div>
  );
};

export default Home;

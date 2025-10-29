import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from '../assets/Images/emptycart.png'
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../components/Modal'
import ChangeAddress from '../components/ChangeAdress'
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const [address, setAddress] = useState('Main Street, 0012')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24 min-h-[80vh] bg-gray-50">
      {cart.products.length > 0 ? (
        <div>
          {/* Page Header */}
          <h3 className="text-3xl font-bold mb-8 text-gray-800 text-center md:text-left">
            🛍️ Shopping Cart
          </h3>

          {/* Main Cart Layout */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left: Product List */}
            <div className="md:w-2/3 bg-white rounded-lg shadow-md border">
              <div className="flex justify-between px-4 py-3 border-b text-sm font-semibold text-gray-700">
                <p>Product</p>
                <div className="flex space-x-8">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                  <p>Remove</p>
                </div>
              </div>

              {/* Cart Items */}
              <div className="divide-y">
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-gray-50 transition-all duration-200"
                  >
                    {/* Product Info */}
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <img
                         src={product.image}
                        alt={product.title}
                        className="w-20 h-20 object-contain rounded-md border"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {product.title}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Product ID: {product.id}
                        </p>
                      </div>
                    </div>

                    {/* Price, Quantity, Subtotal, Remove */}
                    <div className="flex items-center justify-between md:space-x-10 text-sm md:text-base">
                      <p className="font-semibold">${product.price}</p>

                      <div className="flex items-center border rounded-md">
                        <button
                          className="px-2 text-lg font-bold hover:bg-gray-100"
                          onClick={() =>
                            dispatch(decreaseQuantity(product.id))
                          }
                        >
                          -
                        </button>
                        <p className="px-3">{product.quantity}</p>
                        <button
                          className="px-2 text-lg hover:bg-gray-100"
                          onClick={() =>
                            dispatch(increaseQuantity(product.id))
                          }
                        >
                          +
                        </button>
                      </div>

                      <p className="font-semibold">
                        ${(product.quantity * product.price).toFixed(2)}
                      </p>

                      <button
                        className="text-red-500 hover:text-red-700 transition-colors"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Summary Card */}
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border h-fit">
              <h3 className="text-xl font-bold mb-6 border-b pb-2">
                Cart Summary
              </h3>

              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Total Items:</span>
                <span className="font-semibold">{cart.totalQuantity}</span>
              </div>

              <div className="mb-4 border-b pb-4">
                <p className="text-gray-700 font-medium mb-1">Shipping:</p>
                <p className="text-sm text-gray-600">
                  Shipping to: <span className="font-semibold">{address}</span>
                </p>
                <button
                  className="text-blue-500 hover:underline text-sm mt-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  Change Address
                </button>
              </div>

              <div className="flex justify-between text-lg font-semibold mb-6">
                <span>Total:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>

              <button
                className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition-all"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* Modal for address */}
          <Modal isModelOpen={isModalOpen} setIsModelOpen={setIsModalOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModelOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        /* Empty Cart */
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <img
            src={EmptyCart}
            alt="Empty Cart"
            className="w-60 md:w-80 mb-6 opacity-90"
          />
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            Your Cart is Empty
          </h3>
          <p className="text-gray-500 text-sm md:text-base mb-6">
            Looks like you haven’t added anything to your cart yet.
          </p>
          <button
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-all"
            onClick={() => navigate('/shop')}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart

import React from 'react'
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa'

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-4xl text-red-600 mb-3" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-4xl text-red-600 mb-3" />,
      title: "24/7 Support",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-red-600 mb-3" />,
      title: "Easy Payments",
      description: "Your payment information is safe with us",
    },
    {
      icon: <FaTag className="text-4xl text-red-600 mb-3" />,
      title: "Exclusive Offers",
      description: "Enjoy the best prices on our products",
    },
    {
      icon: <FaLock className="text-4xl text-red-600 mb-3" />,
      title: "Secure Checkout",
      description: "Your transactions are fully protected",
    },
  ]

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {infoItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md border border-gray-100
              hover:shadow-lg hover:-translate-y-1 transform transition duration-300 cursor-pointer"
            >
              <div className="bg-red-100 p-4 rounded-full">{item.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InfoSection

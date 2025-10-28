import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-red-600 text-white py-20 px-6 md:px-16 lg:px-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Store</h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
          Your one-stop destination for high-quality products and a shopping
          experience you’ll love.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2020, <span className="font-semibold">ShopEase</span> was born
              with a simple mission — to make online shopping fast, easy, and
              enjoyable. We started as a small family business and have now
              grown into a trusted online destination for thousands of customers
              across the country.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From clothing and accessories to home essentials, we bring you
              carefully curated products that blend quality, affordability, and
              style. Every order we deliver is a reflection of our passion for
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">
            Our Mission & Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Quality First
              </h3>
              <p className="text-gray-600">
                We partner with trusted suppliers to ensure every product meets
                our strict quality standards before reaching your doorstep.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Customer Centric
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority. We offer 24/7 support and
                hassle-free returns for a stress-free shopping experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We’re committed to eco-friendly packaging and responsible
                sourcing to make shopping sustainable for our planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10 text-gray-800">
            Meet Our Team
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "Gaurav",
                role: "Founder & CEO",
                img: "https://randomuser.me/api/portraits/men/75.jpg",
              },
              {
                name: "Priya Sharma",
                role: "Marketing Head",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
              },
              {
                name: "Rahul Verma",
                role: "Product Manager",
                img: "https://randomuser.me/api/portraits/men/78.jpg",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-red-500"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h4>
                <p className="text-red-600 text-sm font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Shop with Confidence?
        </h2>
        <p className="text-gray-100 mb-6">
          Join thousands of happy customers and explore our latest collections
          today.
        </p>
        <a
          href="/shop"
          className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Shop Now
        </a>
      </section>
    </div>
  );
};

export default About;

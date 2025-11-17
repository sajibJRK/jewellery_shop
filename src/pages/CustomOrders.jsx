import React, { use } from 'react';

import { ProductsContext } from '../contaxt/ProductsContext';

export default function CustomOrders() {
  const { customData, loading } = use(ProductsContext);

  if (loading || !customData || !customData.formFields) return <p className="text-center py-10">Loading...</p>;

  return (
    <section className="w-full my-10 bg-[#033670]  py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl text-yellow-100 font-bold drop-shadow-[0_0_3px_rgba(247,206,57,1)] mb-3">
            {customData.title} / কাস্টম ডিজাইন
          </h2>
          <p className=" text-gray-200 text-xl font-semibold  max-w-2xl mx-auto">
            {customData.description}
          </p>
        </div>

        {/* Form */}
        <div className="bg-[#033670] rounded-3xl drop-shadow-[0_0_3px_rgba(247,206,57,1)] p-10 mb-16 border border-gray-200">
          <h3 className="text-2xl text-center mb-8 font-bold text-yellow-300 drop-shadow-[0_0_1px_rgba(0,0,0,1)] ">
            Custom Jewelry Order Form
          </h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="border text-yellow-500 border-gray-300  rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 shadow-sm" />
              <input type="number" placeholder="Phone Number" className="border text-yellow-500 font-semibold border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 shadow-sm" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select className="border border-yellow-400 rounded-xl px-4 py-3 bg-yellow-50 text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 shadow-sm">
                {customData.formFields.material?.map((mat, idx) => (
                  <option key={idx}>{mat}</option>
                ))}
              </select>
              <select className="border border-yellow-400 rounded-xl px-4 py-3 bg-yellow-50 text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 shadow-sm">
                {customData.formFields.gemstone?.map((gem, idx) => (
                  <option key={idx}>{gem}</option>
                ))}
              </select>
            </div>

            <select className="border border-yellow-400 rounded-xl px-4 py-3 bg-yellow-50 text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 shadow-sm w-full">
              {customData.formFields.designType?.map((design, idx) => (
                <option key={idx}>{design}</option>
              ))}
            </select>

            <textarea rows="4"  placeholder="Design Details" className="border border-gray-300 text-yellow-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 shadow-sm w-full" />

            <button type="submit" className="w-full bg-yellow-500 text-white py-3 rounded-2xl font-semibold text-lg hover:bg-yellow-600 transition-shadow shadow-md">
              Submit Custom Order
            </button>
          </form>
        </div>

        {/* Previous Designs */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-300 mb-8 text-center">
            Previous Custom Designs / পূর্বের কাস্টম ডিজাইন
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {customData.examples?.map((ex) => (
              <div key={ex.id} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-5 border border-gray-200 overflow-hidden">
                <div className="w-full h-56 rounded-2xl mb-4" style={{ backgroundImage: `url(${ex.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <h4 className="font-semibold text-gray-900 text-lg">{ex.name}</h4>
                <p className="text-gray-700 text-sm mt-1">Material: {ex.material} | Gemstone: {ex.gemstone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
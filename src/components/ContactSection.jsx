import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#0F1B2B] text-white py-16 px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-[0_0_8px_rgba(247,206,57,0.7)] text-amber-300">
          Get in Touch
        </h2>
        <p className="text-amber-200 mt-2 text-lg">
          We are always here to help you choose the perfect piece.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left - Contact Details */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-amber-300">
            Contact Information
          </h3>

          <p className="text-amber-100">
            Have a question? Looking for something special? Our team is ready to assist you.
          </p>

          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-amber-300"></i>
              21 Golden Street, Diamond City, BD
            </p>

            <p className="flex items-center gap-3">
              <i className="fa-solid fa-phone text-amber-300"></i>
              +880 1405-523893
            </p>

            <p className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-amber-300"></i>
              support@shreegoldhouse.com
            </p>
          </div>

          <div className="flex gap-5 text-2xl mt-6">
            <i className="fa-brands fa-facebook text-amber-300 hover:text-amber-400 cursor-pointer transition"></i>
            <i className="fa-brands fa-instagram text-amber-300 hover:text-amber-400 cursor-pointer transition"></i>
            <i className="fa-brands fa-twitter text-amber-300 hover:text-amber-400 cursor-pointer transition"></i>
          </div>
        </div>

        {/* Right - Message Form */}
        <form className="bg-[#132030] border border-amber-300/40 rounded-lg p-8 space-y-5 shadow-[0_0_20px_rgba(247,206,57,0.2)]">
          <div>
            <label className="block mb-2 text-amber-200">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-transparent border border-amber-300 rounded-md focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-amber-200">Your Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-transparent border border-amber-300 rounded-md focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-amber-200">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 bg-transparent border border-amber-300 rounded-md focus:outline-none focus:border-amber-400"
            ></textarea>
          </div>

          {/* Premium Button */}
          <button className="w-full py-3 bg-amber-300 text-black font-semibold rounded-md hover:bg-amber-400 hover:shadow-[0_0_25px_rgba(247,206,57,0.8)] transition-all duration-300">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

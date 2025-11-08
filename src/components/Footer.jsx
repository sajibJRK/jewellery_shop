import React from 'react'

export default function Footer() {
  return (
    <>
<footer className="bg-gray-900 text-gray-200 py-12 px-6 md:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    
    {/* Brand Section */}
    <div className="flex flex-col">
      <h6 className="text-xl font-[Playfair_Display] font-bold mb-4 text-yellow-500">Golden Elegance</h6>
      <p className="text-gray-400 text-sm">
        Exquisite jewellery designed for timeless beauty. Discover our latest collections and exclusive offers.
      </p>
    </div>

    {/* Collections */}
    <div>
      <h6 className="text-lg font-semibold mb-4 text-yellow-400">Collections</h6>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-yellow-300 transition-colors">Rings</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition-colors">Necklaces</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition-colors">Earrings</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition-colors">Bracelets</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h6 className="text-lg font-semibold mb-4 text-yellow-400">Services</h6>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-yellow-300 transition-colors">Custom Jewellery</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition-colors">Jewellery Cleaning</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition-colors">Repair & Restoration</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition-colors">Gift Wrapping</a></li>
      </ul>
    </div>

    {/* Legal & Company */}
    <div>
      <h6 className="text-lg font-semibold mb-4 text-yellow-400">About & Legal</h6>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-yellow-300 transition-colors">About Us</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition-colors">Contact</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-yellow-300 transition-colors">Terms & Conditions</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom Footer */}
  <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
    &copy; {new Date().getFullYear()} Golden Elegance. All rights reserved.
  </div>
</footer>

    </>
  )
}

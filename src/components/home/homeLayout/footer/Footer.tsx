import { Facebook, FacebookIcon, Instagram, InstagramIcon,  ShirtIcon, Twitter, TwitterIcon } from 'lucide-react';
import React from 'react';

export const Footer = () => {
    return (
        <div>
       <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <div  className="text-2xl font-bold text-white">
            DenialFashion
          </div>
          <p className="text-sm">Discover your unique style with DenialFashion. Quality apparel for every occasion.</p>
          <div className="flex space-x-4">
            <div  aria-label="Facebook" className="hover:text-white transition-colors">
              <Facebook className="h-6 w-6" />
            </div>
            <div  aria-label="Instagram" className="hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
            </div>
            <div  aria-label="Twitter" className="hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Quick divs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Quick divs</h3>
          <ul className="space-y-2">
            <li>
              <div  className="hover:text-white transition-colors text-sm">
                Shop All
              </div>
            </li>
            <li>
              <div  className="hover:text-white transition-colors text-sm">
                New Arrivals
              </div>
            </li>
            <li>
              <div  className="hover:text-white transition-colors text-sm">
                Sale
              </div>
            </li>
            <li>
              <div  className="hover:text-white transition-colors text-sm">
                Best Sellers
              </div>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <div  className="hover:text-white transition-colors text-sm">
                Contact Us
              </div>
            </li>
            <li>
              <div  className="hover:text-white transition-colors text-sm">
                FAQs
              </div>
            </li>
            <li>
              <div  className="hover:text-white transition-colors text-sm">
                Shipping & Returns
              </div>
            </li>
            <li>
              <div  className="hover:text-white transition-colors text-sm">
                Order Tracking
              </div>
            </li>
          </ul>
        </div>

        {/* Legal & Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Information</h3>
          <ul className="space-y-2">
            <li>
              <div  className="hover:text-white transition-colors text-sm">
                About Us
              </div>
            </li>
            <li>
              <div  className="hover:text-white transition-colors text-sm">
                Privacy Policy
              </div>
            </li>
            <li>
              <div  className="hover:text-white transition-colors text-sm">
                Terms of Service
              </div>
            </li>
            <li>
              <div  className="hover:text-white transition-colors text-sm">
                Cookie Policy
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} DenialFashion. All rights reserved.
      </div>
    </footer>
        </div>
    );
};
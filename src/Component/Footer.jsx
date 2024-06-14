import React from 'react';
import { TiSocialFacebookCircular } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
              <li><a href="#" className="hover:underline">Order Status</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul>
              <li><a href="#" className="hover:underline">Gift Cards</a></li>
              <li><a href="#" className="hover:underline">Size Guide</a></li>
              <li><a href="#" className="hover:underline">Store Locator</a></li>
              <li><a href="#" className="hover:underline">Affiliate Program</a></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex flex-col  ">
              <div className="flex items-center gap-2">
                <p><TiSocialFacebookCircular /></p>
                <p>Facebook</p>
              </div>
              <div className="flex items-center gap-2">
                <p><CiTwitter /></p>
                <p>Twitter</p>
              </div>
              <div className="flex items-center gap-2">
                <p><FaLinkedin /></p>
                <p>LinkedIn</p>
              </div>
              <div className="flex items-center gap-2">
                <p><IoLogoInstagram /></p>
                <p>Instagram</p>
              </div>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} ThePerfectFit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


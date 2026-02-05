import React from "react";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12">

          <div data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-6 tracking-wide">
              CONTACT US
            </h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>Call : +971 52 133 0070</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>Email : info@luxlineuae.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>Email : bakhti@luxlineuae.com</span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-300 leading-relaxed">
              At Luxury Line Perfumes, we create exquisite fragrances that
              captivate your senses and leave a lasting impression.
              Explore our collection and find your signature scent today.
            </p>
          </div>

          
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-2xl font-semibold mb-6 tracking-wide">
              BEST PRODUCTS
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Discover our most popular fragrances.
            </p>
          </div>

        </div>

      
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400 text-sm"
        >
          2024 All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;

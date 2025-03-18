import React from 'react';
import { images } from '../constant/index.js';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'; // Correct import for Heroicons v2

const Header = () => {
  return (
    <section>
      <header className="container mx-auto px-8 flex justify-between py-4 items-center">
        <div className="flex items-center space-x-4">
          <img className="w-12 h-auto" src={images.Logo} alt="logo" />
          <h1 className="text-2xl font-bold font-serif">Craftopia</h1>
        </div>

        <div className="flex gap-x-9 items-center">
          <ul className="flex gap-x-5 font-semibold">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>

          <button className="border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer">
            Login
          </button>

          {/* Add cart icon */}
          <div className="relative">
            <ShoppingCartIcon className="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-700 transition-all duration-300" />
            {/* Badge */}
            <span className="absolute top-[-5px] right-[-5px] text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;

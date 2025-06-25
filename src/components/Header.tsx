
import React from 'react';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-orange-600">OrangeShop</h1>
          </div>

          {/* Navigation principale */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Accueil
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Produits
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Collections
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              À propos
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Actions utilisateur */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-orange-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-orange-600 transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-orange-600 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

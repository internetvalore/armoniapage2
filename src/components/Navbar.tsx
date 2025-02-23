import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Dumbbell className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Armonia Fitness</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600">Home</Link>
            <Link to="/corsi" className="text-gray-600 hover:text-purple-600">Corsi</Link>
            <Link to="/chi-siamo" className="text-gray-600 hover:text-purple-600">Chi Siamo</Link>
            <Link to="/contatti" className="text-gray-600 hover:text-purple-600">Contatti</Link>
            <a href="#lead-form" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Prova Gratuita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Home</Link>
              <Link to="/corsi" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Corsi</Link>
              <Link to="/chi-siamo" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Chi Siamo</Link>
              <Link to="/contatti" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Contatti</Link>
              <a href="#lead-form" className="block px-3 py-2 text-purple-600 font-medium">Prova Gratuita</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

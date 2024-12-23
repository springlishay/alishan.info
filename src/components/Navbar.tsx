import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-semibold text-xl">Alishan Tanveer, ACA</Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <Link to="/blogs" className="hover:text-slate-300 transition-colors">Blogs</Link>
            <Link to="/services" className="hover:text-slate-300 transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 hover:bg-slate-800 rounded-md">Home</Link>
            <Link to="/blogs" className="block px-3 py-2 hover:bg-slate-800 rounded-md">Blogs</Link>
            <Link to="/services" className="block px-3 py-2 hover:bg-slate-800 rounded-md">Services</Link>
            <Link to="/contact" className="block px-3 py-2 hover:bg-slate-800 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
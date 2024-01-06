import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Assuming you're using React Icons

const CarNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const LogOut = () => {
    sessionStorage.removeItem('token');
  };

  return (
    <div className='w-full bg-yellow-400 py-6'>
      <div className="wrapper">
        <div className="row">
          <div className="flex md:justify-center items-center justify-between px-2">
            <div className="flex items-center space-x-4 gap-3">
              <NavLink
                to="/carpage"
                className="hidden sm:hidden lg:block xl:block 2xl:block text-black opacity-60 hover:text-black font-bold">
                MASHINALAR STATISTIKA
              </NavLink>
              <NavLink
                to="/kirim-statistika"
                className="hidden sm:hidden lg:block xl:block 2xl:block text-black opacity-60 hover:text-black font-bold">
                KIRIM STATISTIKA
              </NavLink>
              <NavLink
                to="/konfiguratsiya"
                className="hidden sm:hidden lg:block xl:block 2xl:block text-black opacity-60 hover:text-black font-bold">
                KONFIGURATSIYA
              </NavLink>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black opacity-60 hover:text-black">
                {isMenuOpen ? <FaTimes size={27} /> : <FaBars size={27} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <nav className="lg:hidden mt-4 px-4">
              <NavLink
                to="/carpage"
                className="block text-black opacity-60 hover:text-black font-bold mb-2">
                MASHINALAR STATISTIKA
              </NavLink>
              <NavLink
                to="/kirim-statistika"
                className="block text-black opacity-60 hover:text-black font-bold mb-2">
                KIRIM STATISTIKA
              </NavLink>
              <NavLink
                to="/konfiguratsiya"
                className="block text-black opacity-60 hover:text-black font-bold mb-2">
                KONFIGURATSIYA
              </NavLink>
              <button
                onClick={LogOut}
                className="block w-full bg-yellow-500 border border-yellow-400 text-black opacity-60 hover:text-black font-bold cursor-pointer py-2">
                Log out
              </button>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarNavbar;

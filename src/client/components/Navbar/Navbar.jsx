import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={`w-full bg-yellow-400 py-4 md:py-6 md:px-4 ${isOpen ? 'flex flex-cow' : 'flex flex-row'} items-center justify-between`}>
        <div className='hidden md:block text-stone-900 text-lg md:text-2xl lg:text-4xl xl:text-5xl font-bold font-sans mb-2 md:mb-0'>
          KIRDI: <span className='text-white font-bold'>12:05</span>
        </div>
        <div className='hidden md:block text-stone-900 text-lg md:text-2xl lg:text-4xl xl:text-5xl font-bold font-sans md:ml-4 mb-2 md:mb-0 '>
          NARX: <span className='text-white font-bold'>2 000 </span>
          <span className='text-white text-xs md:text-base lg:text-lg xl:text-2xl font-normal font-sans'>/ soat</span>
        </div>
        <div className='hidden md:block text-stone-900 text-lg md:text-2xl lg:text-4xl xl:text-5xl font-bold font-sans mb-2 md:mb-0'>
          CHIQDI: <span className='text-white font-bold'>12:05</span>
        </div>
        <Link to='/signin' className=' hidden md:flex py-2 px-4 bg-yellow-500 text-white font-bold font-sans text-base md:text-lg lg:text-xl xl:text-2xl'>
          Login
        </Link>
        <button onClick={toggleMenu} className='md:hidden px-2 py-1' aria-label='Toggle Menu'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            {isOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            )}
          </svg>
        </button>
    </div>
      <div className='w-full'>
        {isOpen && (
          <div className='md:flex flex items-center justify-between text-center py-3 px-3'>
            <div className='text-stone-900 text-lg md:text-2xl lg:text-3xl xl:text-7xl font-bold font-sans mb-2 md:mb-0'>
              KIRDI: <span className='text-black font-bold'>12:05</span>
            </div>
            <div className='text-stone-900 text-lg md:text-2xl lg:text-3xl xl:text-7xl font-bold font-sans flex items-center justify-center md:ml-4 mb-2 md:mb-0'>
              NARX: <span className='text-black font-bold'>2 000 </span>
              <span className='text-black text-xs md:text-base lg:text-lg xl:text-7l font-normal font-sans'>/ soat</span>
            </div>
            <div className='text-stone-900 text-lg md:text-2xl lg:text-3xl xl:text-7xl font-bold font-sans mb-2 md:mb-0'>
              CHIQDI: <span className='text-black font-bold'>12:05</span>
            </div>
            <Link to='/signin' className='md:flex py-2 px-4 bg-yellow-500 text-black font-bold font-sans text-base md:text-lg lg:text-xl xl:text-2xl'>
              Login
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

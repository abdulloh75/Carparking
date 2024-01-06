import React from 'react';
import flag from '../../assets/uzb.jpg';

const Number = () => {
  return (
    <div className='w-[350px] md:w-[465.78px] h-[91px] bg-white flex items-center justify-center'>
      <div className='flex border-2 border-black w-[340px] md:w-[455.78px] h-[82px] md:rounded-xl'>
        <div className='w-[22%] md:w-[20%] flex items-center justify-center border-r-2 border-black'>
          <h1 className="text-6xl md:text-7xl font-['Digital'] font-semibold mt-2">00</h1>
        </div>
        <div className='w-[70%] md:pl-3 flex items-center justify-center'>
          <div className="flex gap-2 md:gap-5 items-center justify-center text-center">
            <h1 className="text-6xl md:text-7xl font-['Digital'] font-semibold mt-[6px] md:mt-1">000</h1>
            <h1 className="text-6xl md:text-7xl font-sans font-semibold -mt-1">DAV</h1>
          </div>
        </div>
        <div className='w-[8%] md:w-[10%]'>
          <img className='w-6 md:w-8 object-cover mt-5' src={flag} alt="" />
          <span className='text-sm md:text-2xl font-sans font-semibold'>UZ</span>
        </div>
      </div>
    </div>
  );
}

export default Number;

import React, { useEffect, useState } from 'react';
import Number from '../../components/Number/Number';

const Banner = () => {
  const [number, setNumber] = useState('109121');

  useEffect(() => {
    setNumber(number);
  }, []);

  return (
    <div className='bg-stone-900 w-full h-[870px]'>
      <div className='w-full flex items-center justify-center pt-8 md:pt-20'>
        <li className="w-full md:w-[40%] lg:w-[50%] xl:w-[60%] 2xl:w-[75%]  md:border-b-[21px] border-yellow-400 list-none text-center">
          <span className='text-white text-4xl md:text-6xl lg:text-8xl xl:text-[155.61px] 2xl:text-[275.61px] font-bold font-sans md:leading-[3.1875rem]'>{number}</span>
          <span className="text-yellow-400 text-2xl md:text-3xl lg:text-5xl xl:text-[75px] 2xl:text-[114.92px] font-bold font-sans">/ </span>
          <span className="text-yellow-400 text-2xl md:text-3xl lg:text-5xl xl:text-[75px] 2xl:text-[114.92px] font-normal font-sans">so’m</span>
        </li>
      </div>
      <div className='w-full flex items-center justify-center mt-8 md:mt-16'>
        <Number />
      </div>
    </div>
  );
};

export default Banner;

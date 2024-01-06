import React from 'react'
import CarNavbar from '../../components/CarNavbar/CarNavbar'
import Button from '../../components/Button/Button'
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";

const KirimStatistika = () => {
  return (
    <div className='w-full bg-stone-900 h-[100vh]'>
      <CarNavbar />
      <div className='flex'>
        <div className='w-[28%] flex items-start justify-evenly'>
          <div></div>
          <div>
            <div className="w-[364px] h-[364px] border border-yellow-400 mt-10">
              <div class="w-full h-[62px] bg-yellow-400 flex items-center justify-center">
                <h1 className='text-stone-900 text-3xl font-bold font-sans'>BUGUNGI KIRIM</h1>
              </div>
              <div>
                <div className='flex items-center justify-between px-4 mt-2'>
                  <h1 className='text-yellow-400 text-3xl font-bold font-sans'>KIRDI:</h1>
                  <h2 className='text-yellow-400 text-3xl font-bold font-sans'>101 ta</h2>
                </div>
                <div className='flex items-center justify-between px-4 mt-2'>
                  <h1 className='text-yellow-400 text-3xl font-bold font-sans'>CHIQDI:</h1>
                  <h2 className='text-yellow-400 text-3xl font-bold font-sans'>90 ta</h2>
                </div>
                <div className='flex items-center justify-between px-4 mt-2'>
                  <h1 className='text-yellow-400 text-3xl font-bold font-sans'>PARKOVKADA:</h1>
                  <h2 className='text-yellow-400 text-3xl font-bold font-sans'>11 ta</h2>
                </div>
              </div>
              <div class="w-full h-[45px] bg-yellow-400 flex items-center justify-around mt-[123.5px]">
                <h1 className='text-stone-900 text-3xl font-bold font-sans'>JAMI:</h1>
                <h1 className='text-stone-900 text-3xl font-bold font-sans'>1 190 000 so’m</h1>
              </div>
            </div>
            <div className='flex items-center justify-between mt-8'>
              <button className="w-[172.42px] h-[39px] bg-yellow-400 text-black text-xs font-bold font-sans">BU OYLIK</button>
              <button className="w-[172.42px] h-[39px] bg-yellow-400 text-black text-xs font-bold font-sans">BU YILLIK</button>
            </div>
          </div>
        </div>
        <div className='w-[72%]'>
          <Button />
          <div class="w-[97%] h-[764px] bg-yellow-800 bg-opacity-5 mt-5">
            <div className='px-10 pt-9'>
              <div className='flex items-center justify-between'>
                <h1 className='text-yellow-400 text-[62.49px] font-bold font-sans flex items-center justify-center gap-3'><FaHandHoldingUsd color='white'/> JAMI KIRIM: </h1>
                <h2 className='text-white text-[62.49px] font-bold font-sans'>10 901 000 so’m</h2>
              </div>
              <div className='flex items-center justify-between'>
                <h1 className='text-yellow-400 text-[62.49px] font-bold font-sans flex items-center justify-center gap-3'><FaCar color='white' /> MASHINALAR:</h1>
                <h2 className='text-white text-[62.49px] font-bold font-sans'>1 023 ta</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KirimStatistika
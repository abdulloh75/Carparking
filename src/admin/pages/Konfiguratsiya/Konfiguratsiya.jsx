import React from 'react'
import CarNavbar from '../../components/CarNavbar/CarNavbar'
import { FaUser, FaKey, FaHandHoldingUsd } from "react-icons/fa";
import { useForm } from "react-hook-form"

const Konfiguratsiya = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className='w-full bg-stone-900 h-[100vh]'>
      <CarNavbar />
      <div className='flex items-center justify-evenly mt-12'>
        <div className=' bg-yellow-800 w-[30%] h-[798px] text-center flex bg-opacity-5'>
          <form onSubmit={handleSubmit(onSubmit)} className='w-[95%] ml-3'>
            <h1 className="text-center text-white text-[33.25px] mt-10 font-bold font-sans leading-[33.25px]">ADMIN PAROLINI ALMASHTIRISH</h1>
            <div className='flex mt-5'>
              <div className='w-[57px] h-[59.17px] bg-yellow-400 flex items-center justify-center'>
                <FaUser size={34} />
              </div>
              <input className='w-[433.03px] h-[59.17px] bg-stone-900 border-4 border-yellow-400 placeholder:text-white text-white text-xl pl-2 outline-none'
                type="text"
                placeholder='Username'
                {...register("username")}
              />
            </div>
            <div className='flex'>
              <div className='w-[57px] h-[59.17px] bg-yellow-400 flex items-center justify-center mt-4 '>
                <FaKey size={34} />
              </div>
              <input className='w-[433.03px] h-[59.17px] bg-stone-900 border-4 border-yellow-400 mt-4 placeholder:text-white text-white text-xl pl-2 outline-none'
                type="password"
                placeholder='Password'
                {...register("password")}
              />
            </div>
            <div className='w-[100%] flex items-center justify-end mt-3'>
              <button type='submit' className='w-[136.10px] h-[33.77px] px-5 bg-yellow-400 justify-center items-center gap-2.5 inline-flex text-stone-900 text-2xl font-bold font-sans'>SAQLASH</button>
            </div>
          </form>
        </div>
        <div className=' w-[30%] h-[798px] bg-yellow-800 bg-opacity-5 flex'>
          <form onSubmit={handleSubmit(onSubmit)} className='w-[95%] ml-3'>
            <h1 className="text-center text-white text-[33.25px] mt-10 font-bold font-sans leading-[33.25px]">PARKOVKA NARXINI ALMASHTIRISH</h1>
            <div className='flex mt-5'>
              <div className='w-[57px] h-[59.17px] bg-yellow-400 flex items-center justify-center'>
                <FaHandHoldingUsd size={34} />
              </div>
              <input className='w-[433.03px] h-[59.17px] bg-stone-900 border-4 border-yellow-400 placeholder:text-white text-white text-xl pl-2 outline-none'
                type="text"
                placeholder='Narxi'
                {...register("narxi")}
              />
            </div>
            <div className='w-[100%] flex items-center justify-end mt-3'>
              <button type='submit' className='w-[136.10px] h-[33.77px] px-5 bg-yellow-400 justify-center items-center gap-2.5 inline-flex text-stone-900 text-2xl font-bold font-sans'>SAQLASH</button>
            </div>
          </form>
        </div>
        <div className=' w-[30%] h-[798px] bg-yellow-800 bg-opacity-5 flex items-center justify-center'>
          <h1 className='text-center text-white text-[33.25px] mt-10 font-bold font-sans leading-[33.25px]'>QO’SHIMCHA NARSA QO’SHILSA</h1>
        </div>
      </div>
    </div>
  )
}

export default Konfiguratsiya
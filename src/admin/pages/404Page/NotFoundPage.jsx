import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

const NotFoundPage = ({ storedToken }) => {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname.includes("signin")) {
      navigate("/signin")
    }
  }, [])

  return (
    <div className='w-[100%] h-[100vh] bg-stone-900'>
      <Navbar/>
      <div className='w-[100%] h-[80%] flex items-center justify-center flex-wrap'>
        <div className="">
          <h1 className='text-white text-[316.28px] font-bold font-sans'>404</h1>
          <div className='w-[637px] md:-mt-20 h-20 px-[19px] bg-yellow-400 justify-center items-center gap-2.5 inline-flex '>
            <h1 className='text-stone-900 text-[53.01px] font-bold font-sans'>SAHIFA MAVJUD EMAS</h1>
          </div>
          <div className='flex items-center justify-center mt-5'>
            <button className='w-[244.41px] h-[57.81px] px-[28.71px] py-[9.40px] rounded-[33.16px] border-2 border-yellow-400 justify-center items-center gap-[4.95px] inline-flex text-yellow-400 text-[26.23px] font-bold font-sans'>Ortga qaytish</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
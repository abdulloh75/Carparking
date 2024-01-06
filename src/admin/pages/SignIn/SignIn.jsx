import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { FaUser, FaKey } from "react-icons/fa";

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState({
    login: '',
    password: '',
  });

  const correctLogin = 'admin';
  const correctPassword = '12345';

  const handleLogin = () => {
    if (username.login === correctLogin && username.password === correctPassword) {
      const token = 'wncklSKnjkNBXJKNWKNLKNLKNLJU89XuanxiusbXUBXW';
      sessionStorage.setItem('token', token);
      navigate('/carpage');
    } else {
      console.log('Incorrect login or password');
    }
  };

  return (
    <div className='w-full h-screen bg-stone-900'>
      <Navbar />
      <div className='w-full h-4/5 flex items-center justify-center'>
        <div className="w-full md:w-[500px] text-center flex items-center justify-center">
          <form>
            <h1 className='text-white text-3xl md:text-7xl font-bold font-sans mb-4 md:mb-12'>ADMIN KIRISH</h1>
            <div className='flex'>
              <div className='w-16 h-16 md:w-[77px] md:h-[79px] bg-yellow-400 flex items-center justify-center'>
                <FaUser size={20} />
              </div>
              <input className='w-full md:w-[681px] h-16 md:h-[79px] bg-stone-900 border-4 border-yellow-400 placeholder:text-white text-white text-xl pl-2 outline-none'
                type="text"
                placeholder='Username'
                onChange={(e) => setUsername({ ...username, login: e.target.value })}
              />
            </div>
            <div className='flex mt-4 md:mt-6'>
              <div className='w-16 h-16 md:w-[77px] md:h-[79px] bg-yellow-400 flex items-center justify-center'>
                <FaKey size={20} />
              </div>
              <input className='w-full md:w-[681px] h-16 md:h-[79px] bg-stone-900 border-4 border-yellow-400  placeholder:text-white text-white text-xl pl-2 outline-none'
                type="password"
                placeholder='Password'
                onChange={(e) => setUsername({ ...username, password: e.target.value })}
              />
            </div>
            <div className='w-full flex items-center justify-end mt-3'>
              <button onClick={handleLogin} className='w-full md:w-[139px] h-[45px] md:h-[45px] px-5 bg-yellow-400 justify-center items-center gap-2.5 inline-flex text-stone-900 text-xl md:text-3xl font-bold font-sans'>KIRISH</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn;

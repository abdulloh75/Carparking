// App.js
import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router';
import Home from './client/pages/Home/Home';
import SignIn from './admin/pages/SignIn/SignIn';
import NotFoundPage from './admin/pages/404Page/NotFoundPage';
import CarPage from './admin/pages/CarPage/CarPage';
import KirimStatistika from './admin/pages/KirimStatistika/KirimStatistika';
import Konfiguratsiya from './admin/pages/Konfiguratsiya/Konfiguratsiya';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');

    if (!storedToken) {
      navigate('/signin');
    }
  }, [navigate, location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/kirim-statistika" element={<KirimStatistika/>} />
        <Route path="/konfiguratsiya" element={<Konfiguratsiya/>} />
        <Route path="/carpage" element={<CarPage/>} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

import React from 'react';
import { mockData } from '../../data/data';
import CarNavbar from '../../components/CarNavbar/CarNavbar';

const CarPage = () => {
  return (
    <div className='w-full bg-stone-900 h-[100vh]'>
      <CarNavbar />
      <div className='flex items-center justify-center w-full mt-14 overflow-x-auto'>
        <div className="w-full md:w-[90%] overflow-x-auto flex items-center justify-center">
          <table className="p-4 md:p-10 w-[80%]">
            <thead>
              <tr className="bg-yellow-400 bg-opacity-40 text-white uppercase text-sm h-[78px]">
                <th className="py-2 md:py-4 px-4 md:px-6 text-white text-xl md:text-3xl font-bold font-sans">T/r</th>
                <th className="py-2 md:py-4 px-4 md:px-6 text-white text-xl md:text-3xl font-bold font-sans">RAQAMI</th>
                <th className="py-2 md:py-4 px-4 md:px-6 text-white text-xl md:text-3xl font-bold font-sans">VAQTI</th>
                <th className="py-2 md:py-4 px-4 md:px-6 text-white text-xl md:text-3xl font-bold font-sans">NARXI</th>
              </tr>
            </thead>
            <tbody>
              {mockData.data.map((row, index) => (
                <tr key={index} className="">
                  <td className="py-2 md:py-4 px-4 md:px-16 text-center text-white text-xl md:text-3xl font-bold font-['Digital']">{row.id}</td>
                  <td className='bg-white flex items-center justify-center mt-2'><td className="py-2 md:py-4 px-4 md:px-16 text-center text-black text-xl md:text-3xl font-bold font-['Digital']">{row.number}</td></td>
                  <td className="py-2 md:py-4 px-4 md:px-16 text-white text-base md:text-xl font-bold font-sans">
                    {row.enter} <br /> {row.close ? "CHIQDI: Hali parkovkada" : `CHIQDI: 17:29    29.12.2023`}
                  </td>
                  <td className="py-2 md:py-4 px-4 md:px-16 text-center text-white text-xl md:text-3xl font-bold font-sans">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CarPage;

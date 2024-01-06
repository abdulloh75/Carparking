import React from 'react';
import { useForm } from "react-hook-form"

const Button = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex gap-5 mt-10'>
          <input type="number"
            className="w-[150.09px] h-[39px] bg-[#796813] border border-yellow-400 text-black text-xs font-bold font-sans pl-2 placeholder:text-black outline-none"
            placeholder='SANADAN'
            {...register("sanadan")}
          />
          <input type="number"
            className="w-[150.09px] h-[39px] bg-[#796813] border border-yellow-400 text-black text-xs font-bold font-sans pl-2 placeholder:text-black outline-none"
            placeholder='SANAGA'
            {...register("sanaga")}
          />
          <input type="number"
            className="w-[150.09px] h-[39px] bg-[#796813] border border-yellow-400 text-black text-xs font-bold font-sans pl-2 placeholder:text-black outline-none"
            placeholder='OYDAN'
            {...register("oydan")}
          />
          <input type="number"
            className="w-[150.09px] h-[39px] bg-[#796813] border border-yellow-400 text-black text-xs font-bold font-sans pl-2 placeholder:text-black outline-none"
            placeholder='OYGA'
            {...register("oyga")}
          />
          <input type="number"
            className="w-[150.09px] h-[39px] bg-[#796813] border border-yellow-400 text-black text-xs font-bold font-sans pl-2 placeholder:text-black outline-none"
            placeholder='YILDAN'
            {...register("yildan")}
          />
          <input type="number"
            className="w-[150.09px] h-[39px] bg-[#796813] border border-yellow-400 text-black text-xs font-bold font-sans pl-2 placeholder:text-black outline-none"
            placeholder='YILGA'
            {...register("yilga")}
          />
          <button
            type="submit"
            className="w-[170.09px] h-[39px] bg-yellow-400 text-black text-xs font-bold font-sans"
          >
            SARALASH
          </button>
        </div>
      </form>
    </>
  );
};
export default Button;
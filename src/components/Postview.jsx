import React from 'react'
import sun from './assets/sun.svg';
 
const Postview = ({title,owner,desc}) => {
  return (
     <div className='flex justify-center items-center'>
    <div className="bg-[#1c1c24] flex justify-center mt-3   flex-col rounded-[10px] w-4/6 sm:p-10 p-4">
 
        <div className="font-epilogue font-bold text-[18px] text-white">{title}</div>
         <div className="font-epilogue text-[#808191] mt-3 max-w-xl"> {desc}</div>
         <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img src={sun} alt="user" className="w-1/2 h-1/2 object-contain"/>
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">{owner}</span></p>
        </div>
    

      </div>
      </div> 
  )
}

export default Postview
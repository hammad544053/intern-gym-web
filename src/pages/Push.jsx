import React from 'react'
import { Dumbbell, CandyOff, ShowerHead, Ambulance } from 'lucide-react';

const Push = () => {
  return (
    <div>
      <div className='text-white py-14'>
        <h1 className='text-3xl font-bold text-center'>
          Push Your Health Forward
        </h1>
        <p className='text-center text-slate-400 px-8 mx-auto'>
          Embark on a journey towards better health and vitality. Every step forward
          is a step towards a stronger, more vibrant you. Push your boundaries. Push
          your health forward, and let your inner strength shine.
        </p>
      </div>
      <div className='flex flex-wrap justify-around text-white'>
        <div className='w-full sm:w-1/2 md:w-1/4 text-center p-2'>
          <Dumbbell className='text-lime-500 w-[100px] h-[140px] mx-auto' />
          <h1 className='font-bold py-2'>QUALITY EQUIPMENT</h1>
          <p>Reliable performance starts with quality equipment. Our products are built to last ensuring for success.</p>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/4 text-center p-2'>
          <CandyOff className='text-yellow-500 w-[100px] h-[140px] mx-auto' />
          <h1 className='font-bold py-2'>CLEANLINESS</h1>
          <p>Cleanliness is the cornerstone of a healthy and inviting promoting well-being and positivity.</p>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/4 text-center p-2'>
          <ShowerHead className='text-blue-500 w-[100px] h-[140px] mx-auto' />
          <h1 className='font-bold py-2'>SHOWER SERVICE</h1>
          <p>Cleanliness is the cornerstone of a healthy and inviting promoting well-being and positivity.</p>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/4 text-center p-2'>
          <Ambulance className='text-red-500 w-[100px] h-[140px] mx-auto' />
          <h1 className='font-bold py-2'>HEALTHY NUTRITION PLAN</h1>
          <p>Empower your well-being with our healthy nutrition plan wholesome choices tailored just for you.</p>
        </div>
        <button className='bg-yellow-500 text-black hover:bg-blue-500 hover:text-white hover:font-bold rounded font-bold px-2 py-2 flex mx-auto'>Get To Know Us </button>
      </div>
    </div>
  );
}

export default Push;




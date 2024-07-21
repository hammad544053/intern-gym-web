import React from 'react'
import { Dumbbell } from 'lucide-react';
import { CandyOff } from 'lucide-react';
import { ShowerHead } from 'lucide-react';
import { Ambulance } from 'lucide-react';



const Push = () => {
  return (
    <div className=' text-white py-14'>
  <h1 className='text-3xl font-bold text-center'>
    Push Your Health Forward
  </h1>
  <p className='text-center text-slate-400 px-8 mx-auto'>
    Embark on a journey towards better health and vitality. Every step forward
    is a step towards a stronger, more vibrant you. Push your boundaries. Push
    your health forward, and let your inner strength shine.
  </p>
    <div className='flex justify-between text-center px-4 lg:px-[90px] sm:px-[20px]'>
    <div>
    <Dumbbell className=' text-lime-500 w-[100px] h-[140px]' />
    </div>
    <div>
    <CandyOff className='text-lime-500 -mr-[20px] w-[100px] h-[140px]' />
    </div>
    <div>
    <ShowerHead className=' text-lime-500 -mr-[20px] w-[100px] h-[140px]' />
    </div>
    <div>
  <Ambulance className='text-lime-500 md:mr-[30px]  w-[100px] h-[140px]' />
  </div>
  </div>

  <div className='flex  justify-center text-center '>
  <div className=' pr-[10px]'>
    <h1 className='font-bold py-2'>QUALITY EQUIPMENT</h1>
    <p className='text-white'>Reliable performance starts with quality equipment. Our products are built to last ensuring for success.</p>
  </div>
  <div className=' pr-[10px]'>
    <h1 className='font-bold'>CLEANLINESS</h1>
    <p className='text-white py-2'>Cleanliness is the cornerstone of a healthy and inviting promoting well- being and positivity.</p>
  </div>
  <div className=' pr-[10px]'>
    <h1 className='font-bold'>SHOWER SERVICE</h1>
    <p className='text-white py-2'>Cleanliness is the cornerstone of a healthy and inviting promoting well- being and positivity.</p>
  </div>
  <div className=' pr-[2px]'>
    <h1 className='font-bold py-2'>HEALTHY NUTRITION PLAN</h1>
    <p className='text-white'>Empower your well-being with our healthy nutrition plan wholesome choices tailored just for you.</p>
  </div>
</div>
<button className='bg-yellow-500 rounded px-2 py-2 flex mx-auto'>Get To Know Us </button>
</div>
  )
}

export default Push

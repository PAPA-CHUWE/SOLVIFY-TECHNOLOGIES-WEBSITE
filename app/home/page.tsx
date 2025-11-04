"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";


export default function Hero() {
  return (
    <div
    className='w-full relative lg:h-screen bg-[#000066] md:mt-0 mt-10' 
    id='home'
  >
    <div className='max-w-6xl mx-auto px-4'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 py-5'>
        <div className='md:w-1/2 w-full order-1 md:order-1'>
          <h1 className='md:text-4xl font-bold mb-6 lg:mt-20 text-white mt-5 tracking-widest text-2xl'>
            Empowering Digital Transformation Through
            <span className='text-cyan-600 block mt-2'>
              AI-Driven Solutions
            </span>
          </h1>

          <p className='md:text-lg text-gray-200 mb-8 tracking-widest text-sm'>
            Accelerate your business growth with our cutting-edge IT
            consultancy services. Specializing in intelligent automation,
            mobile innovation, and web solutions that leverage AI, ML, and IoT
            technologies to future-proof your operations.
          </p>

          <a
            href='#contact'
            className='relative inline-block group lg:mt-0 mt-10'
          >
            <div className='absolute -inset-1 rounded-lg animate-rotate-ring'>
              <div className='absolute inset-0 rounded-lg border-2 border-gradient bg-linear-to-r from-yellow-400 via-yellow-300 to-transparent opacity-50 group-hover:opacity-75 transition-all'></div>
            </div>

            <div className='relative bg-[#e3c53c] group-hover:bg-yellow-500 text-[#000066] tracking-widest font-semibold px-8 py-3 rounded-lg transition-all duration-300 max-w-[25rem] text-sm flex items-center justify-center gap-2'>
              Explore
              <ArrowRight
                className='transition-transform group-hover:translate-x-1'
                size={20}
              />
            </div>
          </a>
        </div>
        <div className='md:w-1/2 w-full order-2 md:order-2'>
          <div className='transform scale-y-[-1] lg:mt-10 mt-5'>
            <Image
              src='/images/aiHand.png'
              alt='logo'
              className='md:w-[80vh] transform scale-y-[-1] mx-auto '
              width={450}
              height={350}
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

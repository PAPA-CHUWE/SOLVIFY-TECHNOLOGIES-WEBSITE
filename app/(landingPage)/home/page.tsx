"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";


export default function Hero() {

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div
    className='w-full relative lg:h-screen bg-[#010048] md:mt-0 mt-10' 
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

          <Button
          onClick={() => scrollToSection('#contact')}
          className="hidden lg:inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#e3c53c] text-[#000066] font-semibold tracking-widest hover:bg-[#000066]/70 hover:text-white transition-all hover:ring-1 hover:ring-cyan-400"
        >
          Explore
          <ArrowUpRightIcon className="w-5 h-5" />
        </Button>
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

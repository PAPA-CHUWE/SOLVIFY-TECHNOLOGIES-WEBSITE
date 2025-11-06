'use client'

import { ServiceList } from '@/app/constants/serviceList'
import ServiceCard from '@/app/landingPageComponents/ServiceCard'
import { Button } from '@/components/ui/button'
import React from 'react'

const Services = () => {
  return (
    <section
      id='services'
      className='w-screen min-h-[110vh] flex items-center justify-center overflow-x-hidden py-16 md:px-0 px-5'
    >
      <div className='w-full max-w-7xl space-y-10'>
        {/* Section Heading */}
        <div className='w-full flex flex-col items-center justify-center space-y-4'>
          <h4 className='md:text-3xl text-[#e3c53c] font-bold text-xl tracking-widest text-center'>
            Our Services
          </h4>
          <p className='text-cyan-600 text-center max-w-2xl leading-relaxed'>
            <span className='text-lg font-semibold tracking-widest italic text-white'>
              Solvify Technologies
            </span>{' '}
            offers a wide range of services designed to help businesses thrive
            in the digital era. From cutting-edge software development and
            mobile apps to AI-driven automation, we provide innovative solutions
            tailored to your unique needs and objectives.
          </p>

          {/* Action Buttons */}
          <div className='flex justify-center '>
            <div className='inline-flex rounded-full overflow-hidden shadow-lg gap-5'>
              <Button
                className='bg-transparent ring-1 ring-cyan-700 text-white font-semibold tracking-widest
                 hover:bg-[#e3c53c] hover:text-[#000066] transition-colors duration-300'
              >
                Get a Quote
              </Button>
              <Button
                variant='outline'
                className='bg-[#e3c53c] ring-1 ring-[#000066] text-[#000066] font-semibold tracking-widest
                 hover:bg-transparent hover:text-white transition-colors duration-300'
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className='flex items-center w-full justify-center'>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-6 mt-6'>
            {ServiceList.map((service, idx) => (
              <ServiceCard
                key={idx}
                icon={service.icon}
                title={service.title}
                description={service.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

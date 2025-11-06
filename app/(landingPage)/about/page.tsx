'use client'

import React from 'react'
import Image from 'next/image'
import { Star, Lightbulb, BookOpenCheck, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import CustCard from '@/app/landingPageComponents/CustCard'

const About = () => {
  return (
    <section
      id='about'
      className='w-screen min-h-[110vh] flex items-center justify-center overflow-x-hidden py-16'
    >
      <div className='w-full max-w-7xl space-y-10'>
        <div className='flex flex-col lg:flex-row justify-center gap-10 w-full'>
          {/* Image Section */}
          <div className='flex justify-center items-center lg:w-1/3'>
            <Image
              src='/images/front_view_woman_with_vr.png'
              alt='about'
              className='rounded-tl-full rounded-tr-full object-contain'
              width={650}
              height={550}
              priority
              quality={100}
            />
          </div>

          {/* Text Section */}
          <div className='flex flex-col lg:w-1/3 space-y-4'>
            <h4 className='tracking-widest text-3xl font-semibold text-white'>
              We Care, We Deliver.
            </h4>

            {/* Rating */}
            <div className='flex items-center gap-5 mt-4'>
              <div className='flex items-center text-yellow-400'>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={20} fill='currentColor' />
                ))}
              </div>
              <p className='text-white'>
                <span className='font-semibold'>(4.7)</span> Google Rating
              </p>
            </div>

            <p className='text-cyan-500 tracking-widest font-semibold text-sm leading-relaxed max-w-md'>
              Solvify Technologies provides IT consultancy, mobile and web
              development, and RPA-based automation. We integrate AI, ML, and
              IoT to help businesses innovate and stay ahead in the digital age.
            </p>

            {/* Services Section */}
            <Card className='bg-transparent text-primary-foreground rounded-3xl p-6 mt-6 space-y-6'>
              <CardContent className='flex flex-col lg:flex-row items-center gap-6 p-0'>
                <Image
                  src='/logos/Solvify.svg'
                  alt='Solvify logo'
                  width={180}
                  height={120}
                  className='mx-auto'
                  priority
                />

                <Separator
                  orientation='vertical'
                  className='hidden lg:block bg-white h-40'
                />

                {/* Features */}
                <div className='flex flex-col gap-3 flex-1'>
                  {[
                    'Custom Software Development',
                    'Mobile App Development',
                    'AI & Automation',
                    'Cloud Solutions'
                  ].map((text, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                        idx % 1 === 0
                          ? 'bg-[#000066]/40 backdrop-blur-lg shadow-lg border-b border-[#00ffff]'
                          : 'bg-[#000066] shadow-none'
                      }`}
                    >
                      <span className='text-cyan-300 font-semibold'>{`0${
                        idx + 1
                      }.`}</span>
                      <p className='text-white font-light'>{text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className='flex flex-col items-center gap-6 lg:w-1/3 max-sm:items-center max-sm:justify-center'>
            {[
              { number: '70+', label: 'Satisfied Clients' },
              { number: '60+', label: 'Projects Delivered' },
              { number: '3+', label: 'Years Experience' }
            ].map((stat, idx) => (
              <Card
                key={idx}
                className={`rounded-3xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all max-w-44 
        ${idx === 1 ? 'ml-20' : ''} 
        bg-white/10 backdrop-blur-md border border-white/20 shadow-lg`}
              >
                <CardContent className='flex flex-col items-center justify-center p-6'>
                  <span className='text-4xl font-bold text-background drop-shadow-md'>
                    {stat.number}
                  </span>
                  <span className='text-card mt-2 text-sm tracking-widest font-semibold'>
                    {stat.label}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className='md:w-full flex flex-col md:flex-row items-center justify-center mt-8 gap-6 pb-5 p-6'>
          {[
            {
              number: '01',
              title: 'Innovation',
              description:
                'Cutting-edge solutions with AI, ML, and IoT integration for future-ready businesses.',
              icon: <Lightbulb size={60} />
            },
            {
              number: '02',
              title: 'Expertise',
              description:
                'Skilled team with 3+ years experience delivering 120+ successful projects.',
              icon: <BookOpenCheck size={60} />
            },
            {
              number: '03',
              title: 'Client Focus',
              description:
                '30+ satisfied clients through customized solutions and dedicated support.',
              icon: <Users size={60} />
            }
          ].map((card, idx) => (
            <CustCard
              key={idx}
              number={card.number}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

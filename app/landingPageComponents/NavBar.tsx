'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import { MenuItems } from '../constants/menuItems'
import { ArrowUpRightIcon, Menu as MenuIcon } from 'lucide-react'


export default function NavBar () {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000066]/40 backdrop-blur-lg shadow-lg border-b border-[#00ffff]/30'
          : 'bg-[#000066] shadow-none'
      }`}

     
    >
      <div className='flex py-4 px-4 sm:px-10 min-h-[70px] items-center justify-between'>
        {/* Logo */}
        <Link href='/'>
          <Image
            src='/logos/solvify.svg'
            alt='Solvify Logo'
            className='hidden sm:block w-36'
            width={130}
            height={100}
          />
          <Image
            src='/logos/solvify-short.svg'
            alt='Solvify Logo'
            className='sm:hidden w-9'
            width={130}
            height={100}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className='hidden lg:flex gap-x-6'>
          {MenuItems.map(item => (
            <Link
              key={item.label}
              href={item.path}
              className={`font-medium transition-colors ${
                scrolled
                  ? 'text-[#e3c53c] hover:text-cyan-400'
                  : 'text-white hover:text-cyan-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className='hidden lg:flex space-x-4'>
          <a
            href='#contact'
            className='relative inline-block group lg:mt-0 mt-10'
          >
            <div className='absolute -inset-1 rounded-lg animate-rotate-ring'>
              <div className='absolute inset-0 rounded-lg border-2 border-gradient bg-linear-to-r from-[#e3c53c] via-[#000066] to-transparent opacity-70 group-hover:opacity-75 transition-all'></div>
            </div>

            <div className='relative bg-[#e3c53c] group-hover:bg-[#000066]/65 text-[#000066] hover:text-[#ffffff] tracking-widest font-semibold px-8 py-3 rounded-lg transition-all duration-300 max-w-100 text-sm flex items-center justify-center gap-2'>
              Explore
              <ArrowUpRightIcon
                className='transition-transform group-hover:translate-x-1'
                size={20}
              />
            </div>
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size={'icon-lg'}
              variant={'ghost'}
              className='lg:hidden p-2 ring-2 ring-cyan-400'
            >
              <MenuIcon className='w-6 h-6 text-background' />
            </Button>
          </SheetTrigger>
          <SheetContent side='top' className='w-full h-full p-6'>
            <div className='flex flex-col gap-4'>
              {MenuItems.map(item => (
                <Link
                  key={item.label}
                  href={item.path}
                  className='text-[#000066] font-medium hover:text-cyan-400'
                >
                  {item.label}
                </Link>
              ))}

              <div className='flex flex-col gap-2 mt-6'>
                <a
                  href='#contact'
                  className='relative inline-block group lg:mt-0 mt-10'
                >
                  <div className='absolute -inset-1 rounded-lg animate-rotate-ring'>
                    <div className='absolute inset-0 rounded-lg border border-gradient bg-linear-to-r from-yellow-400 via-yellow-300 to-transparent opacity-50 group-hover:opacity-75 transition-all'></div>
                  </div>

                  <div className='relative bg-[#e3c53c] group-hover:bg-[#000066]/65 text-[#000066] hover:text-[#ffffff] tracking-widest font-semibold px-8 py-3 rounded-lg transition-all duration-300 max-w-100 text-sm flex items-center justify-center gap-2'>
                    Explore
                    <ArrowUpRightIcon
                      className='transition-transform group-hover:translate-x-1'
                      size={20}
                    />
                  </div>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

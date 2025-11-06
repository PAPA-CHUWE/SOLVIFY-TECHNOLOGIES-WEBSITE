'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuItems } from '../constants/menuItems';
import { ArrowUpRightIcon, Menu as MenuIcon } from 'lucide-react';
import Link from 'next/link';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight active menu item
  useEffect(() => {
    const handleSectionScroll = () => {
      const sections = MenuItems.map((item) => document.querySelector(item.path));
      sections.forEach((section, idx) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          setActiveSection(MenuItems[idx].path);
        }
      });
    };
    window.addEventListener('scroll', handleSectionScroll);
    return () => window.removeEventListener('scroll', handleSectionScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#000066]/40 backdrop-blur-lg shadow-lg border-b border-[#00ffff]/30'
        : 'bg-[#000066] shadow-none'
    }`}
    >
      <div className="flex py-4 px-4 sm:px-10 min-h-[70px] items-center justify-between">
        {/* Logo */}
        <Image
          src="/logos/solvify.svg"
          alt="Solvify Logo"
          className="hidden sm:block w-36"
          width={130}
          height={100}
        />
        <Image
          src="/logos/solvify-short.svg"
          alt="Solvify Logo"
          className="sm:hidden w-9"
          width={130}
          height={100}
        />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-x-6">
          {MenuItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              onClick={() => scrollToSection(item.path)}
              className={`font-medium cursor-pointer transition-colors ${
                activeSection === item.path
                  ? 'text-[#e3c53c] drop-shadow-[0_0_8px_#e3c53c]'
                  : 'text-white hover:text-cyan-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Button
          onClick={() => scrollToSection('#contact')}
          className="hidden lg:inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#e3c53c] text-[#000066] font-semibold tracking-widest hover:bg-[#000066]/70 hover:text-white transition-all hover:ring-1 hover:ring-cyan-400"
        >
          Explore
          <ArrowUpRightIcon className="w-5 h-5" />
        </Button>

        

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon-lg" variant="ghost" className="lg:hidden p-2 ring-2 ring-cyan-400">
              <MenuIcon className="w-6 h-6 text-gray-800" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="w-full h-full p-6 bg-white">
            <div className="flex flex-col gap-4">
              {MenuItems.map((item) => (
                <Link
                key={item.label}
                href={item.path}
                onClick={() => scrollToSection(item.path)}
                className={`font-medium cursor-pointer transition-colors ${
                  activeSection === item.path
                    ? 'text-[#e3c53c] drop-shadow-[0_0_8px_#e3c53c]'
                    : 'text-white hover:text-cyan-300'
                }`}
              >
                {item.label}
              </Link>
              ))}

              <Button
                onClick={() => scrollToSection('#contact')}
                className="mt-6 w-full flex items-center justify-center gap-2 bg-[#e3c53c] text-[#000066] rounded-lg hover:bg-[#000066]/70 hover:text-white transition-all"
              >
                Explore
                <ArrowUpRightIcon className="w-5 h-5" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
